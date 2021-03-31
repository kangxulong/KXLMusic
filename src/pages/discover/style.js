import styled from "styled-components";

export const DiscoverWrapper = styled.div`
	.top {
		background-color: #c20c0c;
		height: 35px;
		border-bottom: 1px solid #a40011;
		z-index: 90;
	}
`;

export const TopMenu = styled.div`
	height: 34px;
	display: flex;
	padding-left: 180px;
	line-height: 34px;
	.item {
		a {
			display: inline-block;
			color: #fff;
			text-align: center;
			padding: 0px 13px;
			margin: 7px 17px 0px;
			height: 20px;
			line-height: 20px;
			&:hover,
			&.active {
				background-color: #9b0909;
				text-decoration: none;
				height: 20px;
				border-radius: 20px;
			}
		}
	}
`;
