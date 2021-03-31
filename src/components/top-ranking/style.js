import styled from "styled-components";

export const TopRankingWrapper = styled.div`
	flex: 1;
	width: 230px;
	.header {
		display: flex;
		height: 100px;
		margin: 20px 0 0 19px;
		.image {
			width: 80px;
			height: 80px;
			position: relative;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.info {
			margin: 6px 0 0 10px;
			a {
				color: #333;
				font-size: 14px;
			}
			.btn {
				width: 22px;
				height: 22px;
				display: inline-block;
				cursor: pointer;
				margin: 10px 10px 0 0;
			}
			.play {
				background-position: -267px -205px;
			}
			.play:hover {
				background-position: -267px -235px;
			}
			.favor {
				background-position: -300px -205px;
			}
			.favor:hover {
				background-position: -300px -235px;
			}
		}
	}
	.list {
		.list-item {
			display: flex;
			height: 32px;
			line-height: 32px;
			align-items: center;

			:nth-child(-n + 3) .rank {
				color: #c10d0c;
			}

			.rank {
				width: 35px;
				color: #666;
				font-size: 16px;
				text-align: center;
				margin-left: 10px;
			}
			.info {
				display: flex;
				width: 170px;
				height: 17px;
				line-height: 17px;
				justify-content: space-between;
				.name {
					flex: 1;
					a {
						color: #000;
					}
				}
				.operate {
					display: flex;
					align-items: center;
					width: 82px;
					display: none;
					.btn {
						width: 17px;
						height: 17px;
						margin-left: 8px;
						cursor: pointer;
					}
					.play {
						background-position: -267px -268px;
					}
					.play:hover {
						background-position: -267px -288px;
					}
					.addTo {
						position: relative;
						top: 2px;
						background-position: 0 -700px;
					}
					.addTo:hover {
						background-position: -22px -700px;
					}
					.favor {
						background-position: -297px -268px;
					}
					.favor:hover {
						background-position: -297px -288px;
					}
				}
			}

			&:hover {
				.operate {
					display: block;
				}
			}
		}
	}

	.footer {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		margin-right: 32px;
		height: 32px;

		a {
			color: #333;
		}
	}
`;
