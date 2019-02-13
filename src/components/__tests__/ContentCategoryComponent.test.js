import React from 'react';
import ContentCategoryComponent from '../ContentCategoryComponent';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const component = renderer.create(<ContentCategoryComponent />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
