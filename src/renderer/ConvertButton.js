import React from 'react';
import styled from 'styled-components';
import ConverterCollection from './converter/ConverterCollection';

const Button = styled.button`
  height: 30px;
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
    <Button
      className="btn btn-secondary btn-sm"
      type="button"
      onClick={convertOpenApi}
    >{`Convert =>`}</Button>
  );
}

export default ConvertButton;
