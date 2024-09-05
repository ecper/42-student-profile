import UserProfile from '../user-profile';
import { User } from '@/interfaces/user';

type Props = {
  userData: { [key: string]: User };
};

export default function UserProfileListView({ userData }: Props) {
  return (
    <div>
      <ul>
        {Object.entries(userData).map(([key, user]) => (
          <a key={key} href={`/user/${key}`}>
            <li>
              <UserProfile user={user} />
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}