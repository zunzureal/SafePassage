import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import owner from "../assets/broker.png";
import home from "../assets/home.png";
import car from "../assets/parking.png";
import security from "../assets/policeman.png";
import staff from "../assets/staff.png";
import visitorImage from "../assets/visitors.png";
import Navbar from "../components/Navbar";
import Latest from "../components/Latest";
import "../css/Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();
  const [houseOwner, setHouseOwner] = useState("");
  const [visitor, setVisitor] = useState("");
  const [securityGuard, setSecurityGuard] = useState("");
  const [currentSecurityGuard, setCurrentSecurityGuard] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    axios.get("http://localhost:1510/apis/getData").then((res) => {
      setHouseOwner(res.data.houseOwner);
      setVisitor(res.data.visitor);
      setSecurityGuard(res.data.securityGuard);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:1510/apis/getSecurity").then((res) => {
      setCurrentSecurityGuard(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className=" flex h-screen w-screen">
      <Navbar />
      <div className=" h-screen  bg-slate-100 px-16 py-5 grid grid-cols-3 grid-row-10 w-full gap-5">
        <div className="p-5 bg-white  rounded-lg col-span-1  row-span-2">
          <div className=" flex items-center ">
            <img src={home} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">House</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{houseOwner}</span>
          </div>
          <div className=" flex justify-center">
            <span className="text-xl">หลัง</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={owner} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Owner</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{houseOwner}</span>
          </div>
          <div className="  flex justify-center">
            <span className=" text-xl ">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg row-span-4 col-span-3 ">
          <div className=" flex items-center">
            <img src={car} alt="" className=" w-12" />
            <span className="ml-5 text-xl ">Latest SCAN In</span>
          </div>
          <Latest />
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={visitorImage} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Visitor</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{visitor}</span>
          </div>
          <div className=" flex justify-center">
            <span className=" text-xl ">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-1 row-span-2">
          <div className=" flex items-center">
            <img src={staff} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">Security Guard</span>
          </div>
          <div className=" py-5 flex justify-center">
            <span className=" text-5xl font-bold">{securityGuard}</span>
          </div>
          <div className="flex justify-center">
            <span className="text-xl">คน</span>
          </div>
        </div>

        <div className="p-5 bg-white rounded-lg col-span-5 row-span-4">
          <div className=" flex items-center">
            <img src={security} alt="" className=" w-12" />
            <span className="ml-5 text-xl font-bold">
              Security guard at work now
            </span>
          </div>

          <div className=" flex mt-5 gap-x-5">
            {currentSecurityGuard.map((data, index) => (
              <div
                className=" flex items-center justify-center p-3 border-2 w-1/5 rounded-sm"
                key={index}
              >
                <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 6a.75.75 0 00-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 000-1.5h-3.75V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                <span className="ml-5 flex items-center justify-center">
                  <div>
                    
                  </div>
                  {data.SecurityGuardID} {data.FirstName} {data.LastName}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
