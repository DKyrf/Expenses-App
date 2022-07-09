import React from "react";
import "./Chart.css"
import ChartBar from "./ChartBar";

export default function Chart(props){

    const chartValues = props.yearChartData.map(el => el.value);
    const maxValue = Math.max(...chartValues);
    
    
    return(
        <div className="chart">
          {props.yearChartData.map(el => <ChartBar 
                key={el.label}
                label={el.label}
                value={el.value}
                max={maxValue}
            />
          )}
        </div>
    )
}