import React from "react";
import "./ExpencesList.css"

import ExpenceItem from "./ExpenceItem";

export const ExpencesList = props => {

    let content = <h3 className="no_expences">Found no expences.</h3>

    if(props.items.length > 0){
      content = props.items.map(el => (
         <ExpenceItem 
          key={el.id}
          title={el.title}
          amount={el.amount}
          date={el.date}
        />
      ))
    }
  

    return (
      <ul>
         <li>{content}</li>
      </ul>
    )
}

