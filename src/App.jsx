import Header from "./components/Header";
import Agent from "./components/Queue/Agent";
import Period from "./components/Queue/Period";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <h1>ipnordic Statistik</h1>
      <Period
        statType="Period"
        company="4629"
        queue="1500"
        startDate="2021-09-16"
        endDate="2021-09-17"
      />
      {/* <Agent
        company="4629"
        queue="1500"
        startDate="2021-09-16"
        endDate="2021-09-17"
      /> */}
    </div>
  );
}

export default App;
