import React, { PureComponent }   from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

class Sidebar extends PureComponent {
	render() {
		return (
			<aside styleName="aside">
				<h1 styleName="title">Main</h1>
				<p styleName="overview">Overview</p>
			</aside>
		)
	}
}

export default CSSModules(Sidebar, styles)