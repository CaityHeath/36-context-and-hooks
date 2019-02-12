import React from 'react';
export const Context = React.createContext();

class Bananas extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'Hello',
      changeTitleTo: this.changeTitleTo
    }
  }
  changeTitleTo = title => {
    this.setState({title})
  }

  render() {
    return (
      <Context.Provider value={this.state}>
       {this.props.children}
      </Context.Provider>
    )
  }
}

export default Bananas;