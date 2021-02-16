import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Home from './Home';
import Missioni from './Missioni';
import Navbar from './Navbar';

import Navicelle from './Navicelle';
import Sidebar from './Sidebar';

function App() {
  return (
    <div>
<Container fluid>
  <Row>
    <Col xs={12}>
      <Navbar />
    </Col>
  </Row>
  <Row>
    <Col xs={3}>
      <Sidebar />
    </Col>
    <Col xs={9}>
    <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/home"><Home /></Route>
        <Route exact path="/navicelle"><Navicelle /></Route>
        <Route exact path="/missioni"><Missioni /></Route>
      </Switch>  
    </Col>
  </Row>
</Container>

    </div>
  )
}
export default App;
