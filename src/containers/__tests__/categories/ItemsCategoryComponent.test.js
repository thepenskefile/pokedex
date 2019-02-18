import React from 'react';
import ItemsCategoryComponent from '../../categories/ItemsCategoryContainer';
import renderer from 'react-test-renderer';

const defaultProps = {
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<ItemsCategoryComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
