import React from 'react';
import classes from './subheader.css';

const subheader = (props) => (
	<div className={classes['top-subheader']}>
		<h1 className={classes['top-subheader__title']}>
			{props.searchTerm !== '' ? '"'+props.searchTerm+'"' : 'Lista de produtos'}
		</h1>
	</div>
);

export default subheader;