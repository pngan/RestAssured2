import React, { useMemo } from 'react';
import styled from 'styled-components';
import ConverterCollection from './converter/ConverterCollection';
import { InputWrapper, Label } from './sharedStyles';

const Select = styled.select`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: #404040;
  height: 30px;
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
