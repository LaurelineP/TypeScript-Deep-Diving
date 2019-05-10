import './styles.css';
import React, { FunctionComponent, useState } from 'react';
import CounterOutput from './components/CounterOutput';

/**
 *  By using state means that you have to give an initial Value 
 *  - initial value here will be a number as our component here will affect a number
 *    help here: https://fettblog.eu/typescript-react/hooks/#usestate
 **/
const App: FunctionComponent < { initial? :number } > = ({ initial = 0}) => {
  const [count, setCount] = useState(initial);

    return (
      <div id="main">
        <div className="counter-container">
          <h1>Our counter</h1>
          <CounterOutput counter={count} />
          <button onClick={() => setCount(count + 1)}>Increment</button>
          <button onClick={() => count > initial ? setCount(count - 1) : initial}>Decrement</button>
        </div>
      </div>
      );
  }
  
export default App;
