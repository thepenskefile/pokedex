// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Box, Spinner } from 'fannypack';
import Loads from 'react-loads';
import ItemDetailsComponent from '../../components/categories/ItemDetailsComponent';

type Props = { id: string };

export default class ItemsCategoryContainer extends Component<Props> {
  getItem = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/berry/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Loads contextKey={`items/${id}`} loadOnMount load={this.getItem}>
        {({ update, isLoading, isSuccess, isError, error, response }) => (
          <Box>
            {isLoading && <Spinner size="large" />}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && <Box>No results</Box>}
                <ItemDetailsComponent data={response} />
              </Fragment>
            )}
            {isError && <Box>An error occurred! {error.message}</Box>}
          </Box>
        )}
      </Loads>
    );
  };
}