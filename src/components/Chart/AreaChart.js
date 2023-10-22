import React from 'react'
import { Chart } from "react-google-charts";
import PropTypes from 'prop-types';

function AreaChart({width,height,chartOptions,data,chartDataPointLabel,controls}) {
    return (
        <div>
            <Chart 
              width={width}
              height={height}
              chartType="AreaChart"
              loader={<div>Loading Chart</div>}
              data={[
                chartDataPointLabel 
                ,...data
              ]}
              options={{
                isStacked: false,
                legend: { position: 'top', maxLines: 3 },

                ...chartOptions
              }}

              controls = {controls}
              rootProps={{ 'data-testid': '2' }}
            
            
            />
        </div>
    )
}

export default AreaChart

AreaChart.defaultProps = {
  data:[],
  chartDataPointLabel:[],
  chartOptions:{   
    height: 600,
    title:'Area Chart',
    legend:{position:'right',maxLine:3},
    isStacked:true,
    vAxis: { minValue: 0 ,maxValue:1000,titleTextStyle:{color:"#000"},title:'title',viewWindow:{min:0,max:2000},ticks:[0,250,500,750,1000,1250,1500,1750,2000]},
    hAxis : {   }
  },
  width:"100%",
  height:"100%",
  controls: []
}

AreaChart.propTypes = {
    data:PropTypes.array.isRequired,
    chartOptions:PropTypes.object,
    chartDataPointLabel:PropTypes.array.isRequired,
    width:PropTypes.string,
    height:PropTypes.string,
    controls:PropTypes.array
}

