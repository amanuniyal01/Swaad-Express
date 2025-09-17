import React from "react";
import { teamMembers } from "../utils/mockdata";
import { FaLinkedin } from "react-icons/fa";






const Team = () => {
  return (
    <div className="team">
      <h2>Meet Our Team 👨‍🍳</h2>
      <div className="team-members " style={{ display: "flex", gap: "20px" }}>
        {teamMembers.map((member, index) => (
          <div key={index} className="member " style={{ textAlign: "center" }}>
            <img
              src={member.image}
              alt={member.name}
        style={{ borderRadius: "50%", width: "150px", height: "150px" }}
            />
            <h3 className="font-bold">{member.name}</h3>
            <p className="text-gray-200 font-[400]">{member.role}</p>
            <a
            className="text-center"
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
                 <FaLinkedin className="rounded-b-xl hover:text-blue-800" size={28} />

              
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
