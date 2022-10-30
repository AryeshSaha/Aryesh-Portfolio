import React, { useEffect, useState, useRef } from "react";
import "./Contact.css";
import HashLoader from "react-spinners/HashLoader";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const form = useRef();

  const submit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kybgo94",
        "template_ah49xob",
        form.current,
        "dVzoqU2QB9imoEqQQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert('Message sent successfully!')

    e.target.reset();
  };

  return (
    <div>
      {loading ? (
        <div className="loader">
          <HashLoader color="#DC143C" size={60} loading={loading} />
        </div>
      ) : (
        <div className="contact-sec">
          <section id="contact">
            <h1 className="headings">Contact Me</h1>
            <form ref={form} onSubmit={submit} className="form">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter Your Name"
                required
                autoComplete="off"
              />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter Your Email"
                required
                autoComplete="off"
              />
              <textarea
                name="msg"
                id="msg"
                cols="30"
                rows="10"
                placeholder="Enter Your Message"
                required
                autoComplete="off"
              />
              <input type="submit" value="SEND" id="send" />
            </form>
          </section>
        </div>
      )}
    </div>
  );
};
