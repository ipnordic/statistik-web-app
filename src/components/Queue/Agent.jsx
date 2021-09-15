import useFetch from "../../hooks/useFetch";
import styles from "../Table.module.css";

const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

const Agent = ({ company = "2776", queue }) => {
  const url = `https://api-prod01.ipnordic.dk/api/Statistics/Queue/v2/Agent?startDate=2021-09-15&endDate=2021-09-16&company=${company}&queue=${queue}`;

  const { data, loading, error } = useFetch(url, USERNAME, PASSWORD);
  return (
    <>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && (
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableHover}>
              <th>Navn</th>
              <th>Lokalnummer</th>
              <th>Kald besvaret</th>
            </tr>
            {data &&
              data.map((item) => (
                <tr className={styles.tableHover} key={item.Agent}>
                  <td className={styles.tdCenter}>{item.Name}</td>
                  <td className={styles.tdCenter}>{item.Agent}</td>
                  <td className={styles.tdCenter}>{item.Calls}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Agent;
