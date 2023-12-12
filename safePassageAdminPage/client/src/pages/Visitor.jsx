import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DateRangePicker } from "rsuite";
import Navbar from "../components/Navbar";
import "../pages/Date.css";
function Visitor() {
  const [state, setData] = useState([]);
  const [date, setDate] = useState([]);
  const [res, setRes] = useState([]);

  const formatDate = async (dateArray) => {
    if (dateArray && dateArray.length === 2) {
      const startDate = moment(dateArray[0]).format("YYYY-MM-DD HH:mm:ss");
      const endDate = moment(dateArray[1]).format("YYYY-MM-DD HH:mm:ss");

      try {
        const response = await axios.post(
          `http://localhost:1510/apis/search_date_visitor`,
          {
            start: startDate,
            end: endDate,
          }
        );
        setRes(response.data[0]);
        console.log(response.data[0])
        console.log(startDate,endDate)
      } catch (err) {
        console.error(err);
        alert("Error fetching data");
      }
    }
  };
  
  useEffect(() => {
    fetchData();
    formatDate(date);
  }, [date]);

  const fetchData = async () => {
    await axios
      .get(`http://localhost:1510/apis/getAllData`)
      .then((response) => {
        setData(response.data.visitor);
        console.log(response.data.visitor);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const search = ()=>{
    return (
      <>
        {res.map((data, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                  >
                    <Link to={`/detail/${data.VisitorID}`}>
                     <p className=" hover:text-blue-500 hover:font-bold">{data.LicenseTemplate}</p>
                    </Link>
                  </th>
                  <td className="px-6 py-4">
                    <p>{data.Type}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {data.EntryTime === null ?<p>-</p> :<p>{data.EntryTime}</p>}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                  {data.ExitTime === null ?<p>-</p> :<p>{data.ExitTime}</p>}
                  </td>
                  <td className="px-6 py-4">
                  {data.VisitAt === null ?<p>-</p> :<p>{data.VisitAt}</p>}
                  </td>
                </tr>
              ))}
              </>
    )
  }
  return (
    <div className=" flex w-screen h-screen ">
      <Navbar />
      <div className="w-full  justify-center items-center">
        
        <div className="relative overflow-auto w-full h-full">
        <DateRangePicker placeholder="Select Date Range"
          format="yyyy-MM-dd HH:mm:ss"
          ranges={[]}
          onOk={(value) => setDate(value)
          }
        />
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  License Template
                </th>
                <th scope="col" className="px-6 py-3">
                  type
                </th>
                <th scope="col" className="px-6 py-3">
                  entry time
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  exit time
                </th>
                <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                  access by
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(res) && res.length > 0 ? search() :state.map((data, index) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={index}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white cursor-pointer"
                  >
                    
                      <p className=" hover:text-blue-500 hover:font-bold">{data.LicenseTemplate}</p>
                    
                  </th>
                  <td className="px-6 py-4">
                    <p>{data.Type}</p>
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                    {data.EntryTime === null ?<p>-</p> :<p>{data.EntryTime}</p>}
                  </td>
                  <td className="px-6 py-4 hidden lg:table-cell">
                  {data.ExitTime === null ?<p>-</p> :<p>{data.ExitTime}</p>}
                  </td>
                  <td className="px-6 py-4">
                  {data.VisitAt === null ?<p>-</p> :<p>{data.VisitAt}</p>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Visitor;
