import React, { useState } from "react";
import "./ExpenceForm.css"

function ExpenceForm(props){

  const [inputVal, setInputVal] = useState({
    id: "",
    title: "",
    amount: "",
    date: "",

  })

  function handleChanges(event){

    const checker = event.target.name;

    setInputVal((prev)=>{ 
       if(checker === "title"){
        return {
          ...prev,
          title: event.target.value,

        }
       }else if(checker === "amount"){
        return {
          ...prev,
          amount: Number(event.target.value),
        }
       }else if(checker === "date"){
        return {
          ...prev,
          date: event.target.value,
        }
       }
  })
  }

    function submitHandler(el){
      el.preventDefault(); 

      const expenceData = {
        title: inputVal.title,
        amount: inputVal.amount,
        date: new Date(inputVal.date),
      };

      props.onSendSubmittedData(expenceData);

      setInputVal({
        title:"",
        amount: "",
        date: ""
      })



    }


    return (
        <form onSubmit={submitHandler}>
          <div className="new-expence">
            <div className="expence-description">
              <label>Title:</label>
              <input 
              value={inputVal.title}
              name="title"
              type="text"
              onChange={handleChanges} 
              />
            </div>

            <div className="expence-description">
              <label>Amount:</label>
              <input 
              value={inputVal.amount}
              name="amount"
              type="number" 
              min="0.01" 
              step="0.01"
              onChange={handleChanges} 
              />
            </div>

            <div className="expence-description">
              <label>Date:</label>
              <input
              value={inputVal.date}
              name="date"
              type="date" 
              min="2020" 
              max="2022-12-31"
              onChange={handleChanges} 
              />
            </div>
          </div>

          <div className="new-expence__control">
            <button type="submit">Add expence</button>
          </div>
          
        </form>
    )
}

export default ExpenceForm