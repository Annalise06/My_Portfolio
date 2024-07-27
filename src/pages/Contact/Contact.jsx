import React, { useState } from 'react';
import { FaEnvelopeOpen, FaPhoneSquareAlt } from 'react-icons/fa';
import { FaDribbble, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaX, FaYoutube } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';
import "./Contact.css"

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=annalise00tare@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.open(gmailLink, '_blank');
  };

  return (
    <section className="contact section1">
      <h2 className="section_title">
        Get In <span>Touch</span>
      </h2>
    <div className="contact_container container grid">
      <div className="contact_data">
        <div className="contact_title">Don't be Shy!</div>

        <p className="contact_description">
          Feel free to get in touch with me. I am always open to discussing new projects,
          creative ideas or opportunities to be part of your visions.
        </p>

        <div className="contact_info">
          <div className="info_item">
            <FaEnvelopeOpen className='info_icon' />

            <div>
              <span className="info_title">Mail Me</span>
              <h4 className="info_desc">annalise00tare@gmail.com</h4>
            </div>
          </div>

          <div className="info_item">
            <FaPhoneSquareAlt className='info_icon' />

            <div>
              <span className="info_title">Call Me</span>
              <h4 className="info_desc">+234 704 286 6030</h4>
            </div>
          </div>
        </div>

        <div className="contact_socials">
          <a href="https://facebook.com" className="contact_social-link">
            <FaFacebookF />
          </a>

          <a href="https://x.com/Tarerie1" className="contact_social-link">
            <FaX />
          </a>

          <a href="https://www.linkedin.com/in/anna-miene06/" className="contact_social-link">
            <FaLinkedinIn />
          </a>

          <a href="https://www.instagram.com/tare_rie/" className="contact_social-link">
            <FaInstagram />
          </a>
        </div>
      </div>

      <form className="contact_form" onSubmit={handleSubmit}>
        <div className="form_input-group">
          <div className="form_input-div">
            <input 
              type="text" 
              placeholder='Your Name'
              className="form_control"
              value={name}
              onChange={(e) => setName(e.target.value)} 
            />
          </div>

          <div className="form_input-div">
            <input 
              type="email" 
              placeholder='Your Email'
              className="form_control" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form_input-div">
            <input 
              type="text" 
              placeholder='Your Subject'
              className="form_control"
              value={subject}
              onChange={(e) => setSubject(e.target.value)} 
            />
          </div>
        </div>

        <div className="form_input-div">
            <textarea 
              placeholder='Your Message'
              className="form_control textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>


          <button type="submit" className="button">
            Send Message

            <span className="button_icon contact_button-icon">
              <FiSend />
            </span>
          </button>
      </form>
    </div>
    </section>
  )
}

export default Contact;