import styled from '@emotion/styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ParcelsPage from './pages/ParcelsPage';
import ScannerPage from './pages/ScannerPage';

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background: #1e2023;
  height: 100vh;
  width: 100vw;
  color: ivory;
  justify-content: center;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/scan" component={ScannerPage} />
        <Route exact path="/parcels" component={ParcelsPage} />
      </Router>
    </Container>
  );
}

export default App;
