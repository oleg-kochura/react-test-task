import React from 'react';
import ConditionalRender from '../../hoc/ConditionalRender';
import CSSModules from 'react-css-modules';
import styles from './index.scss';


const renderComments = (comments, avatars) => {
	return comments.map((comment, i) => (
			<li key={i} styleName="comment-item">
				<div styleName="avatar">
					<img styleName="img" src={avatars[i]} alt="avatar"/>
				</div>
				<p styleName="comment">{comment}</p>
			</li>
		)
	)
};

const Comments = ({comments, avatars}) => (
	<ul styleName="comments-list">
		{renderComments(comments, avatars)}
	</ul>
);



export default ConditionalRender(CSSModules(Comments, styles));