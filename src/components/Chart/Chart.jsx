import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import Context from "../../store/Context";
import "./Chart.css";
const Chart = () => {
  const { apiData } = useContext(Context);

  return (
    <div className="ChartContainer">
      {apiData && (
        <BarChart width={1200} height={280} data={apiData}>
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
