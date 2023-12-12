import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import Background from '../assets/12.jpg'
function NewHouseOwner() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        id: "",
        house_number: "",
        tell: "",
    });

    const navigate = useNavigate()

    const { first_name, last_name, id, house_number, tell, } = form;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
        console.log(`${name} : ${value}`)
        console.log(form)
    };

    const submit = async (e) => {
        e.preventDefault();
        await axios.post(`http://localhost:1510/apis/addNew`, {
            houseNo: house_number,
            idOwner: id,
            firstName: first_name,
            lastName: last_name,
            tel: tell,
        })
            .then((res) => {
                if (res.data.message === "Insert successfully") {
                    Swal.fire('Success', 'Insert ok', 'success');
                    setForm({
                        first_name: "",
                        last_name: "",
                        id: "",
                        house_number: "",
                        tell: "",
                    })
                    navigate('/dashboard')
                } else {
                    Swal.fire('Error', 'Data duplicated', 'error');
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
                                        name="first_name"
                                        value={first_name}
                                        onChange={handleInputChange}
                                        className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"

                                    />
                                </div>
                                <div className="form-group mb-2">
                                    <label>last name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={last_name}
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
                                    name="id"
                                    value={id}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>

                            <div className="form-group mb-2 w-full">
                                <label>House No.</label>
                                <br />
                                <input
                                    type="text"
                                    name="house_number"
                                    value={house_number}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>
                            <div className="form-group mb-4 w-full">
                                <label>Tell</label>
                                <br />
                                <input
                                    type="text"
                                    name="tell"
                                    value={tell}
                                    onChange={handleInputChange}
                                    className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-bg-gray-200" id="inline-full-name"
                                />
                            </div>
                            <button
                                type='submit'
                                className="bg-blue-500 hover:bg-blue-700 border-none text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" >
                                Create New
                            </button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default NewHouseOwner