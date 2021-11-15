import react from 'react';
import Week1 from './components/week1';
import Week2 from './components/week2';
import Week3 from './components/week3';
import Week4 from './components/week4';
import Week5 from './components/week5';
import Week7 from './components/week7';
import styled from 'styled-components';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Content= styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`

const Ul= styled.ul`
  list-style-type: none;
`

const Li= styled.li`
  margin: 2em 5em;
`

const Home = () => (
  <Content>
    <h1>Interaction Design Components</h1>
    <Ul>
      <Li>
        <Link to="/week-1">Week-1</Link>
      </Li>
      <Li>
        <Link to="/week-2">Week-2</Link>
      </Li>
      <Li>
        <Link to="/week-3">Week-3 | Buttons interaction</Link>
      </Li>
      <Li>
        <Link to="/week-4">Week-4 | Login component</Link>
      </Li>
      <Li>
        <Link to="/week-5">Week-5 | Navigation</Link>
      </Li>
      <Li>
        <Link to="/week-7">Week-7 | Navigation</Link>
      </Li>
    </Ul>
  </Content>
);




function App() {
  return (

    <Router>

      <Switch>
        
          <Route path="/week-1">
            <Week1 />
          </Route>
          <Route path="/week-2">
            <Week2 />
          </Route>
          <Route path="/week-3">
            <Week3 />
          </Route>
          <Route path="/week-4">
            <Week4 />
          </Route>
          <Route path="/week-5">
            <Week5 />
          </Route>
          <Route path="/week-7">
            <Week7 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
       
      </Switch>
    </Router>

  );
}
export default App;