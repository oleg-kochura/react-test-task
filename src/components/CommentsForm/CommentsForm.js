import React, { PureComponent } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';

class CommentsForm extends PureComponent {
	
	handleChange = (e) => {
		if (e.which === 13 && !e.shiftKey && e.target.value !== '') {
			this.props.onSubmit(e.type, e.target.value);
			e.target.value = '';
		}
	};
	
	render() {
		return (
			<form styleName="form">
				<div styleName="avatar">
					<img styleName="img" src={this.props.avatar} alt="avatar"/>
				</div>
				<textarea styleName="textarea" onKeyPress={this.handleChange} name="message"></textarea>
			</form>
		)
	}
}


export default CSSModules(CommentsForm, styles);