// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Box, Spinner } from 'fannypack';
import Loads from 'react-loads';
import PokemonDetailsComponent from '../../components/categories/PokemonDetailsComponent';

type Props = { id: string };

export default class PokemonCategoryContainer extends Component<Props> {
  getPokemon = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Loads contextKey={`pokemon/${id}`} loadOnMount load={this.getPokemon}>
        {({ update, isLoading, isSuccess, isError, error, response }) => (
          <Box>
            {isLoading && <Spinner size="large" />}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && <Box>No results</Box>}
                <PokemonDetailsComponent data={response} />
              </Fragment>
            )}
            {isError && <Box>An error occurred! {error.message}</Box>}
          </Box>
        )}
      </Loads>
    );
  };
}
