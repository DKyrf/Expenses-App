import React from "react";
import Card from "../UI/Card"
import ExpenceDate from "./ExpenceDate";


import "./ExpenceItem.css"


function ExpenceItem(props){
    return (
        <Card className="expence__wrapper">
            <ExpenceDate date={props.date}/>
            <div className="expence-item">
              <h2 className="expence-item__title">{props.title}</h2>
              <div className="expence-item__amount">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenceItem