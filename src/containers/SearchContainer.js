// @flow
import React, { Component, Fragment } from 'react';
import TextInput from '../UI/TextInput';
import SearchResultsComponent from '../components/SearchResultsComponent';
import Loads from 'react-loads';
import axios from 'axios';

type Props = {};

export default class SearchContainer extends Component<Props> {
  fetchItems = async () => {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    return response.data.results;
  };
  render = () => {
    return (
      <Fragment>
        <TextInput isFullWidth placeholder="search" />
        <Loads contextKey="pokemon" loadOnMount load={this.fetchItems}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <SearchResultsComponent
              response={response}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
            />
          )}
        </Loads>
      </Fragment>
    );
  };
}
