import TeamMembers from './components/team_members/TeamMembers';
import './ourTeam.css';

const OurTeam = () => {
  return (
    <div className="container" id="ourTeam">
      <h1 className="text-center">Nuestro equipo</h1>
      <TeamMembers></TeamMembers>
    </div>
  );
};

export default OurTeam;
