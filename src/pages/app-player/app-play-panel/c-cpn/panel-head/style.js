import styled from "styled-components";
import playpanel_bg from "@/assets/img/playpanel_bg.png";

export const PanelHeadWrapper = styled.div`
	height: 41px;
	line-height: 41px;
	display: flex;
	background: url(${playpanel_bg}) 0 0;
  color:#ccc;
  position:relative;
`;

export const HeadLeft = styled.div`
	width: 560px;
	display: flex;
	justify-content: space-between;
  padding:0 0 0 20px;
  h4{
    color:#e2e2e2;
    font-size:14px;
  }
  .control {
    display:flex;
    position: relative;
  }
  .control-addall {
    width:85px;
    cursor:pointer;
  }
  .control-clear {
    width:50px;
    cursor:pointer;
  }
  .line {
    height: 15px;
    border-left:1px solid #000;
    border-right:1px solid #2c2c2c;
    position:absolute;
    top:13px;
    left:75px;
  }
  .addall {
    padding-right:20px;
    width:16px;
    background-position: -24px 0;
  }
  .clear {
    padding-right:15px;
    width:14px;
    background-position: -51px 0;
  }
`;

export const HeadRight = styled.div`
width:426px;
text-align:center;
`;
