import React, { Component } from 'react';
import { ls } from '../localStorage';
import { guid, randomItem, randomColor } from '../helpers';
import { api } from '../api/api.js';

import Main from '../layout/Main';
import ItemsLayout from '../layout/ItemsLayout';
import CommentsLayout from '../layout/CommentsLayout';
import ArticlesForm from './ArticlesForm/ArticlesForm';
import Articles from './Articles/Articles';
import Comments from './Comments/Comments';
import CommentsForm from './CommentsForm/CommentsForm';


function createNewArticle(title) {
	return {
		id: guid(),
		title,
		comments: []
	}
}

function getAvatars(obj) {
	let avatars = [],
		i = 0;
	
	while (i < 30) {
		let eyes = randomItem(obj.eyes),
			nose = randomItem(obj.nose),
			mouth = randomItem(obj.mouth),
			color = randomColor();
		
		avatars.push(`https://api.adorable.io/avatars/face/${eyes}/${nose}/${mouth}/${color}`);
		i++;
	}
	return avatars;
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: ls.get('items') || [],
			activeIndex: 0,
			avatars: []
		};
	}
	
	componentDidMount() {
		api().then(response => {
			const avatars = getAvatars(response.data.face);
			this.setState({avatars})
		});
	}
	
	getIndexById = id => this.state.data.findIndex(item => item.id === id);
	
	setActive = id => {
		const i = this.getIndexById(id);
		if (i !== this.state.activeIndex) {
			this.setState({activeIndex: i});
		}
	};
	
	handleSubmit = (eventType, value) => {
		const { data, activeIndex } = this.state;
		let newData;
		
		switch (eventType) {
			case 'submit':
				const article = createNewArticle(value);
				newData =  [article, ...data];
				
				ls.set('items', newData);
				this.setState({data: newData});
				break;
				
			case 'keypress':
				newData = data.map((item, i) => {
					if (i === activeIndex) {
						return {
							...item,
							comments: [...item.comments, value]
						};
					}
					else return item;
				});
				ls.set('items', newData);
				this.setState({data: newData});
				break;
		}
	};
	
	handleRemove = id => {
		const { data, activeIndex } = this.state;
		const items = data.filter(item => item.id !== id);
		const removeElIndex = this.getIndexById(id);

		 if (activeIndex === data.length - 1 && activeIndex > 0 || removeElIndex < activeIndex) {
		 	ls.set('items', items);
			this.setState({data: items, activeIndex: activeIndex - 1});
		} else {
		 	ls.set('items', items);
			this.setState({data: items});
		}
	};
	
	
	render() {
		const { data, activeIndex, avatars } = this.state;
		const comments = data.length && data[activeIndex].comments;

		return (
			<Main>
				<ItemsLayout>
					<ArticlesForm onSubmit={this.handleSubmit}/>
					<Articles condition={Boolean(data.length)}
					          articles={data}
					          onSelect={this.setActive}
					          onRemove={this.handleRemove}
					          activeId={data.length && data[activeIndex].id}/>
				</ItemsLayout>
			
				<CommentsLayout index={activeIndex} condition={Boolean(data.length)}>
					<Comments condition={Boolean(comments.length)}
					          comments={comments}
					          avatars={avatars}/>
					<CommentsForm onSubmit={this.handleSubmit}
					              avatar={avatars[0]}/>
				</CommentsLayout>
			</Main>
		);
	}
}

export default App;
