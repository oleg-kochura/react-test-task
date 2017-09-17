import React from 'react';
import Article from '../Article/Article';
import ConditionalRender from '../../hoc/ConditionalRender';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


const Articles = (props) => {
	
	const { articles, activeId, onSelect, onRemove } = props;
	
	return(
		<ul styleName="articles-list">
			{articles.map(article =>
					<Article key={article.id}
					         article={article}
					         onSelect={onSelect}
					         onRemove={onRemove}
					         activeId={activeId}/>
			)}
		</ul>
	)
};

export default ConditionalRender(CSSModules(Articles, styles));