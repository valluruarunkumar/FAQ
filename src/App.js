import React, { Component } from 'react';
import './Components/ContactList'
import ContactList from './Components/ContactList';
import {v4 as uuidv4} from 'uuid'
import './index.css'

const initialContactsList = [
    {
      id: uuidv4(),
      name: 'Ram',
      mobileNo: 9999988888,
      isFavorite: false,
    },
    {
      id: uuidv4(),
      name: 'Pavan',
      mobileNo: 8888866666,
      isFavorite: true,
    },
    {
      id: uuidv4(),
      name: 'Nikhil',
      mobileNo: 9999955555,
      isFavorite: false,
    },
  ]

class App extends Component {
    state={
        ContactsList:initialContactsList,
        name:"",
        mobileNo:"",
    }

    onAddContact= ( )=>{
        const {name,mobileNo}=this.state
        const newContact={
            id:uuidv4(),
            name,
            mobileNo,
            isFavorite:false
        }
        this.setState((prevState)=>({
            ContactsList:[...prevState.ContactsList,newContact],
            name:"",
            mobileNo:""
        }))
    }

    onChangeName=event=>{
        this.setState({name:event.target.value})
    }
    onChangeMobileNo=event=>{
        this.setState({mobileNo:event.target.value})
    }

  render() {
    return ( 
      <div>
        <div className='main-heading'>
            <h1 className='heading'>Contacts</h1>
            <input type='text' placeholder='Name' onChange={this.onChangeName}/>
            <input type='text' placeholder='Number' onChange={this.onChangeMobileNo} />
            <button onClick={this.onAddContact}>ADD</button>
        </div>
        
        {this.state.ContactsList.map(eachContact=>(
            <ContactList contacts={eachContact}/>
        ))}
        
      
      </div>
    );
  }
};

export default App;
