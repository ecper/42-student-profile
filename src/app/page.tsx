"use client";

import Image from 'next/image';
import { useState } from 'react';

interface ProfileData {
  name: string;
  bio: string;
  email: string;
  avatarUrl: string;
}

export default function Profile(){
  const [profile] = useState<ProfileData>({
    name: 'Fumito Hoshina',
    bio: 'I am a NEET engineer with free time.',
    email: 'bungmailcom',
    avatarUrl: '',
  });

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col items-center bg-white rounded-lg shadow-lg p-8">
        {/* プロフィール画像*/}
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name}'s avatar`}
          width={150}
          height={150}
          className="rounded-full"
        />
         {/* 名前 */}
         <h1 className="text-3xl font-bold mt-4">{profile.name}</h1>

        {/* バイオ */}
        <p className="text-gray-600 mt-2 text-center">{profile.bio}</p>

        {/* 連絡先 */}
        <a href={`mailto:${profile.email}`} className="mt-4 text-blue-500 underline">
          {profile.email}
        </a>
      </div>
    </div>
  );
}
