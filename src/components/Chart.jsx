import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import CustomContext from "../Context/CustomContext";
import styles from "./Styles/Chart.module.css";

const Chart = () => {
  const { apiData } = useContext(CustomContext);

  return (
    <div className={styles.Chart}>
      {apiData && (
        <BarChart width={1250} height={400} data={apiData}>
          <Bar dataKey="Calls" fill="#31644a" />
          <CartesianGrid strokeDashArray="4 1 2" />
          <XAxis
            padding={{ right: 60 }}
            dataKey="QueueName"
            allowDataOverflow="true"
            interval="0"
            tickSize="12"
          />
          <YAxis />
          <Tooltip />
        </BarChart>
      )}
    </div>
  );
};

export default Chart;
