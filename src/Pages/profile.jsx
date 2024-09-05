import { useLogin } from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();

  return (
    <div>
      <h1>Profile Page</h1>
      username: {username}
    </div>
  );
};

export default ProfilePage;
