
import React, { Component } from 'react';
import './App.css';
import UsersList from './Components/UsersList';

const initialUsers = [
  {
    uniqueNo: 1,
    image: "/images.jpeg",
    name: "Andria",
    role: "Software Developer"
  },
  
  {
    uniqueNo: 2,
    image: "/1.jpeg",
    name: "Hasini",
    role: "Human Resource Manager"
  },

  {
    uniqueNo: 3,
    image: "/4.jpeg",
    name: "Arun Valluru",
    role: "Software Developer"
  },

  {
    uniqueNo: 4,
    image: "/2.jpeg",
    name: "Sindhu Valluru",
    role: "Software Developer"
  },
  {
    uniqueNo: 5,
    image: "/2.jpeg",
    name: "Lovely",
    role: "Software Developer"
  }
];



class App extends Component {
  state = {
    searchInput: "",
    Users: initialUsers
  }

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value
    })
  }

  onDeleteUser = uniqueNo => {
    const { Users } = this.state
    const filterdUserData = Users.filter(
      each => each.uniqueNo !== uniqueNo
    )
    this.setState({
      Users: filterdUserData
    })

  }

  render() {
    const { searchInput, Users } = this.state


    const Results = Users.filter((earchUser) =>
      earchUser.name.includes(searchInput)
    )

    return (
      <div className='user-list-container'>
        <h1>Users List</h1>
        <input type='search' value={searchInput} onChange={this.onChangeSearchInput} />
        <ul>
          {Results.map((eachItem) =>
            <UsersList details={eachItem} key={eachItem.uniqueNo} onDeleteUser={this.onDeleteUser} />
          )}
        </ul>
      </div>
    );
  }
}

export default App;

