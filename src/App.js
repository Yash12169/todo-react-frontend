import logo from './logo.svg';
import './App.css';
import { Person } from './components/Person';

function App() {

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
        <Person data={personObj1} show={true} />
        <Person data={personObj2} show={false} />
      </header>
    </div>
  );
}

export default App;
