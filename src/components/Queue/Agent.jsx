import styles from "../Table.module.css";

const Agent = ({ data }) => {
  return (
    <>
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
