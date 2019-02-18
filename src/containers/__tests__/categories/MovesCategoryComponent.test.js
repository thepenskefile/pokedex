import React from 'react';
import MovesCategoryContainer from '../../categories/MovesCategoryContainer';
import renderer from 'react-test-renderer';

const defaultProps = {
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<MovesCategoryContainer {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
