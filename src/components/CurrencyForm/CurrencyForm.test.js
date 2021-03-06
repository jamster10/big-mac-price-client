import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import CurrencyForm from './CurrencyForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CurrencyForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<CurrencyForm/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
});
