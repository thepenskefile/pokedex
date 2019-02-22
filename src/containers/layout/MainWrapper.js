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

const StyledColumn = styled(Column)`
  @media (max-width: 768px) {
    width: 90%;
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
          <StyledColumn spread={3} backgroundColor="white" paddingTop="10px">
            <SearchContainer category={this.state.searchCategory} />
          </StyledColumn>
          <StyledColumn padding="20px" backgroundColor="white">
            {children}
          </StyledColumn>
        </Columns>
      </Main>
    );
  };
}
