import React from "react";
import './Footer.css'
const Footer = () => {

  const cities = {
    Delhi: [
      "Dentist in Delhi",
      "General Physicians in Delhi",
      "Cardiologist in Delhi",
      "Gynaecologist in Delhi",
      "Psychiatrist in Delhi",
      "Dermatologist in Delhi",
      "Neurologist in Delhi",
      "Urologist in Delhi",
      "Ophthalmologist in Delhi",
      "Sexologist in Delhi",
    ],
    Mumbai: [
      "Dentist in Mumbai",
      "General Physicians in Mumbai",
      "Cardiologist in Mumbai",
      "Gynaecologist in Mumbai",
      "Psychiatrist in Mumbai",
      "Dermatologist in Mumbai",
      "Neurologist in Mumbai",
      "Urologist in Mumbai",
      "Ophthalmologist in Mumbai",
      "Sexologist in Mumbai",
    ],
    Chennai: [
      "Dentist in Chennai",
      "General Physicians in Chennai",
      "Cardiologist in Chennai",
      "Gynaecologist in Chennai",
      "Psychiatrist in Chennai",
      "Dermatologist in Chennai",
      "Neurologist in Chennai",
      "Urologist in Chennai",
      "Ophthalmologist in Chennai",
      "Sexologist in Chennai",
    ],
    Bangalore: [
      "Dentist in Bangalore",
      "General Physicians in Bangalore",
      "Cardiologist in Bangalore",
      "Gynaecologist in Bangalore",
      "Psychiatrist in Bangalore",
      "Dermatologist in Bangalore",
      "Neurologist in Bangalore",
      "Urologist in Bangalore",
      "Ophthalmologist in Bangalore",
      "Sexologist in Bangalore",
    ],
  };

  const aboutLinks = [
    "About Us",
    "Contact Us",
    "Careers",
    "Mobile Apps",
    "Terms of Use",
    "Surgery Partner : Pristyn Care",
    "Our Fitness Partner: beatXP",
    "Privacy Policy",
    "Editorial Policy"
  ];

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Cities Section */}
        {Object.entries(cities).map(([city, services]) => (
          <div className="footer-column" key={city}>
            <h3>{city}</h3>
            <ul>
              {services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* About Section */}
        <div className="footer-column">
          <h3>Read about Lybrate</h3>
          <ul>
            {aboutLinks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;