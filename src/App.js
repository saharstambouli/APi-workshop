import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [userList,setUserList]=useState([])
  
  const getUsers = async () => {
    try {

      const users = await axios.get("https://jsonplaceholder.typicode.com/users")
      setUserList(users.data)

    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(()=>{
    getUsers()
  },[])

  console.log('userList', userList)



  return (
    <div className="App">
      <header className="App-header">
        {
          userList?.length ? 
          userList.map((el,i)=>(
            <div>
              <hr></hr>
              <h1> {el.name} </h1>
              <h1> {el.username} </h1>
              <h1> {el.phone} </h1>
              <h1> {el.address.city} </h1>
              <hr></hr>
            </div>
          )) :
          <h1> Loading... </h1>
        }
      </header>
    </div>
  );
}

export default App;
