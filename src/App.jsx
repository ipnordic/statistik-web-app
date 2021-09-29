import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Routes/Home";
import Content from "./components/Content";
import Login from "./components/Routes/Login";
import AgentDetails from "./components/Routes/AgentDetails";
import "@fontsource/roboto/400.css";
import Chart from "./components/Routes/Chart";

function App() {
  return (
    <div className={styles.Container}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/statistik" component={Content} exact />
          <Route path="/login" component={Login} />
          <Route
            path="/statistik/queuedetails/:queueId"
            component={AgentDetails}
          />
          <Route path="/chart" component={Chart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
