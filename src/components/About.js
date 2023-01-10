import React from "react";

const About = () => {
  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/18kMRda-4zkC1fiotNzrXnYxCNk0RDePw/view?usp=share_link");
  }

  return (
    <section id="about">
      <div className="col-md-12">
        <h1 style={{ color: "black", fontWeight: "bold" }}>
          About me
        </h1>
        <div className="row center mx-auto mb-5 mt-5">
          <div className="col-md-8 center">
            <div className="col-md-10">
              <div className="card">
                <div className="card-header">
                  <span
                    className="iconify"
                    data-icon="emojione:red-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:yellow-circle"
                    data-inline="false"
                  ></span>{" "}
                  &nbsp;{" "}
                  <span
                    className="iconify"
                    data-icon="twemoji:green-circle"
                    data-inline="false"
                  ></span>
                </div>
                <div
                  className="card-body font-trebuchet text-justify ml-3 mr-3"
                  style={{
                    height: "auto",
                    fontSize: "132%",
                    lineHeight: "200%",
                  }}
                >
                  <br />
                  <span className="wave">Hi :) </span>
                  <br />
                  <br />
                    <p>
                    I am a self-taught frontend developer with a focus on building scalable and accessible websites, while still giving great user experience. 
                    I am very passionate about being creative when crafting effective websites, apps and platforms in other to propel competitive advantage and revenue growth.
                    </p>
                </div>
              </div>
            </div>
          </div>

          <div className="btn-container col-md-4 mb-1 mt-5 center">
            <button className="resume-btn" onClick={downloadResume}>DOWNLOAD MY RESUME</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
