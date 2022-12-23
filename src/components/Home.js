import React from "react";
import Typical from "react-typical";
import { basic_info } from "../helpers/about";

const Home = () => {
  const HeaderTitleTypeAnimation = React.memo( () => {
    return <Typical className="title-styles" steps={basic_info.titles} loop={50} />
  });

  return (
    <div id="home">
      <div className="row aligner" style={{height: '100%'}}>
        <div className="col-md-12">
          <div>
            <span className="iconify home-icon" data-icon="la:laptop-code" data-inline="false"></span>
            <br/>
            <h1 className="mb-0">
              <Typical steps={[basic_info.name]} wrapper="p" />
            </h1>
            <div className="title-container">
              <HeaderTitleTypeAnimation />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
