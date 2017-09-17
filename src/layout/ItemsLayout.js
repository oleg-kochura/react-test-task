import React from 'react'

const ItemsLayout = ({children}) => (
	<section className="articles-container">
		<h2>Items</h2>
		<div className="articles">
			
			{children}
			
		</div>
	</section>
);

export default ItemsLayout;