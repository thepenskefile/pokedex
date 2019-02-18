import React from 'react';
import LocationsCategoryComponent from '../../categories/LocationsCategoryContainer';
import renderer from 'react-test-renderer';

const defaultProps = {
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<LocationsCategoryComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
