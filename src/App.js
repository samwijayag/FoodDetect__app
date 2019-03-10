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

  onButtonSubmit = () => {
    app.models
    .predict(
      Clarifai.FOOD_MODEL, 
      "https://samples.clarifai.com/food.jpg")
    .then(
      function(response) {
        console.log(response);
      },
      function(err) {      }
    );
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Navigation />
        <ImageUrlForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
        />
        <FoodImage />
        <FoodIngredients />
      </div>
    );
  }
}

export default App;
