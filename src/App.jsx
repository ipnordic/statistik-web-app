import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Routes/Home";
import Content from "./components/Content";
import Login from "./components/Routes/Login";
import AgentDetails from "./components/Queue/AgentDetails";
import "@fontsource/roboto/400.css";

function App() {
  return (
    <div className={styles.Container}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/statistik" component={Content} exact />
          <Route path="/login" component={Login} />
          <Route path="/statistik/queuedetails/:id" component={AgentDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
