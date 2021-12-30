const Member = ({ member }) => {
  return (
    <li className="member row">
      <div className="col-12 col-md-3">
        <img
          src={member.image}
          alt={member.name}
          className="img-fluid efectoCSS3"
        ></img>
      </div>
      <div className="col-12 col-md-9">
        <h3>{member.name}</h3>
        <p>{member.carrier}</p>
        <p>{member.description}</p>
      </div>
    </li>
  );
};

export default Member;
