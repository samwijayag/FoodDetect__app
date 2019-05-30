import React from 'react'

const OutputForm = ({imageUrl}) => {

	return(
		<div>
			<div className='dib ma3 shadow-5'>
				<img alt='' src={imageUrl} width='350px' height='auto'/>
			</div>
		</div>

	)
}

export default OutputForm;