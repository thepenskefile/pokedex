import React from 'react';
import SearchContainer from '../SearchContainer';
import renderer from 'react-test-renderer';

const defaultProps = {};

it('renders correctly', () => {
  const component = renderer.create(<SearchContainer {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
