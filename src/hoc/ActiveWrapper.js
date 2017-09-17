import React from 'react';


const ActiveWrapper = Component => {
	return function ActiveWrapper(props) {
		ActiveWrapper.displayName = `ActiveWrapper(${Component.displayName || Component.name || 'Component'})`;
		
		return props.activeId === props.article.id
			? <Component {...props} active/>
			: <Component {...props}/>
	}
};

export default ActiveWrapper;