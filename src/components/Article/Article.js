import React from 'react';
import ActiveWrapper from '../../hoc/ActiveWrapper';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


const Article = (props) => {
	
	const { article, active, onSelect, onRemove } = props;
	
	return (
		<li styleName={active ? "li-active" : "li"}
		    onClick={() => onSelect(article.id)}>

			<span styleName="title">{article.title}</span>
			<span styleName="count">{article.comments.length}</span>
			<span className="spacer"></span>

			<button styleName="btn"
			        onClick={(e) => {
				        e.stopPropagation();
				        onRemove(article.id)
			        }}>
				Delete
			</button>
		</li>
	)
};

export default ActiveWrapper(CSSModules(Article, styles));
