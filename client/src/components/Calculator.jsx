import React from "react";
import { useState } from "react";
import Banner from "./Banner";
import Layout from "./Layout";
import { subjectList } from "./subjectList";
import { Link } from "react-router-dom";
import axios from "axios";

function Calculator() {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState({ subject: "", grade: "" });

  const handleChangeSubject = (e) => {
    e.preventDefault();
    setSubject({ ...subject, [e.target.name]: e.target.value });
  };

  const handleAddSubject = () => {
    setSubjects([...subjects, { index: subjects.length + 1, ...subject }]);
    setSubject({ subject: "", grade: "" });
  };

  const testResults = {
    marks: [
      {
        subject: "mathematics",
        grade: 71,
      },
      {
        subject: "english",
        grade: 65,
      },
      {
        subject: "life_orientation",
        grade: 54,
      },
      {
        subject: "business_studies",
        grade: 75,
      },
      {
        subject: "economics",
        grade: 80,
      },
      {
        subject: "accounting",
        grade: 90,
      },
      {
        subject: "home_language",
        grade: 54,
      },
    ],
  };

  const handleCalculate = async () => {
   try{
    const res = await axios.post("/", testResults);
    if(res.status === 200){
      window.location = "/results"
      localStorage.setItem("results", JSON.stringify(res.data));
    }
   }catch(err){console.log(err)}
  };


  return (
    <Layout>
      <Banner />

      <div className="py-12 px-4">
        <h1 className="text-center text-2xl md:text-5xl  font-bold mb-2 md:mb-8">
          Application <span className="text-primary">Point</span> Score
        </h1>
        <p className="text-center text-sm mb-12 md:text-lg">
          Calculate your aps, by simple listing all your subjects and grade.
          We'll tell you what is your aps across all the universities.
        </p>

        <div className="w-full bg-white rounded shadow-lg p-4 md:max-w-[728px] md:mx-auto">
          <table className="w-full border-separate border-spacing-4 ">
            <thead>
              <th className="text-start">#</th>
              <th className="text-start">Subject</th>
              <th className="text-start">Grade</th>
            </thead>
            <tbody>
              {subjects.length === 0 ? (
                <tr>
                  <td>
                    <p className="text-gray-300">Add your subjects </p>
                  </td>
                </tr>
              ) : (
                subjects.map((subject, index) => {
                  return (
                    <tr key={index}>
                      <td className="text-start">{subject.index}</td>
                      <td className="text-start">{subject.subject}</td>
                      <td className="text-start">{subject.grade}%</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
          <div className="flex gap-2 mt-16 mb-6">
            <div className="md:min-w-[450px]">
              <select
                className="border border-dark h-[42px] rounded px-4 py-2 max-w-[180px] md:max-w-[500px] md:w-full"
                name="subject"
                value={subject.subject}
                id=""
                onChange={handleChangeSubject}
              >
                <option value="">Select Subject</option>
                {subjectList.map((subject, i) => {
                  return (
                    <option key={i} value={subject}>
                      {subject}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="">
              <input
                type="text"
                className="border border-dark rounded px-2 py-2 max-w-[58px] "
                placeholder="%"
                name="grade"
                value={subject.grade}
                onChange={handleChangeSubject}
              />
            </div>
            <div className="">
              <button
                className="bg-dark w-[58px] h-[42px] border-none rounded text-white text-sm"
                onClick={handleAddSubject}
              >
                Add
              </button>
            </div>
          </div>
          <div className="w-full">
            <button
              disabled={subject.length < 6 ? true : false}
              onClick={handleCalculate}
              className="w-full bg-primary rounded py-2 px-4 text-white"
            >
              Calculate Aps
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Calculator;
