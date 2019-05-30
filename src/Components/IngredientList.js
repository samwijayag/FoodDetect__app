import React from 'react';
import Ingredient from './Ingredient';


const IngredientList = ({foodItems}) => {

	const IngredientComponent = foodItems.map((food,i) =>{
		return(
			<Ingredient 
				key={i}
				name={foodItems[i].name}
			/>
		)
	})	

	return(
		<div>
			{IngredientComponent}
		</div>
	)
}

export default IngredientList;