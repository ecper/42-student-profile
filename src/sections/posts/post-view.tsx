'use client';

import { useState } from 'react';
import { Post } from '@/interfaces/posts';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

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
  const loveIcon = love ? <FavoriteIcon onClick={() => setLove(!love)} /> : <FavoriteBorderIcon onClick={() => setLove(!love)} />

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
