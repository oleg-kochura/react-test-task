import React from 'react'
import ConditionalRender from '../hoc/ConditionalRender';


const CommentsLayout = ({index, children}) => (
	<section className="comments-container">
		<h2>Comments #{index + 1}</h2>
		<div className="comments">
			
			{children}
		
		</div>
	</section>
);

export default ConditionalRender(CommentsLayout);