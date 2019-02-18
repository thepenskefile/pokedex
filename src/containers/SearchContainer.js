// @flow
import React, { Component } from 'react';
import TextInput from '../UI/TextInput';
import SearchResultsComponent from '../components/SearchResultsComponent';
import Loads from 'react-loads';
import axios from 'axios';
import { Box } from 'fannypack';

type Props = {
  category: string
};

export default class SearchContainer extends Component<Props> {
  fetchItems = async () => {
    const { category } = this.props;

    const response = await axios.get(`https://pokeapi.co/api/v2/${category}/`);
    return response.data;
  };

  fetchMoreItems = async (url: string, prevItems: Array<Object>) => {
    const response = await axios.get(url);
    const newItems = [...prevItems, ...response.data.results];
    response.data.results = newItems;
    return response.data;
  };

  render = () => {
    const { category } = this.props;
    return (
      <Box marginLeft="7px" marginRight="7px">
        <TextInput isFullWidth placeholder="search" />
        <Loads contextKey={category} loadOnMount load={this.fetchItems} update={this.fetchMoreItems}>
          {({ update, isLoading, isSuccess, isError, error, response }) => (
            <SearchResultsComponent
              response={response}
              isLoading={isLoading}
              isSuccess={isSuccess}
              isError={isError}
              error={error}
              category={category}
              update={update}
            />
          )}
        </Loads>
      </Box>
    );
  };
}
