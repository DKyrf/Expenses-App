import React, { useState } from "react";
import Expence from "./Expences/Expence";
import "../index.css"

function App(props){


    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        },
        { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        },
      ];

      const [exp, setExp] = useState(expenses)

      function getValue (newEntry){
        setExp((prev) => {
          return [
            ...prev,
            newEntry
          ]
        })


      }

console.log(exp);

    return (
        <div>
            <Expence 
            items={exp.sort((a, b) => b.date - a.date)}
            entryData={getValue}

            />
        </div>
    )
}

export default App