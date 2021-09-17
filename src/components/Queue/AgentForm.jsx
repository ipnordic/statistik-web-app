import React from "react";
import styles from "../Table.module.css";

const AgentForm = ({ data }) => {
  return (
    <>
      <table className={styles.table}>
        <tbody>
          <tr className={styles.tableHeader}>
            <th>Navn</th>
            <th>Lokalnummer</th>
            <th>Kald Besvaret</th>
            <th>Gns. Samtaletid</th>
            <th>Kald Omstillet</th>
            <th>DND Tid (dagligt)</th>
            <th>Pause Tid (dagligt)</th>
          </tr>
          {data &&
            data.map((item) => (
              <tr className={styles.tableHover} key={item.Agent}>
                <td className={styles.tdCenter}>{item.Name}</td>
                <td className={styles.tdCenter}>{item.Agent}</td>
                <td className={styles.tdCenter}>{item.Calls}</td>
                <td className={styles.tdCenter}>{item.AverageCalltime}</td>
                <td className={styles.tdCenter}>{item.Transfers}</td>
                <td className={styles.tdCenter}>{item.DND}</td>
                <td className={styles.tdCenter}>{item.Pause}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default AgentForm;
