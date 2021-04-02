import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { message } from "antd";

import {
	getCurrentSongAction,
	changeSequenceAction,
	changePlaySongAction,
	changeCurrentLyricIndex,
} from "../store/actionCreators";
import {
	getSizeImage,
	getPlayUrl,
	formatMinuteSecond,
} from "@/utils/format-utils";

import { Slider } from "antd";
import { AppPlayBarWrapper, Control, PlayInfo, Operate } from "./style";

export default memo(function KXLAppPlayBar() {
	// state
	const [currentTime, setCurrentTime] = useState(0);
	const [progress, setProgress] = useState(0);
	const [ischange, setIschange] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	// redux hook
	const {
		currentSong,
		sequence,
		playlist,
		lyricList,
		currentLyricIndex,
	} = useSelector(
		(state) => ({
			currentSong: state.getIn(["player", "currentSong"]),
			sequence: state.getIn(["player", "sequence"]),
			playlist: state.getIn(["player", "playlist"]),
			lyricList: state.getIn(["player", "lyricList"]),
			currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
		}),
		shallowEqual
	);

	const dispatch = useDispatch();
	const myAudio = useRef();

	// other hook
	useEffect(() => {
		dispatch(getCurrentSongAction(1336856864));
	}, [dispatch]);

	useEffect(() => {
		myAudio.current.src = getPlayUrl(currentSong.id);
		myAudio.current.play().then((res) => {
			setIsPlaying(true);
		});
	}, [currentSong]);

	// other handle
	const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
	const songName = currentSong.name || "未知歌曲";
	const artistName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
	const duration = currentSong.dt || 0;
	const showDuration = formatMinuteSecond(duration);
	const showCurrentTime = formatMinuteSecond(currentTime);

	// handle function
	const playMusic = useCallback(() => {
		isPlaying ? myAudio.current.pause() : myAudio.current.play();
		setIsPlaying(!isPlaying);
	}, [isPlaying]);

	// 播放中的处理
	const timeUpdate = (e) => {
		//e.currentTarget.currentTime是秒，需要转化为毫秒
		const currentTime = e.currentTarget.currentTime * 1000;
		if (!ischange) {
			setCurrentTime(currentTime);
			// duration为毫秒
			setProgress((currentTime / duration) * 100);
		}
		// 对歌词的处理
		// 找到当前time对应的歌词
		let i = 0;
		for (; i < lyricList.length; i++) {
			const lyricTime = lyricList[i].time;
			if (currentTime < lyricTime) {
				break;
			}
		}
		// 如果当前播放时间小于歌词的时间，则显示i-1时间的歌词
		const finalIndex = i - 1;
		if (finalIndex !== currentLyricIndex) {
			dispatch(changeCurrentLyricIndex(finalIndex));
			const content = lyricList[finalIndex].content;

			// 歌词显示使用antd的Message
			message.open({
				key: "lyric",
				content: content,
				duration:0,
				className:"lyric-class"
			});
		}
	};

	// 播放到结束的时候
	const timeend = () => {
		setIsPlaying(true);
		if (sequence === 2 || playlist.length === 1) {
			myAudio.current.currentTime = 0;
			myAudio.current.play();
		} else {
			dispatch(changePlaySongAction(1));
		}
	};

	const sliderChange = useCallback(
		(value) => {
			setIschange(true);
			const currentTime = (value / 100) * duration;
			setCurrentTime(currentTime);
			setProgress(value);
		},
		[duration]
	);

	const sliderAfterChange = useCallback(
		(value) => {
			// 设置拖动进度条后改变slider的value值，可以改变进度条的进度显示
			setProgress(value);

			// 改变audio的实际播放进度
			const time = ((value / 100) * duration) / 1000;
			myAudio.current.currentTime = time;
			setCurrentTime(time);

			// 设置拖动后change的值改为false，这样timeUpdate中可以继续更新currentTime和progress
			setIschange(false);

			// 拖动后如果未在播放，则进行歌曲播放判断
			if (!isPlaying) {
				playMusic();
			}
		},
		[duration, isPlaying, playMusic]
	);

	const changeSequence = () => {
		let currentSequence = sequence + 1;
		if (currentSequence > 2) {
			currentSequence = 0;
		}
		dispatch(changeSequenceAction(currentSequence));
	};

	// 切歌，下一首或上一首
	const changePlayMusic = (tag) => {
		setIsPlaying(true);
		dispatch(changePlaySongAction(tag));
	};

	return (
		<AppPlayBarWrapper className="sprite_playbar">
			<div className="content wrap-v2">
				<Control isPlaying={isPlaying}>
					<button
						className="prev sprite_playbar"
						onClick={(e) => changePlayMusic(-1)}
					></button>
					<button
						className="play sprite_playbar"
						onClick={(e) => playMusic()}
					></button>
					<button
						className="next sprite_playbar"
						onClick={(e) => changePlayMusic(1)}
					></button>
				</Control>
				<PlayInfo>
					<div className="image">
						<img src={getSizeImage(picUrl, 34)} alt="" />
						<a href="/todo" className="sprite_playbar">
							封面图
						</a>
					</div>
					<div className="info">
						<div className="song">
							<span>
								<a href="/todo" className="song-name">
									{songName}
								</a>
							</span>
							<span>
								<a href="/todo" className="artist-name">
									{artistName}
								</a>
							</span>
						</div>
						<div className="progress">
							<Slider
								tooltipVisible={false}
								onChange={sliderChange}
								onAfterChange={sliderAfterChange}
								value={progress}
							/>
							<div className="time">
								<span className="current-time">{showCurrentTime}</span>
								<span> / </span>
								<span>{showDuration}</span>
							</div>
						</div>
					</div>
				</PlayInfo>
				<Operate sequence={sequence}>
					<div className="left">
						<div className="add btn sprite_playbar">
							<a href="/todo">收藏</a>
						</div>
						<div className="share btn sprite_playbar">
							<a href="/todo">分享</a>
						</div>
					</div>
					<div className="right sprite_playbar">
						<button className="volume btn sprite_playbar">
							<a href="/todo"> </a>
						</button>
						<button
							className="mode btn sprite_playbar"
							onClick={(e) => {
								changeSequence();
							}}
						></button>
						<button className="list btn sprite_playbar">
							<span>{playlist.length}</span>
						</button>
					</div>
				</Operate>
				<audio ref={myAudio} onTimeUpdate={timeUpdate} onEnded={timeend} />
			</div>
		</AppPlayBarWrapper>
	);
});
