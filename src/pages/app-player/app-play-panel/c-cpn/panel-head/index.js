import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { PanelHeadWrapper, HeadLeft, HeadRight } from "./style";

export default memo(function KXLPanelHead() {
	const { playlist,currentSong } = useSelector(
		(state) => ({
			playlist: state.getIn(["player", "playlist"]),
			currentSong: state.getIn(["player", "currentSong"])
		}),
		shallowEqual
	);

	const songName = currentSong.name || "未知歌曲";
	return (
		<PanelHeadWrapper>
			<HeadLeft>
				<div>
					<h4>播放列表({playlist.length})</h4>
				</div>
				<div className="control">
					<div className="control-addall">
						<span className="addall sprite_playlist"></span>
            收藏全部
					</div>
          <span className="line"></span>
					<div className="control-clear">
            <span className="clear sprite_playlist "></span>
            清除
          </div>
				</div>
			</HeadLeft>
			<HeadRight>
				<span>{songName}</span>
			</HeadRight>
		</PanelHeadWrapper>
	);
});
