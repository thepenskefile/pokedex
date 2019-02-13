import React from 'react';
import SearchListItem from '../SearchListItem';
import renderer from 'react-test-renderer';

const defaultProps = {
  index: 'mockIndex',
  name: 'mockName',
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<SearchListItem {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
