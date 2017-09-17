import React from 'react';

const ConditionalRender = (Component) => {
	return function EnhacedComponent({condition, ...props}) {
		return condition
			? <Component {...props}/>
			: null
	}
};

export default ConditionalRender;