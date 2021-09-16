import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "../Table.module.css";

const Period = ({ statType, company, queue, startDate, endDate }) => {
  const { data, loading, error } = useFetch(
    statType,
    startDate,
    endDate,
    company,
    queue
  );

  return (
    <>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {data && (
        <table className={styles.table}>
          <tbody>
            <tr className={styles.tableHeader}>
              <th>Kønavn</th>
              <th>Kønummer</th>
              <th>Kald</th>
              <th>Besvaret kald</th>
              <th>Omstillet</th>
              <th>Avg. Calltime</th>
              <th>Frafald</th>
              <th>Gns. Ventetid</th>
              <th>Maks Ventetid</th>
            </tr>
            {data &&
              data.map((item) => (
                <tr className={styles.tableHover} key={item.QueueExtension}>
                  <td className={styles.tdCenter}>{item.QueueName}</td>
                  <td className={styles.tdCenter}>{item.QueueExtension}</td>
                  <td className={styles.tdCenter}>{item.Calls}</td>
                  <td
                    className={
                      item.AnsweredCalls === null
                        ? styles.tdNA
                        : styles.tdCenter
                    }
                  >
                    {item.AnsweredCalls === null ? "N/A" : item.AnsweredCalls}
                  </td>
                  <td
                    className={
                      item.Transfers === null ? styles.tdNA : styles.tdCenter
                    }
                  >
                    {item.Transfers === null ? "N/A" : item.Transfers}
                  </td>
                  <td
                    className={
                      item.AverageCalltime === null
                        ? styles.tdNA
                        : styles.tdCenter
                    }
                  >
                    {item.AverageCalltime === null
                      ? "N/A"
                      : item.AverageCalltime}
                  </td>
                  <td
                    className={
                      item.Abandoned === null ? styles.tdNA : styles.tdCenter
                    }
                  >
                    {item.Abandoned === null ? "N/A" : item.Abandoned}
                  </td>
                  <td
                    className={
                      item.AverageHoldtime === null
                        ? styles.tdNA
                        : styles.tdCenter
                    }
                  >
                    {item.AverageHoldtime === null
                      ? "N/A"
                      : item.AverageHoldtime}
                  </td>
                  <td>{item.MaxHoldtime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Period;
