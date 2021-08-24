import React from "react";
import "./Style/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="contact-left">
        <div>
          <h1>Contact</h1>
        </div>
        <h2>Ofislerimiz</h2>
        <div className="office-detail">
          <span>Merkez Ofis-İzmir</span>
          <span>Harita</span>
          <span>Şube İzmir</span>
        </div>
      </div>
      <div className="contact-right">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>

          <label for="subject">Subject</label>
          <textarea
            id="subject"
            name="subject"
            placeholder="Write something.."
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
