import React from "react";

import ExpenceForm from "../Expences/Form/ExpenceForm";
import "./NewExpence.css"

function NewExpence(props){


      
    return(
        <div className="new-expence">
            <ExpenceForm 
              submitted = {props.newEntry}

            />
        </div>
    )
}

export default NewExpence