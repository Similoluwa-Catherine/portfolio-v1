import React from "react";
import { skills } from "../helpers/skill";

const Skills = () => {
  return (
    <section id="skills">
      <div className="col-md-12">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black", fontWeight: "bold" }}>
            Skills
          </h1>
        </div>
        <div className="col-md-12 text-center">
          <ul className="list-inline mx-auto skill-icon">
          {skills.map((skill, index) => (
            <li className="list-inline-item mx-3" key={index}>
          <span>
            <div className="text-center skills-tile">
              <i className={skill.icon} style={{ fontSize: "220%" }}>
                <p
                  className="text-center"
                  style={{ fontSize: "30%", marginTop: "4px" }}
                >
                  {skill.name}
                </p>
              </i>
            </div>
          </span>
        </li>
          ))}
          </ul>
        </div>
      </div>
    </section>
  );
  
}

export default Skills;

