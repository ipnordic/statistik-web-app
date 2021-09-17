import Header from "./components/Header";
import Agent from "./components/Queue/Agent";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <h1>ipnordic Statistik</h1>
      <Agent />
    </div>
  );
}

export default App;
