// @flow

import React, { Component } from 'react';
import SearchListItem from './SearchListItem';
import { Spinner, Container, Box } from 'fannypack';

type Props = {
  response: Object,
  isLoading: Boolean,
  isSuccess: Boolean,
  isError: Boolean,
  error: Object,
  category: string,
  update: Function
};

type State = {
  enableScroll: boolean
};

export default class SearchResultsComponent extends Component<Props, State> {
  state = {
    enableScroll: true
  };
  // $FlowFixMe
  searchBar = React.createRef();
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

  render = () => {
    const { response, isLoading, isSuccess, isError, error, category } = this.props;
    return (
      <Container textAlign="left" marginTop="20px">
        <Box
          ref={this.searchBar}
          height="70vh"
          onScroll={this.handleScroll}
          overflowX="hidden"
          overflowY={this.state.enableScroll ? 'scroll' : 'hidden'}
        >
          {isLoading && <Spinner size="large" />}
          {isSuccess && (
            <Box backgroundColor="white">
              {response.results.length === 0 && <div>No results</div>}
              {response.results.map((item, index) => (
                <SearchListItem
                  key={item.name}
                  name={item.name}
                  id={item.url.replace(/\D/g, '').substring(item.url.replace(/\D/g, '').length - 1)}
                  index={++index}
                  category={category}
                />
              ))}
            </Box>
          )}
          {isError && <Box>An error occurred! {error.message}</Box>}
        </Box>
      </Container>
    );
  };
}
