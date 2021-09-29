import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import CustomContext from "../../Context/CustomContext";

const Chart = () => {
  const { apiData } = useContext(CustomContext);

  console.log(apiData);
  return (
    <div>
      {apiData && (
        <BarChart width={1200} height={400} data={apiData}>
          <Bar dataKey="Calls" fill="#31644a" />
          <CartesianGrid strokeDasharray="1 1" />
          <XAxis padding={{ right: 20 }} dataKey="QueueName" />
          <YAxis />
          <Tooltip />
        </BarChart>
      )}
    </div>
  );
};

export default Chart;
