import styled from "styled-components";
import police from "@/assets/img/police.png";
import footer02 from '@/assets/img/sprite_footer_02.png'
import footer01 from '@/assets/img/sprite_footer_01.png'

export const AppFooterWrapper = styled.div`
	background-color: #f2f2f2;
	height: 172px;
	color: #333;
	font-size: 12px;
	border-top: 1px solid #d3d3d3;
	/* position: absolute;
	bottom:0;
	left:50%;
	transform:translateX(-50%); */
	.content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
`;

export const FooterLeft = styled.div`
	padding-top: 15px;
	line-height: 24px;
	.link {
		a {
			color: #999;
		}
		.line {
			margin: 0 8px 0 10px;
			color: #c2c2c2;
		}
	}
	.copyright,
	.report {
		span {
			margin-right: 14px;
		}
		.email {
			margin-right:0;
		}
	}
	.copyright .sep {
		margin: 0px;
	}
	.info .police-logo {
		width: 14px;
		height: 14px;
		background: url(${police}) no-repeat;
		background-size: cover;
		display: inline-block;
		margin-right: 2px;
		vertical-align: -2px;
	}
`;

export const FooterRight = styled.ul`
	display: flex;

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 40px;

		.link {
			display: block;
			width: 50px;
			height: 45px;

			background-image: url(${footer02});
			background-size: 110px 450px;
		}

		:nth-child(1) .link {
			background-position: -60px -101px;
		}
		:nth-child(2) .link {
			background-position: 0 0;
		}
		:nth-child(2) .link {
			background-position: -60px -50px;
		}
		:nth-child(2) .link {
			background-position: 0 -101px;
		}

		.title {
			margin-top: 5px;
			display: block;
			width: 52px;
			height: 10px;
			background-image: url(${footer01});
			background-size: 180px 100px;
		}

		:nth-child(1) .title {
			background-position: -1px -90px;
		}
		:nth-child(2) .title {
			background-position: 0 0;
			margin-top: 7px;
		}
		:nth-child(3) .title {
			background-position: 0 -54px;
			margin-top: 6px;
		}

		:nth-child(4) .title {
			background-position: -1px -72px;
			margin-top: 6px;
		}
	}
`;
