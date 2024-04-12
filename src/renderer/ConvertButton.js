import React from 'react';
import styled from 'styled-components';
import ConverterCollection from './converter/ConverterCollection';

//const ConverterCollection = require('../converter/converter.js');

const Button = styled.button`
  height: 30px;
`;

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
    // const fileData = await convertSelectedEndpoints({arrEndpoints: filteredData, refs: refs}, outputFormat);
    const fileData = await convertSelectedEndpoints2(
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

const convertSelectedEndpoints2 = async function (data, outputFormat) {
  const converterCollection = new ConverterCollection();
  converterCollection.setSelectedConverter(outputFormat);
  const converter = converterCollection.getSelectedConverter();
  console.log(data);
  return converter.convert(data);
};


// convertSelectedEndpoints2(data, outputFormat) {
//   const converterCollection = new ConverterCollection();
//   converterCollection.setSelectedConverter(outputFormat);
//   const converter = converterCollection.getSelectedConverter();
//   return converter.convert(data);
// };

export default ConvertButton;
