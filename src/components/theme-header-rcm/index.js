import React, { memo} from "react";
import PropTypes from 'prop-types'

import { HeaderWrapper } from "./style";

const KXLThemeHeaderRCM = memo(function(props) {
	const { title, keywords } = props;

	return (
		<HeaderWrapper className="sprite_02">
			<div className="left">
				<h3 className="title">{title}</h3>
				{keywords.map((item, index) => {
					return (
						<div key={item} className="keywords">
							{item}
						{(index !== item.length + 2) && <i className="divider">|</i>}
						</div>
					);
				})}
			</div>
			<div className="right">
				<a href="todo">更多</a>
				<i className="icon sprite_02"></i>
			</div>
		</HeaderWrapper>
	);
});

KXLThemeHeaderRCM.propTypes = {
	title:PropTypes.string.isRequired,
	keywords:PropTypes.array
}

KXLThemeHeaderRCM.defaultProps = {
	keywords:[]
}

export default KXLThemeHeaderRCM;