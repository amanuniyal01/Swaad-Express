import React from "react";
import { teamMembers } from "../utils/mockdata";

const Team = () => {
  return (
    <div className="team">
      <h2>Meet Our Team 👨‍🍳</h2>
      <div className="team-members" style={{ display: "flex", gap: "20px" }}>
        {teamMembers.map((member, index) => (
          <div key={index} className="member" style={{ textAlign: "center" }}>
            <img
              src={member.image}
              alt={member.name}
              style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
