import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Menu({ icon, name, path }) {
  const navigate = useNavigate();
  const [bgColor, setBgColor] = useState('white');

  const handleClick = () => {
    navigate(path);
    const purple = 'purple-200'; // Define purple color
    setBgColor(purple); // Change background color to purple when clicked
  };

  return (
    <div className=''>
      <button
      className={`flex x items-center w-4/5 px-5 py-6 cursor-pointer bg-${bgColor} active:bg-blue-100 hover:font-bold focus:font-bold border-none hover:transition duration-700 ease-in-out hover:border-2 hover:translate-x-6`}
      onClick={handleClick}
    >
      <span>{icon}</span>
      <span className="ml-3">{name}</span>
    </button>
    </div>
  );
}

export default Menu;
