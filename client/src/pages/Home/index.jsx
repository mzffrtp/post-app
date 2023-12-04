import React from 'react';
import { useSelector } from 'react-redux';
import PostCard from '../../components/homePage/postCard';

const HomePage = () => {
    const { posts } = useSelector(state => state.post);
    
    return (
        <div className="flex items-center m-5 flex-wrap mt-10 z-100">
            {posts?.map((post, i) => (
                <PostCard key={i} post={post} />
            ))}
        </div>
    );
};

export default HomePage;
