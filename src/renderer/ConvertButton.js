import React from 'react';
import styled from 'styled-components';
import ConverterCollection from './converter/ConverterCollection';

const Button = styled.button`
  display: flex;
  align-items: center;
  &:hover {
    background: #3f3f46;
  }
  border: 2px solid #575757;
  padding:8px;
  border-radius: 8px;
`;

const convertSelectedEndpoints = async (data, outputFormat) => {
  const converterCollection = new ConverterCollection();
  converterCollection.setSelectedConverter(outputFormat);
  const converter = converterCollection.getSelectedConverter();
  return converter.convert(data);
};

function ConvertButton({
  data,
  schemas,
  outputFormat,
  setConvertedData,
  selectedEndpoints,
  // convertSelectedEndpoints,
}) {
  const convertOpenApi = async (event) => {
    const filteredData = data.filter((endpoint) => {
      return selectedEndpoints.includes(endpoint.id);
    });
    const fileData = await convertSelectedEndpoints(
      { arrEndpoints: filteredData, schemas },
      outputFormat,
    );
    setConvertedData(fileData);
  };

  return (
    <Button type="button" onClick={convertOpenApi}>
      Convert
    </Button>
  );
}

export default ConvertButton;
