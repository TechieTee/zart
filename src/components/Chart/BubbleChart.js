import React from "react";
import { Chart } from "react-google-charts";

function BubbleChart({
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
        chartType='BubbleChart'
        loader={<div>Loading Chart</div>}
        data={[chartDataPointLabel, ...data]}
        options={{
          ...chartOptions
        }}
        controls={controls}
        rootProps={{ "data-testid": "3" }}
      />
    </div>
  );
}

export default BubbleChart;


BubbleChart.defaultProps = {
  chartOptions:{
    height:600,
    title: "Incidents For Each State In Nigeria",
    hAxis: { title: "Life Expectancy" },
  vAxis: { title: "Fertility Rate" },
  bubble: {
    textStyle: {
      fontSize: 12,
      fontName: "Times-Roman",
      color: "green",
      bold: true,
      italic: true,
      auraColor: "none",
    },
  },
}
}


BubbleChart.propTypes = {

}