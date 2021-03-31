import styled from "styled-components";

import progress_bar from "@/assets/img/progress_bar.png";
import sprite_icon from "@/assets/img/sprite_icon.png";

export const AppPlayBarWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 53px;
	background-position: 0 0;
	background-repeat: repeat-x;

	.content {
		display: flex;
		align-items: center;
		/* justify-content: space-between; */
		height: 47px;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 0;
	}
`;

export const Control = styled.div`
	display: flex;
	align-items: center;
	width: 137px;
	.prev,
	.next {
		width: 28px;
		height: 28px;
		margin-top: 2px;
		cursor:pointer;
	}
	.prev {
		background-position: 0 -130px;
	}
	.prev:hover {
		background-position: -30px -130px;
	}
	.play {
		width: 36px;
		height: 36px;
		margin: 0 8px;
		background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
		cursor:pointer;
	}
	.play:hover {
		width: 36px;
		height: 36px;
		margin: 0 8px;
		background-position: -40px
			${(props) => (props.isPlaying ? "-165px" : "-204px")};
		cursor:pointer;
	}
	.next {
		background-position: -80px -130px;
	}
	.next:hover {
		background-position: -110px -130px;
	}
`;

export const PlayInfo = styled.div`
	display: flex;
	.image {
		width: 34px;
		height: 34px;
		margin: 6px 15px 0 0;
		position: relative;
		a {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			text-indent: -9999px;
			background-position: 0 -80px;
		}
	}
	.info {
		width: 608px;
		height: 47px;
		.song {
			display: flex;
			height: 28px;
			line-height: 28px;
			.song-name {
				color: #e8e8e8;
				margin-right: 15px;
			}
			.artist-name {
				color: #9b9b9b;
			}
		}
		.progress {
			display: flex;
			.ant-slider {
				width: 493px;
				padding: 0px;
				margin: 0px;
			}
			.ant-slider-rail {
				height: 9px;
				background: url(${progress_bar}) right -30px;
			}
			.ant-slider-track {
				height: 9px;
				background: url(${progress_bar}) left -66px;
			}
			.ant-slider-handle {
				width: 22px;
				height: 24px;
				border: none;
				margin-top: -7px;
				background: url(${sprite_icon}) 0 -250px;
			}
			.ant-slider-handle:hover {
				width: 22px;
				height: 24px;
				border: none;
				margin-top: -7px;
				background: url(${sprite_icon}) 0 -280px;
			}
			.ant-slider-handle:focus {
				box-shadow: none;
			}
			.time {
				color: #797979;
				margin: -5px 0 0 12px;
				.current-time {
					color: #a1a1a1;
				}
			}
		}
	}
`;

export const Operate = styled.div`
	display: flex;

	.btn {
		width: 25px;
		height: 25px;
		margin-right: 2px;
		text-indent: -9999px;
		position: relative;
		a {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
		}
	}
	.left {
		width: 60px;
		display: flex;
		.add {
			background-position: -88px -163px;
		}
		.add:hover {
			background-position: -88px -189px;
		}
		.share {
			background-position: -114px -163px;
		}
		.share:hover {
			background-position: -114px -189px;
		}
	}
	.right {
		display: flex;
		background-position: -147px -248px;
		padding-left:13px;
		button {
			margin-right:2px;
		}
		.volume {
			background-position: -2px -248px;
		}
		.volume:hover {
			background-position: -31px -248px;
		}
		.mode {
			background-position: ${props => {
				switch (props.sequence) {
					case 1:
						return "-66px -248px"
					case 2:
						return "-66px -344px"
					default:
						return "-3px -344px"
				}
			}};
		}
		.mode:hover {
			background-position: ${props => {
				switch (props.sequence) {
					case 1:
						return "-93px -248px"
					case 2:
						return "-93px -344px"
					default:
						return "-33px -344px"
				}
			}};;
		}
		.list {
			background-position: -42px -68px;
			text-indent:0px;
			width:59px;
			color:#666;
			padding-left:21px;
			text-align:center;
		}
		.list:hover {
			background-position: -42px -98px;
		}
	}
`;
