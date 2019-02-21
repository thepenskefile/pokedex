// @flow
import React, { Component } from 'react';
import { type Node } from 'react';
import { Heading, Column, Columns, styled, Box, palette, Divider } from 'fannypack';
import ContentCategoryComponent from '../../components/ContentCategoryComponent';

import SearchContainer from '../SearchContainer';

const Main = styled(Box)`
  background-color: 'white';
  & a {
    text-decoration: none;
    color: ${palette('text')};
  }
`;

type Props = { children: Node };
type State = { searchCategory: string };

export default class MainWrapper extends Component<Props, State> {
  state = {
    searchCategory: 'pokemon'
  };

  selectCategory = async (category: string) => {
    this.setState({ searchCategory: category });
  };
  render = () => {
    const { children } = this.props;
    return (
      <Main>
        <Heading textAlign="center">Pokedex</Heading>
        <ContentCategoryComponent selectCategory={this.selectCategory} />
        <Divider />
        <Columns marginTop="20px" marginBottom="0px" isGapless>
          <Column spread={3} backgroundColor="white" paddingTop="10px">
            <SearchContainer category={this.state.searchCategory} />
          </Column>
          <Column padding="20px" backgroundColor="white">
            {children}
          </Column>
        </Columns>
      </Main>
    );
  };
}
