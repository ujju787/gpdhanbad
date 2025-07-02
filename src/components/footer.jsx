import React from 'react'
import logo2 from './assets/logo2.png'; // ✅ Adjust path if file is in a different folder
import './footer.css';

export default function Footer() {
  return (
    <>
      <div className="bg-dark text-white p-4 footer-container">
        <div className="row justify-content-center justify-content-md-block pt-4">
          <div className="row col-md-5 col-12  ms-4">
            <div className="logo-container col-sm-6  col-md-12  col-12 ">
              <img src={logo2} alt="Logo" className="img-fluid" />
            </div>
            <div className="about-text col-sm-6 col-md-12 p-4 p-sm-0 pt-md-4 col-12">
              Government Polytechnic Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence. The management has provided all infrastructure facilities required for quality education.
            </div>
          </div>
          <div className="row col-md-7 pt-4 pt-md-0">
            <div className="contact-text col-md-6">
              <ul>
                <h2>Contact Us</h2>
                <li><i className="fa-solid fa-location-dot"></i> Government Polytechnic Rd, Jharudih , Dhanbad , Bishunpur , Jharkhand</li>
                <li><i className="fa-solid fa-phone"></i>0326-2313-894</li>
                <li><i className="fa-solid fa-envelope"></i>Polytechnic-dhanbad@yahoo.co.in</li>
                <li className="footer-icon">
                  <div className="icon"><i className="fa-brands fa-facebook-f"></i></div>
                  <div className="icon"><i className="fa-brands fa-twitter"></i></div>
                  <div className="icon"><i className="fa-brands fa-instagram"></i></div>
                </li>
              </ul>
            </div>
            <div className="contact-map col-md-6  col-11 text-center m-auto">
                <iframe 
                  title="Government Polytechnic Dhanbad Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.333750408462!2d86.4185653!3d23.8067282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bcad46538965%3A0x90e8d7a5e46250e8!2sGovernment%20Polytechnic%20%2C%20Dhanbad%20%2C%20Jharkhand!5e0!3m2!1sen!2sin!4v1745580755994!5m2!1sen!2sin"
                  width="100%" 
                  height="200px" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                {/* <iframe width="100%" height="205px" src="https://www.youtube.com/embed/pdtzmGFoXSI?si=uFXldahAnAw7ForT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
              </div>
          </div>
        </div>
      {/* <div className="footer-section-2">
        <ul>
        <li>Home</li>
        <li>About</li>
        <li>Admission</li>
        <li>Grievance Cell</li>
        <li>Mandatory Disclosures</li>
        <li>Notice</li>
        <li>Placement</li>
        <li>Tender</li>
        <li>Contact Us </li>
        </ul>
        </div> */}
      </div>
        <p className='caption p-4 m-0'>Copyright © 2025 Government Polytechnic, Dhanbad | Designed & Developed <span>By the Students of Government Polytechnic, Dhanbad </span></p>
    </>
  );
}
