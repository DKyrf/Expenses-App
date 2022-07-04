import React, {useState} from "react";
import { ExpenceFilter } from "../Expences/Filter/ExpenceFilter";

import ExpenceForm from "../Expences/Form/ExpenceForm";
import "./NewExpence.css"

function NewExpence(props){




    return(
        <div className="new-expence">
            <ExpenceForm 
              onSendSubmittedData = {props.onSavedData}
            />
        </div>
    )
}

export default NewExpence