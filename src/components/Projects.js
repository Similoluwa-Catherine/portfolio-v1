import React from "react";
import { projects } from "../helpers/project";

const Projects = () => {
  return (
    <section id="portfolio">
      <div className="col-md-12">
        <h1
          className="section-title"
          style={{ color: "black", fontWeight: "bold" }}
        >
          Projects
        </h1>
        <div className="project-container col-md-12 mx-auto">
          <div className="row mx-auto">
            {projects.map((project) => (
              <div
                className="col-sm-12 col-md-6 col-lg-4"
                key={project.title}
              >
                <div className="project">
                  <img
                    src={project.image}
                    alt="projectImage"
                    height="230"
                    style={{
                      marginBottom: 0,
                      paddingBottom: 0,
                      position: "relative",
                    }}
                  />
                  <br />
                  <div className="mb-3">
                    <p className="project-title-settings">
                      {project.title}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-href"
                      >
                        <i
                          className="fas fa-external-link-alt"
                          style={{ marginLeft: "10px", cursor: "pointer" }}
                        ></i>
                      </a>
                    </p>
                    <p className="project-description">{project.description}</p>
                  </div>
                  {project.technologies.map((icons, i) => (
                      <li className="list-inline-item" key={i}>
                        <span>
                          <div>
                            <i
                              className={icons.class}
                              style={{ fontSize: "200%" }}
                            >
                              <p style={{ fontSize: "40%" }}>{icons.name}</p>
                            </i>
                          </div>
                        </span>
                      </li>
                    ))}

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
