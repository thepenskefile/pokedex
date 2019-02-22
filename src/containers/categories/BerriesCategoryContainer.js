// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Box, Spinner } from 'fannypack';
import Loads from 'react-loads';
import BerryDetailsComponent from '../../components/categories/BerryDetailsComponent';

type Props = { id: string };

export default class BerriesCategoryContainer extends Component<Props> {
  getBerry = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/berry/${id}`);

    let flavors = [];

    for (var i = 0; i < response.data.flavors.length; i++) {
      if (response.data.flavors[i].potency > 0) {
        flavors.push(response.data.flavors[i]);
      }
    }
    response.data.flavors = flavors;
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Loads contextKey={`berries/${id}`} loadOnMount load={this.getBerry}>
        {({ update, isLoading, isSuccess, isError, error, response }) => (
          <Box textAlign="center">
            {isLoading && (
              <Box textAlign="center">
                <Spinner margin="5px" marginTop="20px" textAlign="center" size="large" color="text" />
              </Box>
            )}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && <Box>No results</Box>}
                <BerryDetailsComponent data={response} />
              </Fragment>
            )}
            {isError && <Box>An error occurred! {error.message}</Box>}
          </Box>
        )}
      </Loads>
    );
  };
}
