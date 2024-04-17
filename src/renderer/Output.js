import React from 'react';
import styled from 'styled-components';
import { DataWindow } from './sharedStyles';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Content = styled(DataWindow)`
  width: 95%;
  flex: 1;
  overflow: scroll;
`;

const Title = styled.span`
  margin-top: 20px;
  margin-bottom: 10px;
`;

function Output({ convertedData }) {
  return (
    <Wrapper>
      <Title>Output</Title>
      <Content>{convertedData}</Content>
    </Wrapper>
  );
}
export default Output;
