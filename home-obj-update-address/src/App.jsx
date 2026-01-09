import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  const [data,setdata] = useState({
    name:"Burhan Ali",
    contact: "03112329374",
    address:{
      city: "Karachi",
      country: "Pakistan"
    }
  });

  const HandleName =(val)=>{
    data.name = val;

    setdata({...data});

  }

    const HandleCity =(city)=>{
      data.address.city = city;

      setdata({...data,address:{...data.address,city}})
  }

    const HandleCountry =(country)=>{
    setdata({...data,address:{...data.address,country}})
  }

    const HandleContact =(val)=>{
      data.contact = val;

      setdata({...data});
    
  }


  return (
    <>
      <div>
        <h1>Object State Though State - React JS</h1>
        <br />
        <label>Name: </label>
        <input onChange={(event)=>HandleName(event.target.value)} type="text" placeholder=" Enter your name" />
        <br /><br/>
        <label>City: </label>
        <input onChange={(event)=>HandleCity(event.target.value)} type="text" placeholder=" Enter your city" />

        <br /><br/>
        <label>Contact: </label>
        <input onChange={(event)=>HandleContact(event.target.value)} type="text" placeholder=" Enter your contact" />
        <br /><br/>
        <label>Country: </label>
        <input onChange={(event)=>HandleCountry(event.target.value)} type="text" placeholder=" Enter your country" />
        <br/><br/>

        <hr/>
        <h2>Details</h2>
        <p>Name: {data.name}</p>
        <p>City: {data.address.city} </p>
        <p>Contact: {data.contact} </p>
        <p>Country: {data.address.country} </p>

      </div>
    </>
  )
}

export default App
