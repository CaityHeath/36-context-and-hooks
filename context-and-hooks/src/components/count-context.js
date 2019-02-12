import React from 'react';
export const CountContext = React.createContext();

class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
      increment: this.increment,
      decrement: this.decrement
    }
  }
  increment = () => {
    let up = this.state.count + 1;
    this.setState({count: up});
  }
  decrement = () => {
    let down = this.state.count -1
    this.setState({count: down});
  }

  render() {
    return (
      <CountContext.Provider value={this.state}>
       {this.props.children}
      </CountContext.Provider>
    )
  }
}

export default Counter;