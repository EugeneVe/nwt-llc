import React from "react";
import PersonalCard from "./PersonalCard/PersonalCard";
import PersonalInfo from "./PersonalCard/PersonalData.json";
import "./Team.scss";

const Team = () => {
  return (
    <div className="team-wrapper" name="team">
      <div className="team-label">
        <div className="pre-label">our</div>
        <div className="after-label">team</div>
      </div>
      <div className="content-wrapper">
        <div className="team-text-wrapper">
          <div className="title-text">Lorem ipsum dolor sit amet consectetur.</div>
          <div className="main-tetx">
            Porta a facilisis venenatis vestibulum. Lobortis id commodo dictumst consectetur. Urna at quis quam mattis.
            Amet volutpat ridiculus tortor consectetur viverra id sem enim quis.
          </div>
        </div>
        <div className="personal-card-box">
          {PersonalInfo.map(({ id, position, name, image }) => (
            <PersonalCard key={id} avatar={image} position={position} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
