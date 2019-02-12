import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from '../../App.js';


describe('<Index>', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders an h1', () => {
    let componenet = mount(<App/>);
    expect(componenet.find('h1').text()).toContain(0);
  });

  it('increments a counter', () => {
    let component = mount(<App />);
    let increment = component.find('#increment');
    increment.simulate('click');
    expect(component.find('h1').text()).toContain(1);
  });

  it('decrements a counter', () => {
    let component = mount(<App />);
    let increment = component.find('#decrement');
    increment.simulate('click');
    expect(component.find('h1').text()).toContain(-1);
  });
  

});
