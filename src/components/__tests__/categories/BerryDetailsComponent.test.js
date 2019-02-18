import React from 'react';
import BerryDetailsComponent from '../../categories/BerryDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    growth_time: 'mockGrowthTime',
    max_harvest: 'mockMaxHarvest',
    size: 'mockSize',
    smoothness: 'mockSmoothness',
    soil_dryness: 'mockSoilDryness'
  }
};

it('renders correctly', () => {
  const component = renderer.create(<BerryDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
