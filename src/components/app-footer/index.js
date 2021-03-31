import React, { Fragment, memo } from "react";

import { footerLinks, footerImages } from "@/network/local-data";

import { AppFooterWrapper, FooterLeft, FooterRight } from "./style";

export default memo(function AppFooter() {
	return (
		<AppFooterWrapper>
			<div className="wrap-v2 content">
				<FooterLeft>
					<div className="link">
						{footerLinks.map((item, index) => {
							return (
								<Fragment key={item.title}>
									<a href={item.link} target="_blank" rel="noopener noreferrer">
										{item.title}
									</a>
									<span className="line">|</span>
								</Fragment>
							);
						})}
					</div>
					<div className="copyright">
						<span>网易公司版权所有©1997-2021</span>
						<span className="sep">杭州乐读科技有限公司运营：</span>
						<a
							href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png"
							target="_blank"
							rel="noopener noreferrer"
						>
							浙网文[2018]3506-263号
						</a>
					</div>
					<div className="report">
						<span>违法和不良信息举报电话：0571-89853516</span>
						<span className="email">举报邮箱：</span>
						<a
							href="mailto:ncm5990@163.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							ncm5990@163.com
						</a>
					</div>
					<div className="info">
						<a
							href="https://beian.miit.gov.cn/#/Integrated/index"
							target="_blank"
							rel="noopener noreferrer"
						>
							粤B2-20090191-18 工业和信息化部备案管理系统网站
						</a>
						<a
							href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33010902002564"
							target="_blank"
							rel="noopener noreferrer"
						>
							<span className="police-logo"></span>
							<span>浙公网安备 33010902002564号</span>
						</a>
					</div>
				</FooterLeft>
				<FooterRight>
            {
              footerImages.map((item,index) => {
                return(
                  <li key={item.link} className="item">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="link"> </a>
                    <span className="title"></span>
                  </li>
                )
              })
            }

        </FooterRight>
			</div>
		</AppFooterWrapper>
	);
});
