import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Person } from './components/Person';
import { Dummy } from './components/Dummy';

function App() {

  const [textInput, setTextInput] = useState("")
  const [showDummy, setShowDummy] = useState(true)

  const personObj1 = {
    name: "Joe",
    age: 20,
    gender: "male"
  }

  const personObj2 = {
    name: "Alina",
    age: 30,
    gender: "female"
  }

  // Array data to render list of people
  const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ]

  const handleChange = (e) => {
    console.log(e.target.value)
    setTextInput(e.target.value)
  }

  const handleClick  = () => {
    setTextInput("")
  }

  // const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  // useEffect(() => {
  // 	const connection = createConnection(serverUrl, roomId);
  //   connection.connect();
  // 	return () => {
  //     connection.disconnect();
  // 	};
  // }, [serverUrl, roomId]);

  // mounting or birth phase or first time use
  // useEffect(()=>{

  // },[])


  // useEffect(() => {
  //   return () => {
  //     // unmounting or dead phase or unused phase
  //   }
  // },[])

  // useEffect(() => {
  //   // updation phase
  //   // update component if var1 or var2 changes in the array
  // },[.....var1, var2])


  const handleToggleDummy = () => {
    setShowDummy(!showDummy)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React and Django
        </a>
        {/* <Person /> */}
        {/* <ul>
          {people.map(person =>
            <li>{person}</li>
          )}
        </ul> */}
        {/* <input type="text" onChange={handleChange} value={textInput} /> */}
        {/* <button onClick={handleClick}>Reset textInput</button> */}
        {/* {textInput} */}
        <br />
        {/* {textInput.length} */}
        <button onClick={handleToggleDummy}>{showDummy ? 'Hide' : 'Show'}</button>
        {showDummy ? <Dummy /> : null}
      </header>
    </div>
  );
}

export default App;
