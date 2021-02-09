import logo, { ReactComponent } from './logo.svg';
//import './App.css';
import NavBar from "./Components/NavBar"
import Joke from './Components/Joke';
import { Component, useState } from 'react';
import { gql, useQuery } from '@apollo/client';

const GET_JOKE = gql`
  query GeJoke($category: String){
    random(category: $category){
      icon_url
      value
    }
  }
`;

const GET_CATEGORIES = gql`
{
  categories{
    name
  }
}
`;

const Categories = () => {
  const {
    loading,
    error,
    data: { categories },
  } = useQuery(GET_CATEGORIES);

  return (
    <div>
      <select class="custom-select" id="inputGroupSelect04">
        {categories.map((category) => (
            <option>{category}</option>
        ))
        }
      </select>
    </div>
  );

}


class App extends ReactComponent{
  constructor(props){
    super(props);
    this.state = {categorySelected: 'animal'};
  }

  render(){
    return(
      <div>
        <NavBar />
        <h1>hahhdhfhdhf</h1>
        <Categories />
      </div>
    );
  }
}
export default App;
