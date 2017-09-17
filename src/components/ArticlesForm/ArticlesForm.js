import React, { PureComponent }   from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


class ArticlesForm extends PureComponent {

	handleSubmit = (e) => {
		if (this.input.value) {
			this.props.onSubmit(e.type, this.input.value);
			this.input.value = '';
		}
		
		e.preventDefault();
	};
	
	render() {
		return (
			<form styleName="form" onSubmit={this.handleSubmit}>
				<input type="text"
				       ref={(input) => this.input = input}
				       name="addArticle"
				       styleName="input"
				       placeholder="Type name here..."/>
				
				<button type="submit" styleName="btn">Add new</button>
			</form>
		)
	}
}

export default CSSModules(ArticlesForm, styles);
