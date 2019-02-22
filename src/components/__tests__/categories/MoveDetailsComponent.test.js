import React from 'react';
import MoveDetailsComponent from '../../categories/MoveDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    accuracy: 'mockAccuracy',
    pp: 'mockPP',
    power: 'mockPower',
    contest_type: { name: 'mockContestTypeName' },
    damage_class: { name: 'mockDamageClassName' },
    type: { name: 'mockTypeName' }
  }
};

it('renders correctly', () => {
  const component = renderer.create(<MoveDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
