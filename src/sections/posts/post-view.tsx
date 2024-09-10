'use client';

import { useState } from 'react';
import { Post } from '@/interfaces/posts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion";

type Props = {
  post: Post;
};

export default function PostView({ post }: Props) {
  const [love, setLove] = useState<boolean>(false);

  if (!post) {
    return <div>Post not found</div>;
  }

  const month = post.uploadedAt.toLocaleString('default', { month: 'long' });
  const day = post.uploadedAt.getDate();

  const loveIcon = love ? 
    <motion.div animate={
    { 
      scale: [
        1.5
      ],
      rotateZ: [
        360,
        0
      ],
      transition: {duration: 0.3}
    }}>
        <FavoriteIcon sx={{color: "pink"}} onClick={() => setLove(!love)} /> 
    </motion.div> : 
    <motion.div animate={
    { 
      scale: [
        1.3,
        1
      ],
      rotateZ: [
        0,
        360
      ],
      transition: {duration: 0.3}
    }}>
      <FavoriteBorderIcon sx={{color: "pink"}} onClick={() => setLove(!love)} />
    </motion.div>

  return (
    <div className='container mx-auto p-8'>
      <div className='flex flex-col items-center bg-white p-8'>
        {month} {day}
        {/* Description */}
        <p className='text-gray-600 mt-2 text-center'>{post.description}</p>
        <div className='flex mt-5'>   
          {loveIcon}
        </div>
      </div>
    </div>
  );
}
