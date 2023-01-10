import React, {useRef} from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_5moybc4", "template_s0mvx0b", form.current, "BohF9IZ7PMZTOo0Hy")
      .then((result) => {
          console.log(result.text);
          console.log("message sent")
      }, (error) => {
          console.log(error.text);
      });
      form.current.reset();
  };

  return (
    <section id="contact" className="container d-flex justify-content-center">
      <div>
        <h1 style={{ color: "black", fontWeight: "bold" }}>Contact me</h1>
        <p>Available job opportunities or collaborations? I'd love to hear from you.</p>
        <form ref={form} onSubmit={sendEmail}>
            <div className="mt-5">
              <div className="form-group">
                <label className="form-label" style={{  fontSize: "1.2rem" }}>Name</label>
                <input
                  type="text"
                  name="from_name"
                  className="form-control"
                  style={{ height: "35px", fontSize: "1.3rem" }}
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label" style={{  fontSize: "1.2rem" }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="from_email"
                  className="form-control"
                  style={{ height: "35px", fontSize: "1.3rem" }}
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label" style={{ fontSize: "1.2rem" }}>Subject</label>
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  style={{ height: "35px", fontSize: "1.3rem" }}
                />
              </div>
              <div className="form-group mt-4">
                <label className="form-label" style={{ fontSize: "1.2rem" }}>Message</label>
                <textarea
                  type="text"
                  name="message"
                  maxLength={1000}
                  className="form-control"
                  style={{ height: "150px", fontSize: "1.3rem" }}
                />
              </div>
            </div>
          </form>
          <button className="contact-btn" onClick={sendEmail}>Send message</button>
      </div>
    </section>
  );
};

export default Contact;
