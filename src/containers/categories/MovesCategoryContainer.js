// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Box, Spinner } from 'fannypack';
import Loads from 'react-loads';
import MoveDetailsComponent from '../../components/categories/MoveDetailsComponent';

type Props = { id: string };

export default class MovesCategoryContainer extends Component<Props> {
  getMove = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/move/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Loads contextKey={`moves/${id}`} loadOnMount load={this.getMove}>
        {({ update, isLoading, isSuccess, isError, error, response }) => (
          <Box>
            {isLoading && <Spinner size="large" />}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && <Box>No results</Box>}
                <MoveDetailsComponent data={response} />
              </Fragment>
            )}
            {isError && <Box>An error occurred! {error.message}</Box>}
          </Box>
        )}
      </Loads>
    );
  };
}
