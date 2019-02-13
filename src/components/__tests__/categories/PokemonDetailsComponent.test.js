import React from 'react';
import PokemonDetailsComponent from '../../categories/PokemonDetailsComponent';
import renderer from 'react-test-renderer';

const defaultProps = {
  data: {
    name: 'mockName',
    weight: 'mockWeight',
    height: 'mockHeight',
    sprites: { front_default: 'mockImageUrl' }
  }
};

it('renders correctly', () => {
  const component = renderer.create(<PokemonDetailsComponent {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
