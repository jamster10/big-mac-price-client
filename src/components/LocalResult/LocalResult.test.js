import React from 'react';
import ReactDOM from 'react-dom';
import LocalResult from './LocalResult';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LocalResult />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<LocalResult/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
