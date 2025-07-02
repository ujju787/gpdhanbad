import React from 'react'
import './facilities.css'
import { Link } from 'react-router-dom'
export default function Facilities(){
    return(
        <>
           <section className="section1">
                <div className="head-box pt-70 pb-70">
                  <p className="text">Facilities</p>
                  <div className="bread1">
                    <Link to='/'>Home</Link><span>&nbsp;•&nbsp;</span>
                    <a href="#">FACILITIES</a> <span>&nbsp;•&nbsp;</span>
                    <a href="#">Facilities</a>
                  </div>
                </div>
              </section>
          <header>
        <h1>College Facilities</h1>
    </header>
    <div className="facility-content">
        <div className="facility-card">
            <h2>Library Facilities</h2>
            <p>
                The Government Polytechnic Dhanbad has a well-established Library for students and the teaching staff. His library stores and offers books of premier quality and demand on all subjects related to various streams.
            </p>
            <p>
                It is well equipped and very spacious reading room with state-of-art computerized facilities available. There are book bank and question bank available in the library.
            </p>
            <p>
                There is also a plan to develop a digital library in this regard to promote portable education. The collection is comprehensive and there is no need for students to purchase books from outside.
            </p>
        </div>
        <div className="facility-card">
            <h2>Workshop Facilities</h2>
            <p>
                Workshop Department of the college plays a key role in imparting basic workshop and engineering practical training to the students of the college. The college is having spacious central workshops.
            </p>
            <p>
                The college workshop also undertakes repair and maintenance work of all the departments and development activities being carried out in the college.
            </p>
            <p>
                The college workshop has following well equipped shops: Machine Shop, Welding Shop,Electrical Shop and many more. All shops are well equipped with latest machinery, material and equipment.
            </p>
        </div>
    </div>
        </>
    )
}