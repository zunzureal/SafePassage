import axios from "axios";
import React, { useState} from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

function Search_bar() {
    const [prefix, setPrefix] = useState("");
    const [searchResult, setSearchResult] = useState([]);
  

  const fetchDataByPrefix = async (prefix) => {
    try {
      const response = await axios.get(
        "http://localhost:1510/apis/getDataByPrefix",
        {
          params: {
            prefix: prefix,
          },
        }
      );
      setSearchResult(response.data);
      console.log(response.data)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = async(e) => {
    const value = e.target.value;
    setPrefix(value);
    console.log(value)
    
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    fetchDataByPrefix(prefix);
  };

  const confirm = (id) => {
    Swal.fire({
      title: "ต้องการลบใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
      }
    });
  };

  const result = () => {
    return (
      <div>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID House
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                ID
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                Tel
              </th>
              <th scope="col" className="px-6 py-3">
                Manage
              </th>
            </tr>
          </thead>
          <tbody>
          {searchResult && searchResult.length > 0 ?
          (searchResult.map((data, index) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={index}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <Link to={`/house:${data.HouseNumber}`}>{data.HouseNumber}</Link>
              </th>
              <td className="px-6 py-4">
                <p>
                  {data.FirstName} {data.LastName}
                </p>
              </td>
              <td className="px-6 py-4 hidden lg:table-cell">
                <p>{data.ID_Owner}</p>
              </td>
              <td className="px-6 py-4 hidden lg:table-cell">{data.Tel}</td>
              <td className="px-6 py-4">
                <div className=" flex">
                  <button
                    className="text-m p-2 border-solid border-2 border-gray-100 rounded bg-[#ee4a4a] text-white hover:bg-red-700"
                    onClick={() => confirm(data.ID_Owner)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewblog="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                  <Link
                    className="text-m p-2 border-solid border-2 border-gray-100 rounded"
                    to={`/edit/${data.ID_Owner}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewblog="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </Link>
                </div>
              </td>
            </tr>
          ))):<tr><td className=" px-6 py-4 border-2">No data found</td>
          </tr>}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className=" flex w-screen h-screen ">
      <Navbar />
      <div className="w-full  justify-center items-center">
        <div className="relative overflow-auto w-full h-full">
          <form onSubmit={handleSubmit} className="flex items-center w-full p-10">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-5/6">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={prefix}
                name="prefix"
                onChange={handleChange}
                id="voice-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-24"
            >
              Search
            </button>
          </form>

          {result()}
          
        </div>
      </div>
    </div>
  );
}

export default Search_bar;
