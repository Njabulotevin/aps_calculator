import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import Component from "./icons/component";

export default function Restults() {
  var { data, maxNumber, aggregate } = null;
  const [counter, setCounter] = useState(0);
  // const [maxNumber, setMaxNumber] = useState(0);

  // useEffect(()=>{
  //   setMaxNumber(JSON.parse(localStorage.getItem("results")).aps);
  //   console.log(JSON.parse(localStorage.getItem("results")).aps)
  // },[maxNumber])

  try {
    window.document.body.style.overflow = "scroll";
    data = JSON.parse(localStorage.getItem("results"));
    maxNumber = data.aps;
    aggregate = data.aggregate;
  } catch (err) {
    console.log(err);
  }

  useEffect(() => {
    try {
      if (maxNumber === null) {
        return null;
      } else {
        if (counter !== maxNumber) {
          const intervalID = setTimeout(() => {
            setCounter((prev) => prev + 1);
          }, 50);
          return () => clearInterval(intervalID);
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [counter, maxNumber]);

  try {
    return (
      <Layout>
        <Banner />

        <div className="mt-6 p-4 md:max-w-7xl md:mx-auto">
          <h1 className="text-center text-lg font-bold mb-2 md:mb-8 ">
            Congrats your APS is above the average!!
          </h1>
          <div className=" max-h-[320px] mb-6 mx-auto w-full md:w-auto mx-0 flex justify-center relative">
            <div className="absolute  top-[90px] md:top-[90px]">
              <h2 className="font-medium mb-4 text-[14px] text-center md:text-md md:font-semibold">
                Application Point Score
              </h2>
              <h1 className="text-7xl md:text-7xl text-center mb-4 font-bold">
                {counter}
              </h1>
              <h2 className="text-center font-medium md:text-lg md:font-semibold">
                Points
              </h2>
            </div>
            <Component className="w-[283px] md:w-[283px] h-full " />
          </div>
          <div className="bg-white rounded max-w-[342px] mx-auto shadow-xl relative py-6 px-6 text-center border border-2">
            <h4>Aggregate: {counter === maxNumber ? aggregate : "---"}%</h4>
            <p className="absolute bg-primary py-2 px-6 text-white rounded left-[103.01px] top-[55px]">
              Substential
            </p>
          </div>
          <div className="mt-20 mb-20">
            {counter === maxNumber && <Universities data={{}} />}
          </div>
        </div>
      </Layout>
    );
  } catch (err) {
    return (
      <Layout>
        <Banner />
        <div className="mt-6 p-4 md:max-w-7xl md:mx-auto flex justify-center items-center h-[100vh]">
          <h1 className="text-center text-lg font-bold mb-2 md:mb-8 ">
            Oops!! something went wrong
          </h1>
        </div>
      </Layout>
    );

    console.log(err);
  }
}

function Universities({ data }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-6 justify-between bg-white rounded shadow p-6"></div>
      <div className="flex flex-col gap-6 justify-between bg-white rounded shadow p-6">
        <div className=""></div>
        <h2 className="font-bold">University of the witwatersrand</h2>
        <div className="flex justify-between gap-4 md:justify-start text-lg">
          <h2>APS:</h2> <h2>32 points</h2>
        </div>

        <h2 className="font-bold">Notes:</h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          commodi suscipit culpa vero ea. Magnam, eius. Commodi sunt unde facere
          perferendis atque exercitationem quasi natus a, quam obcaecati facilis
          ratione?
        </p>
      </div>
    </div>
  );
}
