import React from "react";
import { experience } from "../helpers/experience";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <section id="resume" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black", fontWeight: "bold" }}>
           Experience
          </h1>
        </div>
      </div>
      <div className="col-md-8 mx-auto">
        <VerticalTimeline>
        {experience.map((work, index) => (
          <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date={work.years}
          iconStyle={{
            background: "#AE944F",
            color: "#fff",
            textAlign: "center",
          }}
          icon={<i className="fa fa-code experience-icon"></i>}
          key={index}
        >

          <h3
            className="vertical-timeline-element-title"
            style={{ textAlign: "left" }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ textAlign: "left" }}
          >
            {work.company}
          </h4>
          <p style={{ textAlign: "left", fontSize: "1.2rem", fontWeight: "normal" }}>{work.description}</p>
        </VerticalTimelineElement>
        ))}
          <VerticalTimelineElement
            iconStyle={{
              background: "#AE944F",
              color: "#fff",
              textAlign: "center",
            }}
            icon={
              <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
