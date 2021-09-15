import React from "react";
import styles from "../Table.module.css";

const Period = ({ data }) => {
  return (
    <>
      <>
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
    </>
  );
};

export default Period;
