import React from 'react'
import { useEffect } from 'react';
import "./heroSection.css";
import  CardImage1 from './assets/readmi.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default function HeroSection(){
useEffect(() => {
  AOS.init({
    duration: 1000,  // Animation duration in ms
    once: true,       // Animate only the first time
    easing: 'ease-out-in',  // Easing function (e.g., 'linear', 'ease-in', 'ease-out')
  
  });
}, []);


  return(
        <>

<div className="container-fluid  mb-5  hero-container">
  <div className="row box text-center text-white gy-4 p-4 mx-md-5 mx-2" data-aos="slide-box">
    <div className="student-box boxes py-md-4 py-2 col-md-3 col-6 ">
      <img src={CardImage1} alt="" />
      <h4>20k+</h4>
      <p>Student's Qualified</p>
    </div>
  <div className="degree-box boxes py-md-4 py-2 col-md-3 col-6">   
  <img src={CardImage1} alt="" />
      <h4>10+</h4>
      <p>Degree Courses</p>
  </div>
  <div className="leagacy-box boxes py-md-4 py-2 col-md-3 col-6">  
  <img src={CardImage1} alt="" />
      <h4>66+</h4>
      <p>Year of legacy</p>
  </div>
  <div className="companies-box boxes py-md-4 py-2 col-md-3 col-6">
  <img src={CardImage1} alt="" />
      <h4>100+</h4>
      <p>Companies Visited</p>
  </div>
  </div>
</div>

        {/* old herosection */}
           {/* <div className="container-fluid parent-container">
         <div className="container row row-cols-md-3 row-cols-1 g-4">
         <div data-aos="slide-in-left" className="my-special-box boxes py-md-4 py-2 col-md-3 col-6 col text-center ">   
            <div className="card-child1 p-4 " 
            >
              <img src={CardImage1}ardImage1} alt=""/>
              <h3>ADMISSION</h3>
              <p>Admission is taken on the basis of list of candidates received from JCECEB within a specified period with relevant documents, Certificates and Fees etc.</p>
       
            </div>
                </div>
                <div data-aos="slide-in-top" className="my-special-box boxes py-md-4 py-2 col-md-3 col-6 col text-center ">

                  <div className="card-child2  p-4 ">
                  <img src={CardImage1}ardImage2} alt=""/>

                    <h3>FACILITIES</h3>
                    <p>The Government Polytechnic Dhanbad has a well-established Library for students and the teaching staff. The college is having spacious central workshops.</p>
             
                  </div>
                      </div>
                      <div data-aos="slide-in-right" className="my-special-box boxes py-md-4 py-2 col-md-3 col-6 col text-center ">

                        <div className="card-child3 p-4 ">
                        <img src={CardImage1}ardImage3} alt=""/>

                          <h3>PLACEMENT</h3>
                          <p>Placement Cell is an integral part of the institute. The institute has provided complete infrastructure for effective functioning of the cell.</p>
                   
                        </div>
                            </div>
          </div>
         </div> */}
         
        </>
    )
  
}