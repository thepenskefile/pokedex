// @flow

import React, { Component } from 'react';
import { Container, Box, SelectMenu, Columns, Column, palette, styled } from 'fannypack';

const StyledSelectMenu = styled(SelectMenu)`
  & input {
    border: none;
    outline: none;
    background-color: ${palette('white700')};
    border-radius: 0;
    box-shadow: none;
  }

  & div:nth-child(2) {
    max-height: 100vh;
  }
`;

type Props = {
  loadOptions: Function,
  onClickMenuItem: Function
};

export default class SearchResultsComponent extends Component<Props> {
  render = () => {
    const { loadOptions, onClickMenuItem } = this.props;
    return (
      <Container textAlign="left" marginTop="10px">
        <StyledSelectMenu
          renderOption={option => (
            <Box
              onClick={() =>
                onClickMenuItem(option.value.url ? option.value.url.replace(/\D/g, '').substring(1) : option.value.id)
              }
              padding="5px"
            >
              <Columns minBreakpoint="mobile">
                <Column spread={2}>
                  {option.value.url ? option.value.url.replace(/\D/g, '').substring(1) : option.value.id}
                </Column>
                <Column spread={10}>{option.value.name.charAt(0).toUpperCase() + option.value.name.slice(1)}</Column>
              </Columns>
            </Box>
          )}
          isSearchable
          loadOptions={loadOptions}
        />
      </Container>
    );
  };
}
