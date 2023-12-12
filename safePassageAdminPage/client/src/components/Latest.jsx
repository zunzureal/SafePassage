import React, { useState, useEffect } from "react";
import axios from "axios";
function Latest() {
  const [house_owner, setHouse_owner] = useState([]);
  const [visitor, setVisitor] = useState([]);
  const fetchData = async () => {
    await axios
      .get(`http://localhost:1510/apis/getLatest`)
      .then((response) => {
        setHouse_owner(response.data.houseOwner);
        setVisitor(response.data.visitor);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" flex justify-between  mt-5">
      <div className=" w-2/5 space-y-2">
        <p className=" font-extrabold text-lg">House Onwer</p>
        {house_owner.map((data, index) => (
          <div className="border-2 p-2 flex items-center rounded-md" key={index}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="ml-2 font-bold">{data.HouseNumber}</p>
          </div>
        ))}
      </div>

      <div className=" w-2/5 space-y-2">
        <p className="font-extrabold text-lg">Visitor go to</p>
        {visitor.map((data, index) => (
          <div className="border-2 p-2 flex items-center rounded-md" key={index}>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-500"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="ml-2 font-bold">{data.VisitAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Latest;
