import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "../Table.module.css";

const url =
  "https://api-prod01.ipnordic.dk/api/Statistics/Queue/v2/Period?startDate=2021-09-15&endDate=2021-09-16&company=2776&queue=1500";

const USERNAME = process.env.REACT_APP_API_USERNAME;
const PASSWORD = process.env.REACT_APP_API_PASSWORD;

const Period = () => {
  const { data, loading, error } = useFetch(url, USERNAME, PASSWORD);

  return (
    <>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && (
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableHover}>
              <th>Kønavn</th>
              <th>Kønummer</th>
              <th>Kald</th>
              <th>Besvaret kald</th>
              <th>Avg. Calltime</th>
            </tr>
            {data &&
              data.map((item) => (
                <tr className={styles.tableHover} key={item.QueueExtension}>
                  <td className={styles.tdCenter}>{item.QueueName}</td>
                  <td className={styles.tdCenter}>{item.QueueExtension}</td>
                  <td className={styles.tdCenter}>{item.Calls}</td>
                  <td className={styles.tdCenter}>{item.AnsweredCalls}</td>
                  <td className={styles.tdCenter}>
                    {item.AverageCalltime === null
                      ? "N/A"
                      : item.AverageCalltime}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Period;
