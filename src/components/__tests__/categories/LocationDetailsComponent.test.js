import React from 'react';
import LocationDetailsComponent from '../../categories/LocationDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    region: 'mockRegion'
  }
};
it('renders correctly', () => {
  const component = renderer.create(<LocationDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
