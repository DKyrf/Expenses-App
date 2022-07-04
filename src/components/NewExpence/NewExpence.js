import React, {useState} from "react";
import { ExpenceFilter } from "../Expences/Filter/ExpenceFilter";

import ExpenceForm from "../Expences/Form/ExpenceForm";
import "./NewExpence.css"

function NewExpence(props){

    const [year, setfilteredYear] = useState("2022")


    function filteredYear(year){
        setfilteredYear(year);
    }


    return(
        <div className="new-expence">
            <ExpenceFilter 
                onChangeFilter={filteredYear}
                selected={year}
            />
            <ExpenceForm 
              onSendSubmittedData = {props.onSavedData}
            />
        </div>
    )
}

export default NewExpence