import React from 'react';
import styled from 'styled-components';
import EndpointCheckbox from './EndpointCheckbox';
import SelectAllCheckbox from './SelectAllCheckbox';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const DataWindow = styled.div`
  border: solid black;
  border-width: 3px;
`;

const Content = styled(DataWindow)`
  width: 95%;
  box-shadow: 0px 0.5px 1px #888888;
  flex: 1;
  margin-bottom: 20px;
`;

const Title = styled.span`
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const CheckboxLabel = styled.label`
  margin-left: 10px;
`;

function EndpointsList({ data, selectedEndpoints, setSelectedEndpoints }) {
  return (
    <Wrapper>
      <Title>Endpoints to Convert</Title>
      <Content>
        {data.length > 0 && (
          <SelectAllCheckbox
            data={data}
            setSelectedEndpoints={setSelectedEndpoints}
          />
        )}
        {data.map((endpoint) => (
          <React.Fragment key={endpoint.id}>
            <EndpointCheckbox
              selectedEndpoints={selectedEndpoints}
              setSelectedEndpoints={setSelectedEndpoints}
              data={endpoint}
            />
          </React.Fragment>
        ))}
      </Content>
    </Wrapper>
  );
}

export default EndpointsList;
