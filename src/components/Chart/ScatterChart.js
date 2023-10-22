import React from 'react'
import { Chart } from "react-google-charts";

function ScatterChart({data}) {
    return (
        <div>
            <Chart
  width={'auto'}
  height={'800px'}
  chartType="Scatter"
  loader={<div>Loading Chart</div>}
  data={data}
  options={{
    // Material design options
    chart: {
      title: "Incident Report ",
      subtitle: 'Zone Aeb-23dfd-423kkk',
    },
    hAxis: { title: 'Incident Rate' },
    vAxis: { title: 'Time' },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
        </div>
    )
}

export default ScatterChart
