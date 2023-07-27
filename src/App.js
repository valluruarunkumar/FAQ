import logo from './logo.svg';
import './App.css';
import UsersList from './Components/UsersList';

const Users = [
  {
    image: "/images.jpeg",
    name: "Andria",
    role: "Software Developer"
  },

  {
    image: "/1.jpeg",
    name: "Hasini",
    role: "Human Resource Manager"
  },

  {
    image: "/4.jpeg",
    name: "Arun Valluru",
    role: "Software Developer"
  },

  {
    image: "/2.jpeg",
    name: "Sindhu Valluru",
    role: "Software Developer"
  }
]

function App() {

  return (
    <div className='user-list-container'>
      <h1>Users List</h1>
      <input type='search'/>
        <ul>
          {Users.map((eachItem) => {
            return < UsersList details={eachItem} />
          })}
        </ul>
    </div>
  )

}

export default App;
