import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';


const Main = ({children}) => (
	<div className="container">
		<Sidebar/>
		<div className="content">
			
			{children}
		
		</div>
	</div>
);

export default Main;