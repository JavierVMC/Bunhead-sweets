import Member from "../../../components/Member";

import { useState, useEffect, useCallback } from "react";

import { RegularList } from "../../../components/RegularList";

const TeamMembers = () => {
  let [membersList, setMembersList] = useState([]);

  const fetchData = useCallback(() => {
    fetch("./members.json")
      .then((response) => response.json())
      .then((data) => {
        setMembersList(data);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <ul>
      <RegularList
        items={membersList}
        resourceName="member"
        itemComponent={Member}
      ></RegularList>
    </ul>
  );
};

export default TeamMembers;
