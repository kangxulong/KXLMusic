import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { HOT_RECOMMENDS_LIMIT } from "@/common/contants";

import { getHotRecommendsAction } from "../../store/actionCreators";

import KXLThemeHeaderRCM from "@/components/theme-header-rcm";
import KXLSongsCover from '@/components/songs-cover'
import {
  HotRecommendWrapper
} from './style'

export default memo(function KXLHotRecommend() {
	// state

	// redux hook
	const { hotRecommends } = useSelector(
		(state) => ({
			hotRecommends: state.getIn(["recommend", "hotRecommends"]),
		}),
		shallowEqual
	);

	const dispatch = useDispatch();

	// other hook
	useEffect(() => {
		dispatch(getHotRecommendsAction(HOT_RECOMMENDS_LIMIT));
	}, [dispatch]);

	return (
		<HotRecommendWrapper>
			<KXLThemeHeaderRCM
				title="热门推荐"
				keywords={["华语", "流行", "摇滚", "民谣", "电子"]}
			/>
			<div className="recommend-list">
				{hotRecommends.map((item, index) => {
					return <KXLSongsCover info = {item} key={item.id}/>
				})}
			</div>
		</HotRecommendWrapper>
	);
});
