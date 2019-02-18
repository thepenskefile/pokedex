import React from 'react';
import ItemDetailsComponent from '../../categories/ItemDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    fling_power: 'mockFlingPower',
    effect_entries: [{ effect: 'mockEffect' }],
    sprites: { default: 'mockImageUrl' }
  }
};
it('renders correctly', () => {
  const component = renderer.create(<ItemDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
