import React from 'react';

const FoodImage = ({imageUrl}) => {
	return(
		<div>
			<div className='center ma'>
				<div className='absolute mt2'>
					<img alt=""
					 src={imageUrl} 
					 width='500px'
					 height='auto'
					  />
				</div>
			</div>
		</div>
	)
}

export default FoodImage;