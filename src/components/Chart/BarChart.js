import React from "react";
import { Chart } from "react-google-charts";

export default function BarChart({
  width,
  height,
  chartOptions,
  data,
  chartDataPointLabel,
  controls,
}) {
  return (
    
      <Chart
        chartType="ColumnChart"
        width="auto"
        height="auto"
        loader={<div>Loading Chart</div>}
        data={[chartDataPointLabel, ...data]}
        options={{
          height:600,
          title: " Incidents Statistics Of Abuja",
          chartArea: { width: "80%" },
          isStacked: false,
          hAxis: {
            title: "Year",
            minValue: 0,
          },
          vAxis: {
            title: "Total Incidents",
          },
          ...chartOptions,
        }}

        controls = {
          controls
        }
      />
   
  );
}


BarChart.defaultProps = {

}

BarChart.propTypes = {

}