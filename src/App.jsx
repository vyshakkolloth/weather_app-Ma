import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/search";

function App() {
  const [weatherdata, setweatherdata] = useState({});
  const [imagee, setimagee] = useState("./rain.png")

  useEffect(() => {
    
    if(weatherdata){
      
      switch (weatherdata?.data?.weather[0]?.main) {
        case "Clear":
          setimagee("./clear.png")
          break;
        case "Rain":
          setimagee("./rain.png")
    
          break;
        case "Snow":
          setimagee("./snow.png")
    
          break;
        case "Clouds":
          setimagee("./cloud.png")
    
          break;
        case "Mist":
          setimagee("./mist.png")
          break;
        case "Haze":
          setimagee("./mist.png")
          break;
        default:
          setimagee("./404.png")
      }
    
     }
  }, [weatherdata])
  
  return (
    <>
      <div className=" flex justify-center h-screen align-middle items-center bg-[url('./bg.jpg')] bg-cover bg-center overflow-hidden">
        <div className="relative bg-white/30 w-[400px] group backdrop-blur-sm min-h-[100px]  p-5  border border-opacity-20 border-white rounded-lg text-white transition-all duration-600 ease-in-out">
          <Search data={setweatherdata} />

          {/* box */}

        <div className="transition-all duration-100 ease-in" >
          <div className="flex flex-col justify-center text-center ">
            
             
                <img src={imagee} alt="Weather Icon" className=" transition-all duration-100 ease-in
                
                w-3/5 mx-auto" />
                <p className="transition-all duration-100 ease-i temperature relative text-6xl font-bold leading-none mt-5 mb-2.5 ml-0">
                 {weatherdata?.data?.main.temp}<span className="absolute text-xl ml-1">C</span>
                </p>
                <p className="description text-lg font-medium capitalize transition-all duration-100 ease-i">{weatherdata?.data?.weather[0]?.description}</p>
              
            
          </div>
          <div className=" bottom-10 left-0 w-full px-5 flex">
                <div className="humidity flex items-center w-1/2 transform  pl-5 justify-start">
                  <i className="bx bx-water text-5xl mr-2"></i>
                  <div className="text">
                    <div className=" transform ">
                      <span className="inline-block text-lg font-medium">
                        {weatherdata?.data?.main?.humidity}%
                      </span>
                    </div>
                    <p className="text-sm font-medium">Humidity</p>
                  </div>
                </div>
                {/*  */}
                <div className="wind flex items-center w-1/2 transform  pr-5 justify-end">
                  <i className="bx bx-wind text-5xl mr-2"></i>
                  <div className="text">
                    <div className="info-wind transform ">
                      <span className="inline-block text-lg font-medium">
                        {weatherdata?.data?.wind.speed}Km/h
                      </span>
                    </div>
                    <p className="text-sm font-medium">Wind Speed</p>
                  </div>
                </div>
              </div>


          
        </div>
          {/* ---- */}
        </div>
      </div>
    </>
  );
}

export default App;
