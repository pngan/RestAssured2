import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { InputWrapper, Label } from './sharedStyles';

const LoadButton = styled.button`
  margin-left: 10px;
  flex-grow: 1;
`;
const BrowseButton = styled.button`
  margin-left: 10px;
  flex-grow: 1;
`;
const FileInput = styled.input`
  display: none;
`;
const SourceInput = styled.input`
  flex-grow: 10;
  background: #404040;
  color: #d4d4d4;
`;

const InputButtonWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
`;

function SourceInputSelection(props) {
  const [fileOrUrl, setFileOrUrl] = useState(
    'https://petstore3.swagger.io/api/v3/openapi.json',
  );
  const inputElement = useRef();
  const updateSourceValue = (event) => {
    // add debounce
    setFileOrUrl(event.target.value);
  };

  const loadOpenApiContent = async (event) => {
    const arrEndpoints = await window.convert.triggerFileLoad(fileOrUrl);
    props.setData(arrEndpoints ?? []);
  };

  const fileUploadSelect = () => {
    inputElement.current.click();
  };

  const fileInputSelection = () => {
    setFileOrUrl(inputElement.current?.files[0]?.path);
  };

  return (
    <InputWrapper className="">
      <Label>URL or File:</Label>
      <InputButtonWrapper>
        <SourceInput
          type="text"
          onChange={updateSourceValue}
          value={fileOrUrl}
        />
        <FileInput
          onChange={fileInputSelection}
          type="file"
          ref={inputElement}
        />
        <BrowseButton onClick={fileUploadSelect}>Browse</BrowseButton>
        <LoadButton type="button" onClick={loadOpenApiContent}>
          Load
        </LoadButton>
      </InputButtonWrapper>
    </InputWrapper>
  );
}
export default SourceInputSelection;
