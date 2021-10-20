import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Routes/Home";
import Content from "./components/Content";
import Login from "./components/Routes/Login";
import AgentDetails from "./components/Routes/AgentDetails";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

LogRocket.init("xnegd5/ipnordic-statistik");
setupLogRocketReact(LogRocket);

LogRocket.identify("0579fd1a-5e42-468c-a5df-73d2f2cadf4e", {
  name: "Mathias Jacobsen",
  email: "mathias.jacobsen@ipnordic.dk",
});

function App() {
  return (
    <div className={styles.Container}>
      <Router>
        <Header />

        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/statistik" component={Content} exact />
          <Route path="/login" component={Login} />
          <Route path="/statistik/detaljer/:queueId" component={AgentDetails} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
