import React from "react";
import { Chart } from "react-google-charts";

function GeoChart({data}) {
  return (
    <div>
      <Chart
        width={"500px"}
        height={"300px"}
        chartType="GeoChart"
        data={data}
        options = {{
            region: 'NG',
            displayMode:'markers',
            colorAxis: { colors: ['green', 'blue'] },
            magnifyingGlass:{enable: true, zoomFactor: 7.5},
            enableRegionInteractivity:true
        }}
        mapsApiKey={process.env.REACT_APP_GOOGLE_API}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
}

export default GeoChart;
