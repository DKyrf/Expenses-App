import React from "react";
import Card from "../UI/Card"
import ExpenceItem from "./ExpenceItem";

import "./Expence.css"
import NewExpence from "../NewExpence/NewExpence";




function Expence(props){



    return (<div >
        <NewExpence 
          newEntry = {props.entryData}
        />
        <Card className="expance__wrapper">
         { props.items.map((el, ind) => {
          return <ExpenceItem 
            key={ind}
            title={el.title}
            amount={el.amount}
            date={el.date}
          />
         })}
        </Card>

    </div>
    )
}

export default Expence