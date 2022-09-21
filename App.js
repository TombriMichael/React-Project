// import logo from './logo.svg';
import './App.css';
import './styles/main.css';
import Card from './Components/Card';
// import add from './anyfile.js';
import { useState } from 'react';

function App() {

  // let number = 100;
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('John');
const appname = 'COUNTER APP 🔄';

const increase = () => {
  setNumber(number + 1);
};
const decrease = () => {
  setNumber(number - 1);
  };

  return (
    <div className="container">
    <div>
    <h1>{appname}</h1>
    <h1>{name}</h1>
    <input onChange={function (e){
      setName(e.target.value);
    } }/>
    <hr>
  </hr>
    <div>
<span className="counter">
  <span className=""><h3>Count - </h3></span>
  <span className=""><h1>{number} 🔢</h1></span>
</span>
</div>
    </div>
    <div>
    <button onClick={increase} className="minpad">➕</button>

    <button onClick={decrease} className="minpad">➖</button>
</div>
  <Card title='My First Card' subTitle='This is It' details='What do yoi Know about this thing?'/>

  <Card title='My Second Card' subTitle='This is It' details='What do yoi Know about this thing?'/>

  <Card title='My Third Card' subTitle='This is It' details='What do yoi Know about this thing?'/>

    </div>
  );
}

export default App;
