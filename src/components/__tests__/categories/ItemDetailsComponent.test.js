import React from 'react';
import ItemDetailsComponent from '../../categories/ItemDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    fling_power: 'mockFlingPower',
    effect_entries: [{ effect: 'mockEffect' }],
    sprites: { default: 'mockImageUrl' },
    game_indices: [{ game_index: '1', generation: { name: 'mockGenerationName', url: 'mockUrl/1' } }],
    attributes: [{ name: 'mockAttributeName' }]
  }
};
it('renders correctly', () => {
  const component = renderer.create(<ItemDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
