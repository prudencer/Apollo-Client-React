import logo from './logo.svg';
import './App.css';
import NavBar from "./components/navBar"
import Joke from './components/joke';
import { Component, useState } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      loading: false,
      option: "0",
      selected: null
    }
  }

  componentDidMount() {
    this.bindCategories()
  }

  bindCategories = () => {
    // Call backend method
    const categories = [
      "monday",
      "tuesday"
    ]

    // This stays the same
    this.setState({categories})
  };

  bindJoke = (category) => {
    // Call backend method
    const selected = {
      "icon_url": "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
      "value": "This is a joke"
    }
    // This stays the same
    this.setState({selected})
    this.setState({loading: false})
  };

  onGetJokeClick= () => {
    const {option} = this.state;

    this.setState({loading: true})
    this.setState({selected: null})
    if(option === "0") {
      this.setState({selected: null})
      this.setState({loading: false})
    } else {
      this.bindJoke(option)
    }
  };

  onSelectionChange = (event) => {
    this.setState({option: event.target.value})
  };

  render() {
    const {categories, selected, loading} = this.state;
    return (
      <div className="App">
          <div class="container" style={{width: 600, margin: "auto"}}>

            <NavBar/>

            <div style={{padding: 20}}>
              <div class="input-group">
                <select onChange={this.onSelectionChange} class="custom-select" id="inputGroupSelect04">
                  <option value={0} selected>Choose category...</option>
                  {categories.map((item, index) => (
                    <option>{item}</option>
                  ))
                  }
                </select>
                <div class="input-group-append">
                  <button class="btn btn-primary" type="button" onClick={this.onGetJokeClick} disabled={loading}>
                    {loading? "Processing" : "Get Joke"}
                  </button>
                </div>
              </div>
            </div>

          { 
            selected &&
            <Joke joke={selected}/>
          }
        </div>
      </div>
    );
 }
}

export default App;
