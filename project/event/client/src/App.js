import React,{  useEffect } from 'react';


function App() {

  useEffect(()=>{
    fetch("http://data.fixer.io/api/latest?access_key=")
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
