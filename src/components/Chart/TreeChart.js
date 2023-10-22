import React from 'react'
import { Chart } from "react-google-charts";


function TreeChart({data}) {
    return (
        <div>
            <Chart
  width={'auto'}
  height={'600px'}
  chartType="TreeMap"
  loader={<div>Loading Chart</div>}
  data={data}
  options={{
    minColor: '#f00',
    midColor: '#ddd',
    maxColor: '#0d0',
    headerHeight: 15,
    fontColor: 'black',
    showScale: true,
    generateTooltip: (row, size, value) => {
      return (
        '<div style="background:#fd9; padding:10px; border-style:solid"> ' +
        value +
        '</div>'
      )
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
        </div>
    )
}

export default TreeChart
