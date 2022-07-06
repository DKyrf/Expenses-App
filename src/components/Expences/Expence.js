import React, {useState} from "react";
import "./Expence.css"
import Card from "../UI/Card"

import NewExpence from "../NewExpence/NewExpence";
import { ExpenceFilter } from "./Filter/ExpenceFilter";
import { ExpencesList } from "./ExpencesList";
import ExpencesChart from "./ExpenceChart";




function Expence(props){

  const [year, setfilteredYear] = useState("2022")


  function filteredYear(selectedYear){
      setfilteredYear(selectedYear);
  }

  const filteredExpences = props.items.filter(el => (
    new Date(el.date).getFullYear().toString() === year))


    return (<div >

        <NewExpence 
          onSavedData = {props.newEntryData}
        />
        <Card className="expance__wrapper">

        <ExpencesChart 
          chartData = {filteredExpences}
        />

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