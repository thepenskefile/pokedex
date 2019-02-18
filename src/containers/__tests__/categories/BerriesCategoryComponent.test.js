import React from 'react';
import BerriesCategoryComponent from '../../categories/BerriesCategoryContainer';
import renderer from 'react-test-renderer';

const defaultProps = {
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<BerriesCategoryComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
