import React from "react";
import { socials } from "../helpers/about";

const Footer = () => {
  return (
    <footer>
      <div className="col-md-12">
        <div className="social-links">
          {socials.map((social) => (
            <span key={social.name} className="m-4">
          <a href={social.url} target="_blank" rel="noopener noreferrer">
            <i className={social.icon}></i>
          </a>
        </span>
          ))}
        </div>

        <div className="copyright py-4 text-center">
          <div className="container">
            <small>
              Similoluwa Ilori
            </small>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
