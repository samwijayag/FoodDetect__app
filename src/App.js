import React, { Component } from 'react';
import Clarifai from 'clarifai';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ImageUrlForm from './Components/ImageUrlForm/ImageUrlForm';
import FoodIngredients from './Components/FoodIngredients/FoodIngredients';
import FoodImage from './Components/FoodImage/FoodImage';

const app = new Clarifai.App({
 apiKey: 'e4c93404d9be4739ae6b173d98ca7a08'
});



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl:''
    }
  }

  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
    console.log(event.target.value)
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FOOD_MODEL, 
      this.state.input)
    .then(
      function(response) {
        console.log(response.outputs[0].data.concepts);
      },
      function(err) {    

       }
    );
  }


  render() {
    return (
      <div className='App'>
        <Navigation />
        <ImageUrlForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <FoodImage imageUrl={this.state.imageUrl}/>
        <FoodIngredients />
      </div>
    );
  }
}

export default App;
