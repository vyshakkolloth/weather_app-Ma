import React, { useState } from 'react'
import { PiMapPinFill } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
import axios from 'axios';
const search = ({data}) => {

const [city, setcity] = useState("")

let clicks=()=>{
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_REACT_APP_API_KEY}`)
    .then((res)=>{
        data({code:200 ,data:res.data})
    })
    .catch((err)=>{console.log(err.message)
  data({code:404})}
)
    .finally(function () {
      // always executed
    });
}

  return (
   <>
   <div className=' group-focus:shadow-md relative w-full h-14 flex items-center '>
                {/* <IconContext.Provider > */}
                  <span className='pl-2'> <PiMapPinFill /></span>
                  <input type="text"  placeholder="Enter your location" value={city} onChange={(e)=>{setcity(e.target.value)}} className='absolute w-full h-full bg-transparent border border-opacity-20 border-white outline-none rounded-lg text-lg font-medium uppercase px-10 placeholder-white'/>
                 
                  <button onClick={clicks} className="absolute  right-0 w-10 h-full bg-transparent border-none outline-none text-2xl text-white cursor-pointer">
                  <span> <FaSearch /> </span>
                   </button>

                  {/* </IconContext.Provider>; */}
                </div>
    </>
  )
}

export default search