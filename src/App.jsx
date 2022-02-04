import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import "semantic-ui-css/semantic.min.css";
import styled from "styled-components";
import { useEffect } from "react";

const AppContainer = styled.main`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`;

function App() {
  useEffect(() => {
    window.location.href = "https://ipnordic.jcobsn.dev/";
  }, []);

  return (
    <Router>
      <Header />
      <AppContainer>
        <Switch>
          {/* <Route path="/" component={Content} exact />
          <Route path="/statistik/detaljer/:queueId" component={AgentDetails} />
          <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Switch>
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
