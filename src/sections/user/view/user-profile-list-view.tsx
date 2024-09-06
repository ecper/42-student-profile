import UserProfile from "../user-profile";
import { User } from "@/interfaces/user";
import { Container } from "@mui/material";
import { FadeIn } from "@/components/animation";

type Props = {
  userData: { [key: string]: User };
};

export default function UserProfileListView({ userData }: Props) {
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      <ul>
        {Object.entries(userData).map(([key, user]) => (
          <a key={key} href={`/user/${key}`}>
            <li>
              <FadeIn>
                <UserProfile user={user} />
              </FadeIn>
            </li>
          </a>
        ))}
      </ul>
    </Container>
  );
}
