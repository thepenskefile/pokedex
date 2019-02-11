import React from 'react';
import Hello from '../Hello';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const component = renderer.create(<Hello />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
