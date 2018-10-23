import React from 'react';
import './resources/css/loading.css'

Loader(Component){
	return LoadingComponent({ isLoading, ...props }){
		if(!isLoading) return (<Component { ...props } />);
		return (
			<div className="LoadingComponent">

			</div>
		);
	}
} 

export default Loader;