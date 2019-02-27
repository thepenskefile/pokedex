// @flow
import React, { Component } from 'react';
import SearchResultsComponent from '../components/SearchResultsComponent';
import axios from 'axios';
import Loads from 'react-loads';
import { Box, Spinner } from 'fannypack';
import { navigate } from '@reach/router';
import { CONTENT_CATEGORY_TYPES } from '../_types/content_category_types';

type Props = {
  category: string
};

export default class SearchContainer extends Component<Props> {
  loadOptions = async ({ page, searchText }: { page: number, searchText: string }) => {
    const limit = 30;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/${this.props.category}/?limit=${limit}&offset=${limit * (page - 1)}`
    );
    let options = null;
    if (searchText) {
      options = response.data.results.map((item: any) => {
        if (item.name.includes(searchText)) return { key: item.name, label: item.name, value: item };
      });
      options = options.filter(function(element) {
        return element !== undefined;
      });

      while (options.length === 0) {
        const searchPagesLimit = 300;

        var searchPages = page;
        var data = await axios.get(
          `https://pokeapi.co/api/v2/${this.props.category}/?limit=${searchPagesLimit}&offset=${searchPagesLimit *
            (searchPages++ - 1)}`
        );

        options = data.data.results.map((item: any) => {
          if (item.name.includes(searchText)) return { key: item.name, label: item.name, value: item };
        });
        options = options.filter(function(element) {
          return element !== undefined;
        });
        if (data.next === undefined) {
          break;
        }
      }
      // $FlowFixMe
      options = options.filter(function(element) {
        return element !== undefined;
      });
    } else {
      options = response.data.results.map((item: any) => ({ key: item.name, label: item.name, value: item }));
    }
    return { options };
  };

  handleClickMenuItem = (id: string) => {
    navigate(`/${CONTENT_CATEGORY_TYPES[this.props.category]}/${id}`);
  };
  render = () => {
    return (
      <Loads contextKey={this.props.category}>
        {({ isLoading }) => (
          <Box marginLeft="7px" marginRight="7px">
            {isLoading && (
              <Box textAlign="center">
                <Spinner margin="5px" marginTop="20px" textAlign="center" size="large" color="text" />
              </Box>
            )}
            <SearchResultsComponent loadOptions={this.loadOptions} onClickMenuItem={this.handleClickMenuItem} />
          </Box>
        )}
      </Loads>
    );
  };
}
