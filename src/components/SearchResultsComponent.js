// @flow

import React, { Fragment } from 'react';
// import { Link } from '@reach/router';
import SearchListItem from './SearchListItem';
import { Spinner, Container, Box } from 'fannypack';

type Props = {
  response: Object,
  isLoading: Boolean,
  isSuccess: Boolean,
  isError: Boolean,
  error: Object
};

const SearchResultsComponent = ({ response, isLoading, isSuccess, isError, error, ...props }: Props) => (
  <Container textAlign="left" marginLeft="10px" width="96%">
    <Fragment>
      {isLoading && <Spinner size="large" color="#ffd700" />}
      {isSuccess && (
        <Fragment>
          {response.length === 0 && <div>No results</div>}
          {response.map((item, index) => (
            <SearchListItem
              key={item}
              name={item.name}
              id={item.url.replace(/\D/g, '').substring(item.url.replace(/\D/g, '').length - 1)}
              index={++index}
            />
          ))}
        </Fragment>
      )}
      {isError && <Box>An error occurred! {error.message}</Box>}
    </Fragment>
  </Container>
);

export default SearchResultsComponent;
