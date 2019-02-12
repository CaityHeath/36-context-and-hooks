import React from 'react';
import { Context } from './context.js';

export default (props) => {
  return (
    <Context.Consumer> 
      {(context) => {
        console.log(context);
        return(
          <div>
            <h1> {context.title} </h1>
            <button onClick={() => context.changeTitleTo('wassup')}>Change</button>
          </div>
        );
      }}
    </Context.Consumer>
  )
}