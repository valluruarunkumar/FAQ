import React from 'react';
import './App.css';
import { Component } from 'react';
import GoogleSerch from './Components/GoogleSearch';

const initialSearches = [
  {
    search: "Price Of etherium"
  },
  {
    search: "Latest trends in AI"
  },
  {
    search: "Latest trends in ML"
  },
  {
    search: "MS Dhoni"
  },
  {
    search: "Ravindra jadeja"
  },
  {
    search: "Jaddu and Mahi"
  }
]

class App extends Component{
  state={
    searchInput:"",
    searches:initialSearches
    
  }
  
  onChangeSearchInput=(event)=>{
    this.setState({
      searchInput: event.target.value
    })
  }

  render(){
    const {searchInput,searches}=this.state
    
    const Results=searches.filter((Eachsearch)=>
      Eachsearch.search.includes(searchInput)
    )


    return (
      <div>
        <img src="./Google.png"></img>
        <div cass="search-container">
          <input type="text" class="search-input" name="q" placeholder="Search Google or Type a URL" onChange={this.onChangeSearchInput} />
          <button type="submit" class="search-button">Search</button>
        </div>
        <ul>
          {Results.map((eachSearch) => {
            return <GoogleSerch searches={eachSearch} />
          })}
        </ul>
      </div>
  
    )
  }

  }

 

export default App;
