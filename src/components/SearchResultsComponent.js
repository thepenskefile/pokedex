// @flow

import React, { Component } from 'react';
import SearchListItem from './SearchListItem';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';
import { Spinner, Container, Box, Group, Input, Button, Heading } from 'fannypack';

type Props = {
  response: Object,
  isLoading: Boolean,
  isSuccess: Boolean,
  isError: Boolean,
  error: Object,
  category: string,
  update: Function,
  singleFetch: boolean
};

type State = {
  enableScroll: boolean,
  hasInputText: boolean
};

export default class SearchResultsComponent extends Component<Props, State> {
  state = {
    enableScroll: true,
    hasInputText: false
  };
  // $FlowFixMe
  searchBar = React.createRef();
  // $FlowFixMe
  inputSearchText = React.createRef();

  handleScroll = () => {
    const { update, response } = this.props;
    if (this.searchBar.current) {
      var maxScrollPositionReached =
        this.searchBar.current.scrollHeight - this.searchBar.current.scrollTop === this.searchBar.current.clientHeight;

      if (maxScrollPositionReached) {
        this.setState({ enableScroll: false });
        update(response.next, response.results);
        this.setState({ enableScroll: true });
      }
    }
  };

  handleSubmitSearch = (e: any) => {
    e.preventDefault();
    const { category, update } = this.props;
    update(`https://pokeapi.co/api/v2/${category}/${e.target.search.value}/`, []);
  };

  handleInputSearchText = (e: any) => {
    if (e.target.value) {
      this.setState({ hasInputText: true });
    } else {
      this.setState({ hasInputText: false });
    }
  };

  handleClearSearchText = () => {
    const { update, singleFetch } = this.props;
    // $FlowFixMe
    this.inputSearchText.current.value = '';
    if (!singleFetch) {
      update();
    }
  };

  render = () => {
    const { response, isLoading, isSuccess, isError, error, category } = this.props;
    return (
      <Container textAlign="left" marginTop="10px">
        <Heading use="h4">
          {CONTENT_CATEGORY_TYPES[category].charAt(0).toUpperCase() + CONTENT_CATEGORY_TYPES[category].slice(1)}
        </Heading>
        <form onSubmit={this.handleSubmitSearch}>
          <Group>
            <Input
              elementRef={this.inputSearchText}
              isFullWidth
              name="search"
              onChange={this.handleInputSearchText}
              placeholder={`search for ${CONTENT_CATEGORY_TYPES[category]}`}
            />
            {this.state.hasInputText && <Button onClick={this.handleClearSearchText}>X</Button>}
            <Button type="submit">Search</Button>
          </Group>
        </form>
        <Box
          ref={this.searchBar}
          maxHeight="100vh"
          marginTop="10px"
          onScroll={this.handleScroll}
          overflowX="hidden"
          overflowY={this.state.enableScroll ? 'scroll' : 'hidden'}
        >
          {isLoading && <Spinner size="large" />}
          {isSuccess && (
            <Box backgroundColor="white">
              {response.results.length === 0 && <div>No results</div>}
              {response.results &&
                response.results.map((item, index) => (
                  <SearchListItem
                    key={item.name}
                    name={item.name}
                    id={item.url ? item.url.replace(/\D/g, '').substring(1) : item.id}
                    index={++index}
                    category={category}
                  />
                ))}
            </Box>
          )}
          {/* $FlowFixMe */}
          {isError && <Box>No items found with the name {this.inputSearchText.current.value}</Box>}
        </Box>
      </Container>
    );
  };
}
