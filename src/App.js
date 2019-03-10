import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import ImageUrlForm from './Components/ImageUrlForm/ImageUrlForm';
import FoodIngredients from './Components/FoodIngredients/FoodIngredients';
import FoodImage from './Components/FoodImage/FoodImage';



class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  render() {
    return (
      <div>
        <Navigation />
        <ImageUrlForm onInputChange={this.onInputChange}/>
        <FoodImage />
        <FoodIngredients />
      </div>
    );
  }
}

export default App;
