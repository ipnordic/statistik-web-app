import Header from "./components/Header";
import Agent from "./components/Queue/Agent";
import Period from "./components/Queue/Period";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <h1>ipnordic Statistik</h1>
      <Period company="2776" queue="" />
      {/* <Agent company="2776" queue="1530" /> */}
    </div>
  );
}

export default App;
