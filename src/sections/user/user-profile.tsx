import { ProfileImage } from "@/components/Images";
import { User } from "@/interfaces/user";
import { Card, Stack, Typography } from "@mui/material";
// import { motion } from "framer-motion";

type Props = {
  user: User;
};

export default function UserProfile({ user }: Props) {
  if (!user) {
    {
      {
      }
    }
    return <div>User not found</div>;
  }

  return (
    <Card
      sx={{
        width: 500,
        height: 400,
        m: 5,
        borderRadius: 10,
      }}>
      <Stack
        spacing={2}
        sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <Typography variant="h5"></Typography>
        {/* image */}
        <ProfileImage src={user.profileImg} alt={user.intra} />
        {/* intra name */}
        <Typography variant="h3">{user.intra}</Typography>
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
