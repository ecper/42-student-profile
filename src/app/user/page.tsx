import userData from '@/_mock/user';
import UserProfileListView from '@/sections/user/view/user-profile-list-view';

export default function UserListPage() {
  return <UserProfileListView userData={userData} />;
}
