import React, { useState } from 'react'
import { AiOutlineClose } from "react-icons/ai"
import { useDispatch } from 'react-redux'

const PostCreatModal = () => {
    const [postData, setPostData] = useState({ user: "", title: "", description: "" })
    const dispatch = useDispatch()
    const onChangeFunc = (e) => {
        setPostData({ ...postData, [e.target.name]: e.target.value })
    }
    return (
        <div className='w-full h-screen bg-opacity-50 bg-black flex justify-center items-center'>
            <div className='bg-white w-1/3 p-2 rounded-md'>
                <div className='flex items-center justify-between cursor-pointer'
                    onClick={() => { dispatch({ type: "MODAL", payload: false }) }}>
                    <h1 className='font-bold text-2xl text-center'>Post Share</h1>
                    <AiOutlineClose size={25} />
                </div>
                <div className='flex flex-col my-4 space-y-3 '>
                    <input type='text' placeholder='User' className='input-style'
                        value={postData.user} name="user" onChange={onChangeFunc} />
                    <input type='text' placeholder='Title' className='input-style'
                        value={postData.title} name="title" onChange={onChangeFunc} />
                    <input type='text' placeholder='Description' className='input-style'
                        value={postData.description} name="description" onChange={onChangeFunc} />
                </div>
                <div className='w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-700 rounded-md'>Share</div>
            </div>
        </div>
    )
}

export default PostCreatModal