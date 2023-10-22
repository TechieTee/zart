import React from "react";
import { Chart } from "react-google-charts";

function LineChart({
  width,
  height,
  chartOptions,
  data,
  chartDataPointLabel,
  controls,
}) {
  return (
    <div>
      <Chart
        width={width}
        height={height}
        chartType='LineChart'
        loader={<div>Loading Chart</div>}
        data={[chartDataPointLabel, ...data]}
        options={{
          hAxis: {
            title: "Time",
          },
          vAxis: {
            title: "Conviction Rate",
          },
          series: {
            1: { curveType: "function" },
          },
          ...chartOptions,
        }}
        controls={controls}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}

export default LineChart;

LineChart.defaultProps = {};

LineChart.propTypes = {};
