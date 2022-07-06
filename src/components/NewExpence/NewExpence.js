import React, {useState} from "react";
import ExpenceForm from "./ExpenceForm";
import "./NewExpence.css"

function NewExpence(props){


    return(
        <div className="new-entry">
            <ExpenceForm 
             onSendSubmittedData = {props.onSavedData}
            />
        </div>
    )
}

export default NewExpence