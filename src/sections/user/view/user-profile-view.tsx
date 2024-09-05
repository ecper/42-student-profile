import { User } from '@/interfaces/user';
import UserProfile from '../user-profile';
import { Container } from '@mui/material';
import PostView from '@/sections/posts/post-view';

type Props = {
  user: User;
};

export default function UserProfileView({ user }: Props) {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Container>
      <UserProfile user={user} />
      {user.userPosts.map((post, i) => (
        <PostView key={i} post={post} />
      ))}
    </Container>
  );
}
