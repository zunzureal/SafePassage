import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";
function Management() {
  const [state,setData] = useState([]);

  const fetchData = async () => {
    await axios.get(`http://localhost:1510/apis/getAllData`)
      .then((response) =>{
        setData(response.data.houseOwner)
        console.log(response.data.houseOwner)
      } 
      )
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const confirm = (id) =>{
    Swal.fire({
      title: "ต้องการลบใช่หรือไม่",
      icon: "warning",
      showCancelButton: true,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id);
      }
    })
  }

  const deleteData = async (id)=>{
    await axios.delete(`http://localhost:1510/apis/deleteHouseOwner/${id}`,)
    .then((response)=>{
      Swal.fire("DELETED!", response.data.message, "success");
      fetchData();
    })
    .catch((err)=>{
      Swal.fire("Unsuccess!", response.data.message,"error");
    })
  }
  
  return (
    <div className=" flex w-screen h-screen ">
      <Navbar/>
      <div className="w-full  justify-center items-center">
      <div className="relative overflow-auto w-full h-full">
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
            {state.map((data) => (
              <tr
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                key={data.houseOwnerID}
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  <p>{data.HouseNumber}</p>
                </th>
                <td className="px-6 py-4"><p>{data.FirstName} {data.LastName}</p></td>
                <td className="px-6 py-4 hidden lg:table-cell">
                  
                  <p>{data.HO}</p>
                </td>
                <td className="px-6 py-4 hidden lg:table-cell">{data.Tel}</td>
                <td className="px-6 py-4">
                  
                <div className=" flex">
                      <button
                        className="text-m p-2 border-solid border-2 border-gray-100 rounded bg-[#ee4a4a] text-white"
                        onClick={()=> confirm(data.houseOwnerID)}
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
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
  
}

export default Management;
