import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
	.album-img {
		width: ${(props) => props.width}px;
		height: ${(props) => props.size}px;
		overflow: hidden;
		position: relative;
    margin:0 10px 7px 0;
		& > img {
			width: ${(props) => props.size}px;
			height: ${(props) => props.size}px;
		}
		.cover {
			background-position: 0 ${(props) => props.bgp}px;
		}
	}
	.album-info {
		width: ${(props) => props.width}px;
    font-size:12px;
		.name {
			white-space: nowrap;
			overflow: hidden;
			text-overflow: ellipsis;
			color: #000;
		}
		.artist {
			color: #666;
		}
	}
`;
