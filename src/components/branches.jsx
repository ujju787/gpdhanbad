import {useEffect,useState}  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './branches.css';
import './noticeSection/notice.css'
import electrical from './assets/electrical.jpg';
import mechanical from './assets/mechanical.jpg';
import civil from './assets/civil.jpg';
import cse from   './assets/computer.jpg';
import Metallurgy from './assets/metallurgy.jpg';
import ghibli1 from './assets/gpDhanbadGhibli.jpg';
import ghibli2 from './assets/gpDhanbadGhibli2.jpg';
import ListImage from './assets/rightArrow.jpg';
import {collegeNotices} from './noticeSection/noticeData'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default function Branches() {
useEffect(() => {
  AOS.init({
    duration: 1200,  // Animation duration in ms
    once: true,       // Animate only the first time
    easing: 'ease-out',  // Easing function (e.g., 'linear', 'ease-in', 'ease-out')
  
  });
}, []);
 
  const branches = [
    { img: electrical, title: "Electrical", desc: "Powering the Future, One Circuit at a Time." },
    { img: civil, title: "Civil", desc: "Building the Future, One Structure at a Time." },
    { img: mechanical, title: "Mechanical", desc: "Engineering movement and machines." },
    { img: cse, title: "Computer Science", desc: "Think. Code. Create. Conquer." },
    { img: Metallurgy, title: "Metallurgy", desc: "Forging the Future with Metal and Mind." }
  ];
  
  const [selectedCategory, setSelectedCategory] = useState('general');
  return (
    <>

    <div className="container-fluid bg-white upper-hero pt-5 ">

    {/* Notice section in website  */}

      {/* My notice Row  */}
    <div className="row justify-content-center ms-lg-5 me-lg-5"  >

      {/* first column  */}
   <div className='alerts-msg col-lg-4 '>
      <div className="btn-group mb-4 pt-3" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn " onClick={() => setSelectedCategory('general')}> General</button>
                <button type="button" className="btn " onClick={() => setSelectedCategory('student')}>   Students </button>
                <button type="button" className="btn " onClick={() => setSelectedCategory('faculty')}>  Faculties  </button>
              </div>
   <h4 className='text-center'>Important Notices </h4>   
   <div className="list-of-notice  col-lg-10 ">
      
            
         <ul>
  {collegeNotices[selectedCategory].slice(0,6).map((notice, index) => (
    <div key={index} className="notice-list">
      <img src={ListImage} alt="" className="left-of-list" />
      <div className="pt-2 list-group-item right-of-list">    
        <a 
      href={notice.noticePdf}
      target="_blank" 
      rel="noopener noreferrer" 
      className="notice-text"
    >
      {notice.text}
    </a>
        <li className="calendar-icon">
          <i className="fa-solid fa-calendar-days"></i>
          <span className="notice-date ms-2">{notice.date}</span>
        </li>
      </div>
    </div>
  ))}
</ul>

          </div>
    <div className="principal-btn-container text-center mt-4">
      <Link to='/GlobalNotice'>
      <button className='bn notice-btn  '>Read More </button>
      </Link>
              </div>
              
   </div>

   {/* second column  */}
<div className="director-msg  col-lg-4 col-12 ">
  <h4 className='text-center'>Principal Message </h4>
  <div className="principal-img col-lg-9 col-7 m-auto">
  <img src="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/principal_sir-e1744703088214.jpg" alt=""  className='img-fluid  mt-2 m-auto'/>

  </div>
        <h5 className='pt-3 text-center'>Mr. Rajesh Kumar </h5>
        <p className='text-center'>Principal , Gp Dhanbad</p>
        <p className='text-justify ms-4 me-4 m-lg-0'>Welcome to the Director's Message. Here, our esteemed Director shares insights into the vision, mission, and core values that drive our institution.
           This message reflects the leadership’s commitment to academic excellence, innovation, and holistic student development. Read on to understand the guiding principles that shape our college's journey.</p>
          <div className="principal-btn-container text-center mt-4">
        <Link to='about/PrincipalDesk'>
        <button className='bn principal-btn  '>Read More </button></Link>

          </div>
</div>

{/* third column  */}
<div className="about-msg  col-lg-4 col-12 text-center">
  <h4>About Gp Dhanbad </h4>
  <div className="principal-img col-lg-11 col-8 m-auto">
  <img src="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/IMG-20250412-WA0013-1536x1152.jpg" alt=""  className='img-fluid  mt-2 m-auto'/>

  </div>
        <h5 className='pt-3 text-center'>One of the Best Institute for Engineering </h5>
        <p className='text-center'>Dhanbad , Jharkhand </p>
        <p className='text-justify ms-4 me-4 m-lg-0'>Government Polytechnic Dhanbad is working efficiently to achieve proficiency in technical education and will blossom into an institution par excellence.</p>
          <div className="principal-btn-container text-center mt-4">
        <Link to='/about/AboutInstitute'>
        <button className='bn principal-btn  '>Read More </button>
        </Link>

          </div>
</div>
      </div>




   
    </div>

    {/* Department section container until next comment  */}
   <div className="unique-color">
   <div className="container-fluid pt-4 depart-color">
        <div className="row  ps-5 ">
          <div className="department-text mb-4  col-md-6 ms-lg-4">
            <div className="department-heading "><p>Departments</p></div>
            <div className="line"></div>
          </div>
          <div className="department-content col-md-5 col-lg-4 ">
            <p>The Champion School aims at offering all our students a broad and balanced curriculum that provides rewarding and stimulating activities to prepare them for the best social and cultural life.</p>
          </div>
        </div>
      </div>

        {/* Branches Showing container until next comment */}
         <div className="container ">
      <div className="row g-4">
        {branches.map((branch, idx) => (
          <div
          key={idx}
            className="col-12 col-md-6 px-4 col-lg-4 gy-md-5" 
            data-aos= "zoom-in"// Slide in from left or right
        >
            <div className="card">
              <img
                src={branch.img}
                alt={branch.title}
                className="card-img-top img-fluid"
              />
              <div className="card-body d-flex flex-column align-items-start">
                <p className="text-primary fs-5">{branch.title}</p>
                <p className="mt-1">{branch.desc}</p>
                <button className="btn-custom btn mt-4">
                  <Link className='btn-text text-decoration-none ' to={`/${branch.title.toLowerCase()}`}
                  >
                  Read more
                  </Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>




    <div className="container padding1 mb-md-5">
      <div className="row ms-md-5 ">
       <div className="col-md-4  col-12 m-auto ">
       <div className="col ghibli-image1 mt-4">
          <img src={ghibli1} alt="" className='img-fluid'/>

        </div>
        <div className="col ghibli-image2 mb-md-5 ">
  <img src={ghibli2} alt="" className="img-fluid" />
  <div className="overlay"></div>
</div>


       </div>
        <div className="col ghibli-text mt-5">
        <div className="activities-heading mt-4 mt-md-5"><p>Our <span> Co-curricular</span> Activities</p></div>
        <div className="line"></div>
        <ul className='mt-4  fs-4'>
          <li className='mb-2 mb-md-4'>Fine Arts Club</li>
          <li className='mb-2 mb-md-4'>Dramatics Club</li>
          <li className='mb-2 mb-md-4'>Literary Club</li>
          <li className='mb-2 mb-md-4'>Programming Club</li>
          <li className='mb-2 mb-md-4'>Sports Club</li>
          <li className='mb-2 mb-md-4'>Dance & Signing Club</li>
          <li className='mb-2 mb-md-4'>Natures Club</li>
          <li className='mb-2 mb-md-4'>Innovation and Exhibition Club</li>
          <li className='mb-2 mb-md-4'>Bloggers Club</li>
          <li className='mb-2 mb-md-4'> Photography Club</li>
        </ul>
        </div>
      </div>
    </div>
   </div>

     </>
   
  );
}
