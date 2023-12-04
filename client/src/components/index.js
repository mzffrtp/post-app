import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutFunc = () => {
        localStorage.clear();
        navigate("/auth")
    }
    const openModal = () => {
        dispatch({
            type: "MODAL", payload: true
        })
        console.log("clicked open modal");
    }
    return (
        <div className='h-20 bg-indigo-600 flex justify-between items-center p-3'>
            <div className='text-white font-bold text-2xl cursor-poi
            '>Share Post</div>
            <div className='flex items-center space-x-5'>
                <input type='text' placeholder='Search ...' className='p-2 outline-none rounded-md' />
                <div
                    className='w-32 border p-2 rounded-md text-white cursor-pointer hover:font-bold hover:text-red-500 text-center'
                    onClick={openModal}
                >Creat post!</div>
                <BiLogOut
                    onClick={logoutFunc} size={25}
                    className='text-white cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar