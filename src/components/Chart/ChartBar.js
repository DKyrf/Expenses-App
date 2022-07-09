import React from "react";
import "./ChartBar.css"

export default function ChartBar(props){

    let bar = "0%"

    if(props.max > 0){
        bar = Math.floor((props.value * 100) / props.max) + "%"
    }
    
    return(
        <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{height: bar}}
        ></div>
      </div>
      <div className='chart-bar__label'>{props.label}</div>
    </div>
    )
}