import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const friendsName =['Hadiuzzaman', 'Mannan','Asaduzzaman', 'Razu','Sakib','Susanto']
 const products = [
   {name: 'Photoshop', price: '$ 90.44'},
   {name: 'Illustrator', price: '$ 50.45'},
   {name: 'PDF', price: '$ 10.00'}
 ]
  return (
    <div className="App">
      <header className="App-header">

        <Counter></Counter>
      <Users></Users>

      <ul>
        {friendsName.map(fName => <li>{fName}</li>)}
      </ul>
       <Profile name= {friendsName[0]} designation='Assistant Instructor'></Profile>
       <Profile name= 'MD. Abdul Mannan' designation='Assistant Director'></Profile>
       <Profile name= 'G.M. Asaduzzaman' designation='Assistant Inspector'></Profile>
        
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dynamic Users:{users.length} </h3>
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    const newCount = count +1;
    setCount(newCount);
  }
  return(
    <div>
      <h1>Count: {count} </h1>
      <button onMouseOver={handleIncrease}>Increase</button>
      <button onClick={ () => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

function Profile(props){
  const ProfileStyle = {
    border: '4px solid orange',
    margin: '5px',
    padding: '10px'
  }

  return(
    <div style={ProfileStyle}>
      <h1>Name: {props.name}</h1>
      <h2>Designation: {props.designation} </h2>
      <h3>Barisal Division</h3>
    </div>
  );
}

export default App;
