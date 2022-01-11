import React, { useContext } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import Context from "../../store/Context";
import ChartContainer from "./UI/ChartContainer";

const Chart = () => {
  const { apiData } = useContext(Context);

  return (
    <ChartContainer>
      {apiData && (
        <BarChart
          width={1200}
          height={280}
          data={apiData.filter(
            (item) =>
              item.QueueExtension >= 151210 && item.QueueExtension < 151265
          )}
        >
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
    </ChartContainer>
  );
};

export default Chart;
