import React from "react";
import Card from "../UI/Card"


import "./ExpenceDate.css"


function ExpenceDate(props){
    const day = new Date(props.date).toLocaleString("en-US", {day: "2-digit"})
    const month = new Date(props.date).toLocaleString("en-US", {month:"long"})
    const year = new Date(props.date).getFullYear()

    return (
        <Card className="expance-date__wrapper">
            <div className="expance-date__month">{month}</div>
            <div className="expance-date__year">{year}</div>
            <div className="expance-date__day">{day}</div>
        </Card>
    )
}

export default ExpenceDate