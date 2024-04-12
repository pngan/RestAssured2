import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import './App.css';
import SourceInputSelection from './SourceInputSelection';
import EndpointsList from './EndpointsList';

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
  const [selectedEndpoints, setSelectedEndpoints] = useState([]);

  return (
    <Container>
      <Column>
        <SourceInputSelection setData={setData} />
        <EndpointsList
                setSelectedEndpoints={setSelectedEndpoints}
                selectedEndpoints={selectedEndpoints}
                data={data}/>
      </Column>
      <FixedColumn>
        <TopControl>Input</TopControl>

        <BottomControl>Panel</BottomControl>
      </FixedColumn>
      <Column>
        <TopControl>Input</TopControl>
        <BottomControl>Panel</BottomControl>
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
