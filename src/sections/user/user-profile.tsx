import ProfileImage from '@/components/ProfileImage';
import { User } from '@/interfaces/user';
import { Card, Stack, Typography } from '@mui/material';

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Card>
      <Stack
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <Typography variant='h5'>Profile</Typography>
        {/* image */}
        <ProfileImage src={user.profileImg} intra={user.intra} />
        {/* intra name */}
        <Typography variant='h3'>{user.intra}</Typography>
        {/* Description */}
        <Typography>Des: {user.profileDescription}</Typography>

        {/* posts */}
        {/* <p className='text-gray-600 mt-2 text-center'>
          {user.userPosts.map((post, i) => (
            <PostView key={i} post={post} />
          ))}
        </p> */}
      </Stack>
    </Card>
  );
}
