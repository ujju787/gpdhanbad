import React from 'react'
import './missionVision.css'
import { Link } from 'react-router-dom'
export default function Mission(){
    return(
        <>
        <section className="section1">
        <div className="head-box pt-70 pb-70">
          <p className="text">Mission</p>
          <div className="bread1">
            <Link to='/'>Home</Link><span>&nbsp;•&nbsp;</span>
            <a href="#">MISSION</a> <span>&nbsp;•&nbsp;</span>
            <a href="#">Vision</a>
          </div>
        </div>
      </section>
         <header className="mission-header">
        <h1>Government Polytechnic, Dhanbad</h1>
   
    </header>
    <section className="mission-section-box">
    <h2>Vision:</h2>
    <p>Government Polytechnic, Dhanbad envisions to empower diploma engineering students in Jharkhand through industry relevant education, fostering innovation, skill development, and ethical professionalism to compete with new global challenges.</p>
</section>

<section className="mission-section-box">
    <h2>Mission:</h2>
    <ul>
        <li>To provide state-of-the-art infrastructure to students to impart quality technical education.</li>
        <li>To equip students with necessary skills and expertise to excel in their chosen paths, focusing on industrial and computational aspects.</li>
        <li>To motivate staff and students for critical and innovative thinking, enriching the teaching-learning experience, and developing employable technical manpower.</li>
    </ul>
</section>

<section className="mission-section-box">
    <h2>Program Outcomes (POs) for Diploma Engineering Institutes:</h2>
    <ul>
        <li>PO1: Apply basic mathematics, science, and engineering fundamentals to solve engineering problems.</li>
        <li>PO2: Identify and analyze well-defined engineering problems using codified methods.</li>
        <li>PO3: Design solutions for technical problems and develop system components or processes to meet specified needs.</li>
        <li>PO4: Use modern engineering tools and techniques for experimentation and testing.</li>
        <li>PO5: Apply appropriate technology considering sustainability, society, and ethical practices.</li>
        <li>PO6: Utilize engineering management principles effectively in project management and teamwork.</li>
        <li>PO7: Engage in lifelong learning to adapt to technological changes.</li>
    </ul>
</section>

        </>
    )
}