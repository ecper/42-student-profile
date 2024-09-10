'use client';

import { useState } from 'react';
import { Post } from '@/interfaces/posts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { motion } from "framer-motion";
import VisibilityIcon from '@mui/icons-material/Visibility';

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
        1.3
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
    <div className='container'>
      <div className='flex flex-col items-center bg-white p-8'>
        {month} {day}
        {/* Description */}
        <p className='text-gray-600 mt-2 text-center'>{post.description}</p>
        {/* Metadata */}
        <div className='flex' style={{width: "100%", justifyContent: "space-around", marginTop: "1.5rem"}}>   
          <div className='flex'>
            {loveIcon}
            <div style={{marginLeft: "8px"}}>{post.loveNum ?? 0}</div>
          </div>
          <div className='flex'>
            <motion.div
              animate={{
                scale: [
                  1.0,
                  1.1,
                  1.0
                ],
                transition: {
                  repeat: Infinity,
                  repeatDelay: 3
                }
              }}
            >
              <VisibilityIcon />
            </motion.div>
            
            <div style={{marginLeft: "8px"}}>{post.viewNum ?? 0}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
