import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
  margin-top:50px;

	.content {
		background-color: #f5f5f5;
		border: 1px solid #d3d3d3;
		height: 184px;
    margin:20px 0 37px;
    display:flex;
    align-items:center;
    .arrow {
      width:25px;
      height:25px;
      cursor: pointer;
    }
    .arrow-left {
      background-position: -260px -75px;
      margin-left:4px;
    }
    .arrow-right {
      background-position: -300px -75px;
    }
    .album {
      width:645px;
      height:180px;
      .page {
        display:flex !important;
        margin:28px 0 20px 5px;
        align-items:center;
      }
    }
	}
`;
