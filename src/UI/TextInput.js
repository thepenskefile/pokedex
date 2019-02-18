import React from 'react';
import { InputField } from 'fannypack';
import styled from 'fannypack/styled';

const StyledTextInput = styled(InputField)`
  padding-left: 1em;
`;

const TextInput = ({ ...props }) => <StyledTextInput {...props} />;

export default TextInput;
