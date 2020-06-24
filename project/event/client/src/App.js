import React,{  useEffect } from 'react';


function App() {

  useEffect(("https://covidtracking.com/api/v1/states/daily.json")=>{
    fetch()
        .then(res => res.json())
        .then(res => {
            // setRates(res.rates)
          console.log(res)
          
        })
}, [])
  return (
    <div className="App">
        <p>
          Edit 
        </p>
    </div>
  );
}

export default App;
