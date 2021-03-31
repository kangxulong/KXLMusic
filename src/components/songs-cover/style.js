import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
	width: 140px;
	margin-top: 24px;
	.cover-top {
		position: relative;
		display: block;
		width: 140px;
		height: 140px;
		& > img {
			width: 140px;
			height: 140px;
		}
		.msk {
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			width: 100%;
			height: 100%;
			background-position: 0 0;
		}
		.info {
			position: absolute;
			height: 27px;
			bottom: 0;
			left: 0;
			right: 0;
			background-position: 0 -537px;
			color: #ccc;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding: 0 10px;

			.headphone {
				width: 14px;
				height: 11px;
				display: inline-block;
				background-position: 0 -24px;
				margin-right: 5px;
			}

			.play {
				display: inline-block;
				width: 16px;
				height: 17px;
				background-position: 0 0;
			}
		}
	}
	.cover-bottom {
		margin: 8px 0 4px;
		font-size: 14px;
		& > a {
			color: #000;
		}
	}
	.cover-source {
		.nicknameBy {
			color:#999;
		}
		.nickname {
			max-width:70%;
			color:#666;
		}
	}
`;
