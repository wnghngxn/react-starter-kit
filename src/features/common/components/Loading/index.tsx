import styled from 'styled-components';
import React, { FC } from 'react';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  font-size: 12px;
  color: #000;
`;

export const Loading: FC = () => {
  return <Wrapper>loading</Wrapper>;
};
