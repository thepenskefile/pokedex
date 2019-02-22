// @flow
import React, { Component } from 'react';
import SearchResultsComponent from '../components/SearchResultsComponent';
import Loads from 'react-loads';
import axios from 'axios';
import { Box } from 'fannypack';

type Props = {
  category: string
};

type State = {
  singleFetch: boolean
};

export default class SearchContainer extends Component<Props, State> {
  state = { singleFetch: true };
  fetchItems = async () => {
    const { category } = this.props;
    const response = await axios.get(`https://pokeapi.co/api/v2/${category}/?limit=30`);
    return response.data;
  };

  fetchMoreItems = async (url: string, prevItems: Array<Object>) => {
    const { category } = this.props;
    if (url.length > 0) {
      const response = await axios.get(url);
      if (prevItems.length !== 0) {
        const newItems = [...prevItems, ...response.data.results];
        response.data.results = newItems;
        this.setState({ singleFetch: false });
        return response.data;
      }
      this.setState({ singleFetch: false });
      return { results: [response.data] };
    }
    const response = await axios.get(`https://pokeapi.co/api/v2/${category}/`);
    this.setState({ singleFetch: true });
    return response.data;
  };

  render = () => {
    const { category } = this.props;
    return (
      <Box marginLeft="7px" marginRight="7px">
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
              singleFetch={this.state.singleFetch}
            />
          )}
        </Loads>
      </Box>
    );
  };
}
