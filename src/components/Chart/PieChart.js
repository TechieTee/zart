import React from "react";
import { Chart } from "react-google-charts";

function PieChart({ width,
  height,
  chartOptions,
  data,
  chartDataPointLabel,
  controls, }) {
  return (
    <div>
      <Chart
        width={width}
        height={height}
        chartType="PieChart"
        loader={<div> Loading Chart </div>}
        data={[
          chartDataPointLabel,
          ...data]}
        options={{
          title: "My Daily Activities",
          height:600,
          
          ...chartOptions,
        }}
        controls = {controls}
      />
    </div>
  );
}

export default PieChart;
