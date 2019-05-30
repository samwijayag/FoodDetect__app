import React from 'react'


const InputForm = ({onInputChange, onInputSubmit}) => {
	return (
		<div>
			<h1 className='f2 fw7 ttu tracked lh-title mt0 mb3 avenir shadow-4 pa3 bg-light-gray'>FOOD DETECT</h1>
			<h2 className='f3 mid-gray lh-title'>This App detects food items and ingredients in Images of food. Give it a try</h2>
			<div className='center'>
				<div className='center w-40 pa4 br3 shadow-5'>
					<input 
						onChange={onInputChange}
						className='f3 pa2 w-70 center tc'
						placeholder='submit url'
						type='text' /> 
					<button 
						className='w-30 grow bf4 link ph3 pv2 dib white bg-light-red'
						onClick={onInputSubmit}
						>
						Detect
					</button>
				</div>
			</div>
		</div>
	)
}

export default InputForm;