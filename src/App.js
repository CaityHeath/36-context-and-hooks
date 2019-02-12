import React from 'react';
import Count from './components/count-content.js';
import Counter from './components/count-context.js';
  

/**
 *
 *
 * @class App
 * @extends {React.Component}
 */
class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {};

  }
  render() {
    return (
    <>
      <p> howdy </p>
     <Counter>
       <Count />
     </Counter>
    </>
    );
  }
}

export default App;
