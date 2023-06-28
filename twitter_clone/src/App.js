import './App.css';
import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import SignUp from './Components/auth/SignUp';
import SignIn from './Components/auth/SignIn';

import Home from './Components/Home';
import ProtectedRoute from './Components/2nd-1/PostUpdater/ProtectedRout';
import { UserAuthContextProvider } from './Components/2nd-1/PostUpdater/UserAuthContextProvider';

function App() {
  return (
    <Container>
    <Row>
      <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp/>} />
          </Routes>
        </UserAuthContextProvider>
      </Col>
    </Row>
  </Container>
  );
}

export default App;
