import { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Swal from "sweetalert2";

function Security() {
  const [data,setData] = useState([]);

  const fetchData = async () => {
    await axios.get(`http://localhost:1510/apis/getAllData`)
      .then((response) =>{
        setData(response.data.securityGuard)
        console.log(response.data.securityGuard)
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
                ID seg
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3 hidden lg:table-cell">
                phone number
              </th>
            </tr>
          </thead>
          <tbody>
            
                
                {data.map((data,index) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={index}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <p>{data.SecurityGuardID}</p>
                      </th>
                      <td className="px-6 py-4"><p>{data.FirstName} {data.LastName}</p></td>
                      <td className="px-6 py-4 hidden lg:table-cell">
                        
                        <p>{data.Tel}</p>
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

export default Security;
