import React, {Component} from 'react';
import InputForm from './Components/InputForm'
import OutputForm from './Components/OutputForm'
import IngredientList from './Components/IngredientList'
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
 apiKey: 'e4c93404d9be4739ae6b173d98ca7a08'
});


class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      foodItems: [],
    }
  }

  foodIngredients = (data) => {
    const clarifaiFood = data.outputs[0].data.concepts
    this.setState({foodItems: clarifaiFood})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onInputSubmit = () => {
      this.setState({imageUrl: this.state.input})
      app.models.predict(
        Clarifai.FOOD_MODEL,
        this.state.input)
      .then(response => this.foodIngredients(response))
      .catch(err => console.log(err))
  }

  render(){
    return (
      <div className="App">
      <InputForm 
        onInputChange={this.onInputChange}
        onInputSubmit={this.onInputSubmit}
        />
      <OutputForm 
        imageUrl={this.state.imageUrl}
        />
      <IngredientList foodItems = {this.state.foodItems}/>
      </div>
    );
  }
}

export default App;
