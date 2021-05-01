import React, { memo } from "react";

import { AppPlayPanelWrapper } from "./style";
import KXLPanelHead from "./c-cpn/panel-head";
import KXLPanelPlayList from './c-cpn/panel-play-list'
import KXLPanelLyric from './c-cpn/panel-lyric'

export default memo(function KXLAppPlayPanel() {
	return (
		<AppPlayPanelWrapper>
			<div>
				<KXLPanelHead />
				<div className="main">
					<img
						src="https://p2.music.126.net/XjlLh8KZXgH1iVQhGmT_KQ==/109951163958973053.jpg"
						alt=""
            className="img"
					/>
          <KXLPanelPlayList />
          <KXLPanelLyric />
				</div>
			</div>
		</AppPlayPanelWrapper>
	);
});
