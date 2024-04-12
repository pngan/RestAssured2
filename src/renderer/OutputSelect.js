import React, { useMemo } from 'react';
import styled from 'styled-components';
import ConverterCollection from './converter/ConverterCollection';
import { InputWrapper, Label } from './sharedStyles';

const Select = styled.select`
  height: 30px;
  width: 100%;
`;

function OutputSelect({ setConvertedData, setOutputFormat}) {
  const { converters } = new ConverterCollection();

  const handleOutputFormat = (event) => {
    setOutputFormat(event.target.value);
  };

  const converterList = useMemo(() => {
    if (converters) {
      return converters.map((converter) => {
        return (
          <option key={converter.name} value={converter.name}>
            {converter.name}
          </option>
        );
      });
    }
    return <option>None available</option>;
  }, [converters]);

  return (
    <InputWrapper>
      <Label>Output Format:</Label>
      <Select onChange={handleOutputFormat}>{converterList}</Select>
    </InputWrapper>
  );
}

export default OutputSelect;