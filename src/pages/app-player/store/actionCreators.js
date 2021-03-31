import { 
  getSongDetail,
  getLyric
} from "@/network/play";

import * as actionTypes from "./constants";

import {parseLyric} from '@/utils/parse-lyric'

const changeCurrentSongAction = (currentSong) => ({
	type: actionTypes.CHANGE_CURRENT_SONG,
	currentSong,
});

const changeCurrentSongIndexAction = (currentSongIndex) => ({
	type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
	currentSongIndex,
});
const changePlayListAction = (playlist) => ({
	type: actionTypes.CHANGE_PLAY_LIST,
	playlist,
});

const changeLyricListAction = (lyricList) => ({
  type:actionTypes.CHANGE_LYRIC_LIST,
  lyricList,
})

// 以下都是需要暴露的action
// 切换循环模式
export const changeSequenceAction = (sequence) => {
	if (sequence === 3) sequence = 0;
	return { 
    type: actionTypes.CHANGE_SEQUENCE, 
    sequence 
  };
};

// 切换上一首，下一首
export const changePlaySongAction = (tag) => {
  return (dispatch,getState) => {
    // 获取当前index
    const playlist = getState().getIn(["player","playlist"]);
    const sequence = getState().getIn(["player","sequence"])
    let currentSongIndex = getState().getIn(["player","currentSongIndex"]);

    // 查看当前循环模式，以此来改变index
    switch (sequence) {//0:循环 1:随机播放 2:单曲循环
      case 1:
        let randomIndex = Math.floor(Math.random() * playlist.length);
        while(randomIndex === currentSongIndex){
          randomIndex = Math.floor(Math.random() * playlist.length);
        }
        currentSongIndex = randomIndex;
        break;   
      default:
        currentSongIndex +=tag;
        if(currentSongIndex === playlist.length) {
          currentSongIndex = 0
        };
        if(currentSongIndex === -1) {
          currentSongIndex = playlist.length - 1
        }
    }
    // 处理修改的数据
    const currentSong = playlist[currentSongIndex];
    dispatch(changeCurrentSongIndexAction(currentSongIndex));
    dispatch(changeCurrentSongAction(currentSong));
    
    // 获取当前歌曲歌词并解析
    getLyric(currentSong.id).then(res=>{
      const lyricString = res.lrc.lyric;
      const lyriclist = parseLyric(lyricString);
      console.log(lyriclist);
      dispatch(changeLyricListAction(lyriclist));
    })
  }
}

export const getCurrentSongAction = (ids) => {
	return (dispatch, getState) => {
		//  1.判断是否歌曲存在playList中
		let playlist = getState().getIn(["player", "playlist"]);
		const songIndex = playlist.findIndex((item) => item.ids);
    let currentSong = null;
		if (songIndex !== -1) {
			//如果找到了歌曲
			currentSong = playlist[songIndex];
			dispatch(changeCurrentSongIndexAction(songIndex));
			dispatch(changeCurrentSongAction(currentSong));
		} else {
			//未找到歌曲
			getSongDetail(ids).then((res) => {
				// 创建新播放列表，保持数据不可变性
				const newPlaylist = [...playlist];
				// 获取数据中的歌曲，先判断有没有值，再拿数据
				currentSong = res.songs && res.songs[0];
				// 将歌曲放入新的列表中
				newPlaylist.push(currentSong);
				// 修改action中的playlist数据
				dispatch(changePlayListAction(newPlaylist));
				// 修改action中的index数据
				const currentSongIndex = newPlaylist.length - 1;
				dispatch(changeCurrentSongIndexAction(currentSongIndex));
				// 修改action中当前播放歌曲
				dispatch(changeCurrentSongAction(currentSong));
			});
		}

    // 获取当前歌曲歌词并解析
    getLyric(ids).then(res=>{
      const lyricString = res.lrc.lyric;
      const lyriclist = parseLyric(lyricString);
      console.log(lyriclist);
      dispatch(changeLyricListAction(lyriclist));
    })
	};
};

export const changeCurrentLyricIndex = (index) => ({
  type:actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
})