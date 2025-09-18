import React from "react";
import { teamMembers } from "../utils/mockdata";
import { FaLinkedin } from "react-icons/fa";

const Team = () => {
  // A fallback placeholder image
  const fallbackImg = "https://placehold.co/150x150?text=No+Image";

  return (
    <div className="team py-12 bg-orange-50">
      <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team 👨‍🍳</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <img
              src={member.image || fallbackImg}
              alt={member.name}
              onError={(e) => (e.currentTarget.src = fallbackImg)}
              className="w-36 h-36 rounded-full object-cover mx-auto shadow-sm"
            />
            <h3 className="font-bold mt-4">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 hover:text-blue-700"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
