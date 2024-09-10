import { User } from "@/interfaces/user";
import UserProfile from "../user-profile";
import { Container, Divider } from "@mui/material";
import PostView from "@/sections/posts/post-view";

type Props = {
  user: User;
};

export default function UserProfileView({ user }: Props) {
  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <Container className="flex flex-col items-start">
      <UserProfile user={user} />
      <div className="w-full flex flex-col items-start" style={{width: 300}}>
        {user.userPosts.map((post, i) => (
          <div key={i}>
              <PostView key={i} post={post} />
              <Divider/>
          </div>
        ))}
      </div>
    </Container>
  );
}
