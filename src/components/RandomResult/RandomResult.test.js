import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import RandomResult from './RandomResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RandomResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<RandomResult/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
