const { default: styled } = require("styled-components");

export const HeaderWrapper = styled.div`
	display: flex;
  justify-content:space-between;
  align-items:center;
  height:33px;
  line-height:33px;
	padding: 0 10px 0 34px;
	background-position: -225px -156px;
	border-bottom: 2px solid #c10d0c;
  font-size:12px;
	.left {
		display: flex;
		line-height: 28px;
		.title {
			font-size: 20px;
			font-weight: normal;
			margin-right: 20px;
		}
		.divider {
			color: #ccc;
			margin: 0 10px;
		}
		.keywords {
			display: inline-block;
		}
	}

	.right {
		.icon {
      display:inline-block;
      width:12px;
      height:12px;
      margin-left:4px;
			background-position: 0 -240px;
		}
	}
`;
