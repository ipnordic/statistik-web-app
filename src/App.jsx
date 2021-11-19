import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Content from "./components/Content";
import AgentDetails from "./components/AgentDetails/AgentDetails";
import Footer from "./components/Footer/Footer";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";

const AppContainer = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

function App() {
  return (
    <Router>
      <Header />
      <AppContainer>
        <Switch>
          <Route path="/" component={Content} exact />
          <Route path="/statistik/detaljer/:queueId" component={AgentDetails} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
