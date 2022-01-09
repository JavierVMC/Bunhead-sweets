import TeamMembers from './components/team_members/TeamMembers';
import './ourTeam.css';

const OurTeam = () => {
  return (
    <div id="ourTeam">
      <div id="cabecera-team">
        <h1 className="text-center">Nuestro equipo</h1>
      </div>
      <div className="container" id="members-container">
        <TeamMembers></TeamMembers>
      </div>
    </div>
  );
};

export default OurTeam;
