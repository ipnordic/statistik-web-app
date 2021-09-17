import Header from "./components/Header";
import Content from "./components/Content";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.Container}>
      <Header />
      <h1>ipnordic Statistik</h1>
      <Content />
    </div>
  );
}

export default App;
