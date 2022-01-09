import UserInfo from '../../components/user_info/UserInfo';
import './profile.css';

export const Profile = () => {
  return (
    <div id="profile">
      <div id="cabecera-profile">
        <h1>Perfil</h1>
      </div>
      <div className="container user-info">
        <UserInfo></UserInfo>
      </div>
    </div>
  );
};
