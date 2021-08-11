import React from 'react';
import { useHistory } from 'react-router-dom';

const BasicForm = () => {
	const fn =()=>{
		useHistory().push('/login')
	}
	return (
		<div>
			<h1>高级表单</h1>
			<button onClick={fn}></button>
		</div>
	);
};

export default BasicForm;