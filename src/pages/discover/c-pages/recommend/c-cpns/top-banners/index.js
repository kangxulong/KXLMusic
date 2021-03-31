import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

import {
	TopBannerWrapper,
	BannerLeft,
	BannerRight,
	BannerControl,
} from "./style";
import { Carousel } from "antd";

export default memo(function KXLTopBanners() {
	// state
	const [currentIndex, setCurrentIndex] = useState(0);

	// redux相关
	const { topBanner } = useSelector(
		(state) => ({
			topBanner: state.getIn(["recommend", "topBanner"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();

	// hooks相关
	useEffect(() => {
		dispatch(getTopBannerAction());
	}, [dispatch]);
	const bannerRef = useRef();
	const bannerChange = useCallback((from, to) => {
		setTimeout(() => {
			setCurrentIndex(to);
		}, 0);
	}, []);

	// 其他逻辑
	const bgImage = topBanner[currentIndex]&&(topBanner[currentIndex].imageUrl + "?imageView&blur=40x20");

	return (
		<TopBannerWrapper bgImage = {bgImage}>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel
						effect="fade"
						autoplay
						ref={bannerRef}
						beforeChange={bannerChange}
					>
						{topBanner.map((item, index) => {
							return (
								<div key={item.targetId} className="banner-item">
									<img
										src={item.imageUrl}
										alt={item.typeTitle}
										className="image"
									/>
								</div>
							);
						})}
					</Carousel>
				</BannerLeft>
				<BannerRight></BannerRight>
				<BannerControl>
					<button
						className="btn left"
						onClick={(e) => bannerRef.current.prev()}
					></button>
					<button
						className="btn right"
						onClick={(e) => bannerRef.current.next()}
					></button>
				</BannerControl>
			</div>
		</TopBannerWrapper>
	);
});
