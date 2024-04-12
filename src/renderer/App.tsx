import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import './App.css';
import SourceInputSelection from './SourceInputSelection';
import EndpointsList from './EndpointsList';
import OutputSelect from './OutputSelect';
import ConvertButton from './ConvertButton';
import Output from './Output';

const Container = styled.div`
  background-color: darkslategrey;
  display: flex;
  flex-direction: row;
  top: 10px;
  bottom: 0;
  left: 0;
  right: 10px;
  position: absolute;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background: red;
`;
const FixedColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  background: lightgreen;
`;

const TopControl = styled.div`
  height: 100px;
  background: yellow;
`;

const BottomControl = styled.div`
  background: orange;
  margin: 10px;
  height: 100%;
`;

function Hello() {
  const [data, setData] = useState([]);
  const [schemas, setSchemas] = useState([]);
  const [selectedEndpoints, setSelectedEndpoints] = useState([]);
  const [convertedData, setConvertedData] = useState([]);
  const [outputFormat, setOutputFormat] = useState('Rest Client');

  return (
    <Container>
      <Column>
        <SourceInputSelection setData={setData} setSchemas={setSchemas} />
        <EndpointsList
          setSelectedEndpoints={setSelectedEndpoints}
          selectedEndpoints={selectedEndpoints}
          data={data}
        />
      </Column>
      <FixedColumn>
        <TopControl>Input</TopControl>
        <ConvertButton
          data={data}
          schemas={schemas}
          outputFormat={outputFormat}
          // convertSelectedEndpoints={convertSelectedEndpoints}
          selectedEndpoints={selectedEndpoints}
          setConvertedData={setConvertedData}
        />
      </FixedColumn>
      <Column>
        <OutputSelect
          setConvertedData={setConvertedData}
          setOutputFormat={setOutputFormat}
        />
        <Output convertedData={convertedData[0]} />
      </Column>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
