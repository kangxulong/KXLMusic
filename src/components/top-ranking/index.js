import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import {getCurrentSongAction} from '@/pages/app-player/store'

import { TopRankingWrapper } from "./style";

export default memo(function KXLTopRanking(props) {
	// props and state
	const { info } = props;
	const { tracks=[] } = info;

	// redux hook
	const dispatch = useDispatch();
	const playMusic = (id)=> {
		dispatch(getCurrentSongAction(id))
	}

	return (
		<TopRankingWrapper>
			<div className="header">
				<div className="image">
					<img src={getSizeImage(info.coverImgUrl)} alt={info.name} />
					<a href="/todo" className="image_cover">
						{info.name}
					</a>
				</div>
				<div className="info">
					<a href="/todo">
						<h3>{info.name}</h3>
					</a>
					<div>
						<button className="btn play sprite_02"></button>
						<button className="btn favor sprite_02"></button>
					</div>
				</div>
			</div>
			<div className="list">
        {
          tracks.slice(0,10).map((item,index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">
										<a href="/todo">{item.name}</a></span>
                  <div className="operate">
                    <button className="btn play sprite_02" onClick={e => {
											playMusic(item.id)
										}}></button>
                    <button className="btn addTo sprite_icon2"></button>
                    <button className="btn favor sprite_02"></button>
                  </div>
                </div>
              </div>
            )
          })
        }

      </div>
			<div className="footer">
				<a href="/todo">查看全部 &gt;</a>
			</div>
		</TopRankingWrapper>
	);
});
