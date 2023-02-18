import React from "react";

const About = () => {
  const downloadResume = () => {
    window.open("https://drive.google.com/file/d/1ExctZf6SWhUHkD40ny_3FXHbtd4Uvso8/view?usp=share_link");
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
                    I am a self-taught frontend developer with a focus on  creating visually appealing and user-friendly interfaces that enhance the overall user experience. I have a strong understanding of HTML, CSS, and JavaScript, and I keep up-to-date with the latest web design and development trends.
                    </p>
                    <p>
                    I have experience working with a variety of tools and frameworks, such as React, React-Redux, among others, and I am able to adapt to new technologies quickly.
                    </p>
                    <p>
                    I have a keen eye for design and am able to create visually appealing layouts that are both functional and aesthetically pleasing.
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
