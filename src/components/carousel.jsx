import React from 'react';
import first from './assets/first.jpg';
import second from './assets/second.jpg';
import third from './assets/third.jpg';
import "./carousel.css";

export default function BootstrapCarousel() {
  return (
    <>

      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2300"> 

  <div className="carousel-inner">
  {/* Slide 1 */}
  <div className="carousel-item active position-relative">
    <img src={first} className="d-block w-100" alt="Slide 1" />
    <div className="overlay">
      <div className="carousel-text">
        <h2 className='welcome-heading'>Welcome to Government Polytechnic Dhanbad</h2>
        <p>
          Government Polytechnic Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence.
          The management has provided all infrstructure facilities required for quality education.
        </p>
        <button type="button" className="btner">Read more</button>
      </div>
    </div>
  </div>

  {/* Slide 2 */}
  <div className="carousel-item position-relative">
    <img src={second} className="d-block w-100" alt="Slide 2" />
    <div className="overlay">
      <div className="carousel-text">
      <h2 className='welcome-heading'>Welcome to Government Polytechnic Dhanbad</h2>
        <p>
          Government Polytechnic Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence.
          The management has provided all infrstructure facilities required for quality education.
        </p> 
        <button type="button" className="btner">Read more</button>

        </div>
    </div>
  </div>

  {/* Slide 3 */}
  <div className="carousel-item position-relative">
    <img src={third} className="d-block w-100" alt="Slide 3" />
    <div className="overlay">
      <div className="carousel-text">
      <h2 className='welcome-heading'>Welcome to Government Polytechnic Dhanbad</h2>
        <p>
          Government Polytechnic Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence.
          The management has provided all infrstructure facilities required for quality education.
        </p>
        <button type="button" className="btner">Read more</button>
           </div>
    </div>
  </div>
  
</div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon changer-icons" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon changer-icons" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  );
}
