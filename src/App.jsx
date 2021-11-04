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
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <div className="AppContainer">
        <Switch>
          <Route path="/" component={Content} exact />
          <Route path="/statistik/detaljer/:queueId" component={AgentDetails} />
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
