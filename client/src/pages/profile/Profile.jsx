import UserInfo from "../../components/UserInfo";
import { ResourceLoader } from "../../components/ResourceLoader";

export const Profile = () => {
  return (
    <div id="profile">
      <div className="container">
        <ResourceLoader resourceUrl="/users.json" resourceName="users">
          <UserInfo></UserInfo>
        </ResourceLoader>
      </div>
    </div>
  );
};
