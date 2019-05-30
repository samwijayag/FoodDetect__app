import React from 'react';

const Ingredient = (props) => {
	return(
		<div className='dib'>
			<ul>
				<h2 className='tc f5 bg-light-red shadow-5 br4 ma1 pa4 grow'>{props.name}</h2>
			</ul>
		</div>
	)
}

export default Ingredient;
