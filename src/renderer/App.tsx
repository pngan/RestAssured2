import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import './App.css';
import SourceInputSelection from './SourceInputSelection';
import EndpointsList from './EndpointsList';
import OutputSelect from './OutputSelect';
import ConvertButton from './ConvertButton';
import Output from './Output';
import SaveButton from './SaveButton';

const Container = styled.div`
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
  width: 80%;
  padding: 20px;
`;

const FixedColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100px;
  justify-content: center;
}
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
        <SaveButton convertedData={convertedData} />
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
