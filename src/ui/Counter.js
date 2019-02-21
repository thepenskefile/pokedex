import React from 'react';
import styled, { keyframes } from 'styled-components';
import { Box, palette } from 'fannypack';

const rotate = keyframes`
  0% {
    stroke-dasharray: 0 100;
  }
`;
export const CircularChart = styled.svg`
  display: block;
  width: 100px;
  max-height: 100px;
  margin: auto;
`;

export const CircleBackground = styled.path`
  fill: none;
  stroke: #eee;
  stroke-width: 2.8;
`;

export const Percentage = styled.text`
  fill: #666;
  font-size: 0.5em;
  text-anchor: middle;
`;

const Counter = styled.path`
  stroke-dasharray: ${props => props.percentage}, 100;
  fill: none;
  stroke: ${props => props.color};
  stroke-width: 2.5;
  stroke-linecap: round;
  animation: ${rotate} 1s ease-out forwards;
`;

type Props = {
  percentage: Object,
  max: Number,
  showPercentage: boolean,
  label: string,
  color: string
};

const CounterComponent = ({ percentage, showPercentage, label, color = palette('normal'), ...props }: Props) => (
  <Box>
    <CircularChart viewBox="0 0 36 36">
      <CircleBackground
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <Counter
        percentage={percentage}
        color={color}
        d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <Percentage x="18" y="20.35">
        {percentage}
      </Percentage>
    </CircularChart>
    <Box textAlign="center">{label}</Box>
  </Box>
);

export default CounterComponent;
