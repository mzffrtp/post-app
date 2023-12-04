import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { GrUpdate } from "react-icons/gr"
import { useDispatch } from 'react-redux';
import { updatedPostAction } from '../../redux/actions/postActions';
import { deletePostAction } from '../../redux/actions/postActions';

const PostCard = ({ post }) => {
    const dispatch = useDispatch();

    const deletePostFunc = (id) => {
        dispatch(deletePostAction(id))
        alert("Post will be deleted!")
    };
    const updatePostFunc = (id) => {
        dispatch({ type: "MODAL", payload: { open: true, updateId: id } })
        dispatch(updatedPostAction(id))
    };

    return (
        <div className='w-2/4 relative border p-3 rounded-md bg-gray-50 m-5'>
            <div className='font-bold text-xl'>{post?.title}</div>
            <div className='text-gray-700 text-sm'>{post?.description}</div>

            <div className='flex items-center justify-between mt-4'>
                <span className='text-xs text-gray-500'>{post?.user}</span>
                <span className='text-xs text-gray-500'>{(post?.date)?.substring(0, 10)}</span>
            </div>
            <div className='absolute top-0 right-0 flex items-center space-x-5 m-2'>
                <AiOutlineDelete
                    onClick={() => deletePostFunc(post._id)}
                    size={23} className='bg-red-500 rounded-full text-white p-1 cursor-pointer' />
                <GrUpdate
                    onClick={() => updatePostFunc(post._id)}
                    size={23} className='bg-red-500 rounded-full text-white p-1 cursor-pointer' />

            </div>


        </div>
    )
}

export default PostCard;
