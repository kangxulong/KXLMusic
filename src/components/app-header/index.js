import React, { memo } from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { headerNav } from "@/network/local-data";
import { AppHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function AppHeader() {
	const showSelectItem = (item, index) => {
		if (index === 3 || index === 4) {
			return <a href={item.url}>{item.title}</a>;
		} else {
			return (
				<NavLink to={item.url}>
					{item.title}
					<i className="icon sprite_01"></i>
				</NavLink>
			);
		}
	};

	return (
		<AppHeaderWrapper>
			<div className="content wrap-v1">
				<HeaderLeft>
					<a href="#/" className="logo sprite_01">
						网易云音乐
					</a>
					<div className="select-list">
						{headerNav.map((item, index) => {
							return (
								<div key={item.title} className="select-item">
									{showSelectItem(item, index)}
								</div>
							);
						})}
					</div>
				</HeaderLeft>
				<HeaderRight>
					<Input
						placeholder="音乐/视频/电台/用户"
						prefix={<SearchOutlined />}
						className="search"
					/>
					<a href="https://music.163.com/#/login?targetUrl=%2Fcreatorcenter"
							className="creator"
					>创作者中心</a>
					<a href="#/" className="login">登录</a>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</AppHeaderWrapper>
	);
});
