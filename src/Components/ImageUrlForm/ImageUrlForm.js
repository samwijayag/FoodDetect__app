import React from 'react';

const ImageUrlForm = ({onInputChange, onButtonSubmit}) => {
	return(
		<div>
			<p className='f4'>
				{`Give us an image, we will list all the visible food ingredients`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
		          <input 
		          className='f4 pa2 w-70 center' 
		          type='text'
		          onChange = {onInputChange}
		           />
		          <button
		            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
		            onClick = {onButtonSubmit}
		          >Detect</button>
		        </div>
			</div>
		</div>
	)
}

export default ImageUrlForm;