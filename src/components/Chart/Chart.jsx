import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import Context from "../../store/Context";
import ChartContainer from "./UI/ChartContainer";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";

const Chart = () => {
  const { apiData } = useContext(Context);

  return (
    <ChartContainer>
      <Bar
        data={{
          labels: apiData?.map((data) => data.QueueName),
          datasets: [
            {
              label: "Besvaret",
              data: apiData?.map((data) => data.AnsweredCalls),
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
            {
              label: "Lagt på",
              data: apiData?.map((data) => data.Abandoned),
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: {
              beginAtZero: true,
            },
          },
        }}
      />
    </ChartContainer>
  );
};

export default Chart;
