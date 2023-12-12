import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Background from '../assets/12.jpg'
import Swal from 'sweetalert2'
function Edit() {
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        HouseOwnerID: "",
        HouseNumber: "",
        Tel: "",
    });

    const navigate = useNavigate()

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(`${name} : ${value}`)
        console.log(form)
    };

    const { slug } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (slug) {
                    console.log(typeof slug);
                    const response = await axios.get(`http://localhost:1510/apis/getHouseOwnerById/${slug}`);
                    console.log(response.data)
    
                    // Check if the response data has the expected structure
                    if (response.data && response.data.HouseNumber && response.data.HouseOwnerID && response.data.FirstName && response.data.LastName && response.data.Tel) {
                        const { HouseNumber, HouseOwnerID, FirstName, LastName, Tel } = response.data;
                        setForm({ ...form, FirstName, LastName, HouseOwnerID, HouseNumber, Tel });
                    } else {
                        // Handle the case where the response data is not as expected
                        console.error("Invalid response data structure");
                    }
                }
            } catch (error) {
                alert(error);
                console.log(slug);
            }
        };
    
        fetchData();
    }, [slug]);
    


    const submit = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:1510/apis/updateHouseOwner/${slug}`, {
            idOwner: form.HouseOwnerID,
            firstName: form.FirstName,
            lastName: form.LastName,
            tel: form.Tel
            })
            .then((res) => {
                if (res.data.message === "update successfully") {
                    Swal.fire('Success', 'Insert ok', 'success');
                    setForm({
                        ...form,
                        HouseOwnerID: form.HouseOwnerID,
                        FirstName: form.FirstName,
                        LastName: form.LastName,
                        Tel: form.Tel,
                        HouseNumber :form.HouseNumber,
                    })
                    navigate('/dashboard')
                } else {
                    Swal.fire('Error', 'Please fill in all data', 'error');
                }

            })
    }


    return (
        <div className='flex justify-center h-screen items-center '>
            <div className=' flex w-9/12 justify-center h-4/5  shadow-2xl rounded-xl'>
                <div className='w-1/2 flex items-center'>
                    <div className=''>
                        <img src={Background} className='' />
                    </div>
                </div>
                <div className='w-1/2'>
                    <div className='flex justify-center  h-full w-full rounded-lg'>
                        <form onSubmit={submit} className=' flex flex-col items-center justify-center h-full w-3/4'>
                            <h1 className=' font-bold text-4xl mb-10'>New House Owner</h1>
                            <div className=' flex justify-between w-full'>
                                <div className="form-group mb-2">
                                    <label>first name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="FirstName"
                                        value={form.FirstName}
                                        onChange={handleInputChange}
                                        className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"

                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>last name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="LastName"
                                        value={form.LastName}
                                        onChange={handleInputChange}
                                        className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                    />
                                </div>
                            </div>
                            <div className="form-group mb-2 w-full">
                                <label>ID</label>
                                <br />
                                <input
                                    type="number"
                                    name="HouseOwnerID"
                                    value={form.HouseOwnerID}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>

                            <div className="form-group mb-2 w-full">
                                <label>House No.</label>
                                <br />
                                <input
                                    type="text"
                                    name="HouseNumber"
                                    value={form.HouseNumber}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>
                            <div className="form-group mb-4 w-full">
                                <label>Tell</label>
                                <br />
                                <input
                                    type="text"
                                    name="Tel"
                                    value={form.Tel}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>
                            <button
                                type='submit'
                                className="bg-blue-500 hover:bg-blue-700 border-none text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit;