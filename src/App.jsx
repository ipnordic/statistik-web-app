import Header from "./components/Header";
import styles from "./App.module.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Content from "./components/Content";
import AgentDetails from "./components/Routes/AgentDetails";
import Footer from "./components/Footer";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <Router>
      <Header />
      <div className={styles.Container}>
        <Switch>
          <Route path="/" component={Content} exact />
          <Route path="/statistik/detaljer/:queueId" component={AgentDetails} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
