// @flow

import React, { Component, Fragment } from 'react';
import axios from 'axios';
import { Box, Spinner } from 'fannypack';
import Loads from 'react-loads';
import LocationDetailsComponent from '../../components/categories/LocationDetailsComponent';

type Props = { id: string };

export default class LocationsCategoryContainer extends Component<Props> {
  getLocation = async () => {
    const { id } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/location/${id}`);
    return response.data;
  };
  render = () => {
    const { id } = this.props;
    return (
      <Loads contextKey={`locations/${id}`} loadOnMount load={this.getLocation}>
        {({ update, isLoading, isSuccess, isError, error, response }) => (
          <Box>
            {isLoading && <Spinner size="large" />}
            {isSuccess && (
              <Fragment>
                {response.length === 0 && <Box>No results</Box>}
                <LocationDetailsComponent data={response} />
              </Fragment>
            )}
            {isError && <Box>An error occurred! {error.message}</Box>}
          </Box>
        )}
      </Loads>
    );
  };
}
