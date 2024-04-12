import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';

const Container = styled.div`
  margin-top: 20px;
`

function Hello() {
  return (
    <Container className="container">
      <h1>RestConvert</h1>
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
