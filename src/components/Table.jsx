import styles from "./Table.module.css";

const Table = ({ data }) => {
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
                                <tr
                                    className={styles.tableHover}
                                    key={item.Agent}
                                >
                                    <td>{item.Name}</td>
                                    <td>{item.Agent}</td>
                                    <td>{item.Calls}</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default Table;
