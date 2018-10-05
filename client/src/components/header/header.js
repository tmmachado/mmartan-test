import React from 'react';
import classes from './header.css';

const header = (props) => (
	<div className={classes['top-header']}>
		<div className={classes['top-header__container']}>
			<div className={classes['top-header__title']}>mmartan</div>
			<div className={classes['top-header__searchbox']}>
				<input 
					type="text" 
					placeholder="Buscar..." 
					onChange={props.searchChanged(this)}
				/>
			</div>
		</div>
	</div>
);

export default header;