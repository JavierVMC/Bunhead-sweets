import UserInfo from '../../components/user_info/UserInfo';
import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';

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
