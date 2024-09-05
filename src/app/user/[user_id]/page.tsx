import React from 'react';

import userData from '@/_mock/user';
import UserProfileView from '@/sections/user/view/user-profile-view';

type Props = {
  params: { user_id: string };
};

export const metadata = {
  title: 'user',
};

export default function UserPage({ params }: Props) {
  const { user_id } = params;
  const user = userData[user_id];
  return <UserProfileView user={user} />;
}
