import React from 'react'
import { Chart } from "react-google-charts";

function TableChart({data}) {
    return (
        <div>
            <Chart
  width={'auto'}
  height={'800px'}
  chartType="Table"
  loader={<div>Loading Chart</div>}
  data={data}
  options={{
    title:"List Of Parties Involved",
    showRowNumber: false,
  }}
  rootProps={{ 'data-testid': '1' }}
/>
        </div>
    )
}

export default TableChart
