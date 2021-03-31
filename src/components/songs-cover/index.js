import React, { memo } from "react";

import {getCount,getSizeImage} from '@/utils/format-utils'

import { SongsCoverWrapper } from "./style";

export default memo(function KXLSongsCover(props) {
	const { info } = props;
	return (
		<SongsCoverWrapper>
			<div className="cover-top">
				<img src={getSizeImage(info.picUrl,140)} alt="" />
				<a
					href={"./playlist?id=" + info.id}
					title={info.name}
					className="msk sprite_covor"
				>
					{" "}
				</a>
				<div className="info sprite_covor">
					<span>
						<i className="headphone sprite_icon"></i>
						<span>{getCount(info.playCount)}</span>
					</span>
					<i className="play sprite_icon"></i>
				</div>
			</div>
			<div className="cover-bottom text-nowrap">
				<a href="todo">{info.name}</a>
			</div>
			<div className="cover-source text-nowrap">
				<span className="nicknameBy">by </span>
				<span className="nickname">
					{info.copywriter || info.creator.nickname}
				</span>
			</div>
		</SongsCoverWrapper>
	);
});
