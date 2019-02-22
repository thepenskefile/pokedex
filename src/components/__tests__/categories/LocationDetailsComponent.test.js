import React from 'react';
import LocationDetailsComponent from '../../categories/LocationDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    region: 'mockRegion',
    game_indices: [{ game_index: '1', generation: { name: 'mockGenerationName', url: 'mockUrl/1' } }]
  }
};
it('renders correctly', () => {
  const component = renderer.create(<LocationDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
