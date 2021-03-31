import styled from "styled-components";
import sprite_01 from "@/assets/img/sprite_01.png";

export const AppHeaderWrapper = styled.div`
	font-size: 14px;
	height: 70px;
	background-color: #242424;
	color: #333333;
	.content {
		display: flex;
		justify-content: space-between;
	}
	.divider {
		height: 5px;
		background-color: #c20c0c;
	}
`;

export const HeaderLeft = styled.div`
	display: flex;
	align-items:center;
	.logo {
		display: block;
		width: 176px;
		height: 69px;
		background-position: 0 0;
		text-indent: -99999px;
	}
	.select-list {
		display: flex;
	align-items:center;
		line-height: 70px;
		.select-item {
			position: relative;
			a {
				display: block;
				padding: 0 19px;
				color: #ccc;
			}
			:last-of-type a {
				position: relative;
				::after {
					position: absolute;
					content: "";
					width: 28px;
					height: 19px;
					/* background-image: url(${require("@/assets/img/sprite_01.png")}); */
					background-image: url(${sprite_01});
					background-position: -190px 0;
					top: 21px;
					left: 100px;
				}
			}
			&:hover a,
			.active {
				text-decoration: none;
				background-color: #000;
				color: #fff;
			}
			.active .icon {
				position: absolute;
				display: inline-block;
				bottom: -1px;
				left: 50%;
				transform: translate(-50%, 0);
				background-position: -226px 0;
				width: 12px;
				height: 7px;
			}
		}
	}
`;

export const HeaderRight = styled.div`
	display:flex;
	align-items:center;
	font-size:12px;
	.search {
		width:158px;
		height:32px;
		border-radius:32px;
		input {
			&::placeholder{
				font-size:12px;
				color:#9b9b9b;
			}
		}
	}
	.creator{
		display:inline-block;
		width:90px;
		height:32px;
		border:1px solid #4f4f4f;
		border-radius:32px;
		line-height:32px;
		color:#ccc;
		text-align:center;
		margin:0 12px;
			&:hover{
				text-decoration: none;
				color: #fff;
				border:1px solid #fff;
			}
	}
	.login{
		color:#787878;
		display:inline-block;
		margin-left:8px;
		padding-right:22px;
		&:hover{
			color:#ccc;
		}
	}
`;