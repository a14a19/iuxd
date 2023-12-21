import React, { useState } from "react";
import './Contact.css';

export default function Multiple() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", help: "", message: "" });
  const [formVisible, setFormVisible] = useState(true);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);

    // Clear form fields after submission
    setFormData({ name: "", email: "", phone: "", help: "", message: "" });
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      {formVisible && (
        <div className="container">
          <div className="header">
            <p>Lets talk!</p>
          </div>
          <div className="form-container">
            <button className="close-button" onClick={handleCloseForm}>X</button>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="phone">Cell Phone</label>
              <input type="tel" id="phone" name="phone" />

              <label className="dropdown-label" htmlFor="help">
                How we can help you
                <select className="dropdown-select" id="help" name="help" onChange={handleChange}>
                  <option value="option1">Design System</option>
                  <option value="option2">Outsourcing</option>
                  <option value="option3">Job openings</option>
                  <option value="option3">Other subjects</option>
                </select>
              </label>

              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange}></textarea>
              <p className="privacy">
                We will never share your information. By submitting, you agree
                to our{" "}
                <a
                  href="https://lgpd.meiuca.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>{" "}
              </p>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}