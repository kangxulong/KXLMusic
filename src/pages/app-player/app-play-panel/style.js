import styled from "styled-components";

export const AppPlayPanelWrapper = styled.div`
	position: absolute;
	bottom: 47px;
	width: 986px;
	padding: 0;
	left: 50%;
	transform: translateX(-50%);
	.main {
		width: 980px;
		overflow: hidden;
    display:flex;
    height:260px;
    margin:0 auto;
		.img {
			position: absolute;
			left: 0;
			z-index: 1;
			opacity: 0.2;
			width: 986px;
      height:260px
		}
	}
`;
