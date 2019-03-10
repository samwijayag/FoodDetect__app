import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ImageUrlForm from './Components/ImageUrlForm/ImageUrlForm';
import FoodIngredients from './Components/FoodIngredients/FoodIngredients';
import FoodImage from './Components/FoodImage/FoodImage';



class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <ImageUrlForm />
        <FoodImage />
        <FoodIngredients />
      </div>
    );
  }
}

export default App;
