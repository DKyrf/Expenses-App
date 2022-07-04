import React, {useState} from "react";
import "./Expence.css"
import Card from "../UI/Card"

import NewExpence from "../NewExpence/NewExpence";
import { ExpenceFilter } from "./Filter/ExpenceFilter";
import { ExpencesList } from "./ExpencesList";




function Expence(props){

  const [year, setfilteredYear] = useState("2022")


  function filteredYear(year){
      setfilteredYear(year);
  }

  const filteredExpences = props.items.filter(el => (
    new Date(el.date).getFullYear().toString() === year))


    return (<div >

        <NewExpence 
          onSavedData = {props.newEntryData}
        />
        <Card className="expance__wrapper">

        <ExpenceFilter 
          onChangeFilter={filteredYear}
          selected={year}
        />

        <ExpencesList 
          items={filteredExpences}
        />

        </Card>

    </div>
    )
}

export default Expence