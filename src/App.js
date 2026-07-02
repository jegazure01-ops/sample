import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  function handleClick() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));  
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        <button onClick={handleClick}>
          Click me!
        </button>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        
      </header>
    </div>
  );
}

export default App;
