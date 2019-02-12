import React from 'react';
import { CountContext } from './count-context.js';

export default (props) => {
  return (
    <CountContext.Consumer> 
      {(context) => {

        return(
          <div>
            <h1> {context.count} </h1>
            <button onClick={() => context.increment()}>Increment</button>
            <button onClick={() => context.decrement()}>Decrement</button>
          </div>
        );
      }}
    </CountContext.Consumer>
  )
}