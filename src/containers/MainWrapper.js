// @flow
import React, { Component } from 'react';
import { type Node } from 'react';
import { Heading, Column, Columns, styled, Box, palette } from 'fannypack';
import ContentCategoryContainer from '../containers/ContentCategoryContainer';
import SearchContainer from './SearchContainer';

const Main = styled(Box)`
  & a {
    text-decoration: none;
    color: ${palette('text')};
  }
`;

type Props = { children: Node };

export default class MainWrapper extends Component<Props> {
  render = () => {
    const { children } = this.props;
    return (
      <Main>
        <Heading textAlign="center">Pokedex</Heading>
        <ContentCategoryContainer />
        <Columns marginTop="20px" marginBottom="0px">
          <Column spread={5} padding="20px">
            <SearchContainer />
          </Column>
          <Column spread={7} padding="20px">
            {children}
          </Column>
        </Columns>
      </Main>
    );
  };
}
