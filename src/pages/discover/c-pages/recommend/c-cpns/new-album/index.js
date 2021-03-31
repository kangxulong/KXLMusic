import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import ThemeHeaderRCM from "@/components/theme-header-rcm";
import KXLAlbumCover from "@/components/album-cover";
import { Carousel } from "antd";
import { NewAlbumWrapper } from "./style";

export default memo(function KXLNewAlbum() {
	// redux hook
	const { newAlbums } = useSelector(
		(state) => ({
			newAlbums: state.getIn(["recommend", "newAlbums"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();

	// other hook
	const carouselRef = useRef();

	useEffect(() => {
		dispatch(getNewAlbumsAction(10));
	}, [dispatch]);

	return (
		<NewAlbumWrapper>
			<ThemeHeaderRCM title="新碟上架" />
			<div className="content">
				<button
					className="arrow arrow-left sprite_02"
					onClick={(e) => carouselRef.current.prev()}
				></button>
				<div className="album">
					<Carousel dots={false} ref={carouselRef}>
						{[0, 1].map((item) => {
							return (
								<div key={item} className="page">
									{newAlbums.slice(item * 5, (item + 1) * 5).map((iten) => {
										return <KXLAlbumCover key={iten.id} info = {iten}/>
									})}
								</div>
							);
						})}
					</Carousel>
				</div>
				<button
					className="arrow arrow-right sprite_02"
					onClick={(e) => carouselRef.current.next()}
				></button>
			</div>
		</NewAlbumWrapper>
	);
});
