import styled from "styled-components";

import download from "@/assets/img/download.png";
import bannerSprite from "@/assets/img/banner_sprite.png";

export const TopBannerWrapper = styled.div`
	background: url(${props => props.bgImage}) center center/6000px;
	height:285px;
	.banner {
		background-color: #c20c0c;
		display: flex;
		position: relative;
	}
`;

export const BannerLeft = styled.div`
	width: 730px;
	.banner-item {
		overflow: hidden;
		height: 285px;
		.image {
			width: 100%;
			height: 285px;
		}
	}
`;
export const BannerRight = styled.a.attrs({
	href: "https://music.163.com/#/download",
	target: "_blank",
})`
	background: url(${download});
	width: 254px;
	height: 285px;
`;

export const BannerControl = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	top: 50%;
	margin-top:-31px;
	.btn {
		position:absolute;
		width: 37px;
		height: 63px;
		background: url(${bannerSprite});
		background-color: transparent;
		cursor: pointer;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}
	.left {
		left: -68px;
		background-position: 0 -360px;
	}
	.right {
		right: -68px;
		background-position: 0 -508px;
	}
`;
