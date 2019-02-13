import React from 'react';
import PokemonCategoryContainer from '../../categories/PokemonCategoryContainer';
import renderer from 'react-test-renderer';

const defaultProps = {
  id: 'mockId'
};

it('renders correctly', () => {
  const component = renderer.create(<PokemonCategoryContainer {...defaultProps} />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
