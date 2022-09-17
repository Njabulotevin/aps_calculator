import React,{useState, useEffect} from "react";
import Component from "./icons/component";
import { Link } from "react-router-dom";

function Hero() {
  const [counter, setCounter] = useState(0);
  const maxNumber = 36;

  const [time, setTime] = useState(50);


  useEffect(()=>{
   if(counter !== maxNumber){
    const intervalID = setTimeout(()=>{setCounter((prev) => prev + 1)}, time);
    if(counter === maxNumber - 5){
      setTime(100)
    }
    return () => clearInterval(intervalID);
   }
    
  },[counter])
  return (
    <div className="flex flex-col-reverse p-6 md:flex-row md:max-w-7xl md:mx-auto justify-between md:mt-10  md:items-end">
      <div className="">
        <h1 className="text-center text-2xl md:text-5xl md:text-start font-bold mb-2 md:mb-8">
          Application <span className="text-primary">Point</span> Score
        </h1>
        <p className="text-center text-sm mb-12 md:text-start md:text-lg">
          We help you calculate your APS in just one click.
        </p>
        <div className="md:flex gap-6">
          <Link to="/calculator">
            <button className="bg-dark py-4 text-white text-sm px-12 w-full mb-4 block rounded md:max-w-[283px] md:inline">
              Get Started
            </button>
          </Link>
          <Link to="/calculator">
            {" "}
            <button className="bg-transperant py-4 border border-dark text-dark text-sm px-12 w-full mb-4 block rounded md:max-w-[283px] md:inline">
              Learn More
            </button>
          </Link>
        </div>
      </div>
      <div className=" max-h-[320px] mb-6 mx-auto w-full md:w-auto mx-0 flex justify-center relative">
        <div className="absolute  top-[90px] md:top-[120px]">
          <h2 className="font-medium mb-4 text-center md:text-lg md:font-semibold">
            Application Point Score
          </h2>
          <h1 className="text-7xl md:text-8xl text-center mb-4 font-bold">
            {counter}
          </h1>
          <h2 className="text-center font-medium md:text-lg md:font-semibold">
            Points
          </h2>
        </div>
        <Component className="w-[90%] h-full " />
      </div>
    </div>
  );
}

export default Hero;
