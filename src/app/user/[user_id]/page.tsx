import React from "react";

import userData from "@/_mock/user";

type Props = {
  params: { user_id: string };
};

export const metadata = {
    title: "user",
}

export default function UserPage({ params }: Props) {
  const { user_id } = params;

  const user = userData[user_id];

  if (!user) {
	return <div>User not found</div>;
  }

  return (
  <div className='container mx-auto p-8'>
    <div className='flex flex-col items-center bg-white rounded-lg shadow-lg p-8'>
      {/* image */}
      <img
        src={user.profileImg}
        alt={`${user.intra}'profile`}
        width={150}
        height={150}
        className='rounded-full'
      />
      {/* intra name */}
      <h1 className='text-3xl ont-bold mt-4'>{user.intra}</h1>

      {/* Description */}
      <p className='text-gray-600 mt-2 text-center'>
        {user.profileDescription}
      </p>

      {/* posts */}
      <p className='text-gray-600 mt-2 text-center'>{user.posts}</p>
    </div>
  </div>
  );
}
