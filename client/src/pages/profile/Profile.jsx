import UserInfo from '../../components/user_info/UserInfo';
import { ResourceLoader } from '../../components/resource_loader/ResourceLoader';
import './profile.css';

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
