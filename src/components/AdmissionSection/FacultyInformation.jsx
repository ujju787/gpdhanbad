import React from 'react'
import './facultyInformation.css'
import { Link } from 'react-router-dom'
import { departmentFaculty } from './teacherData'
export default  function Placement(){
    return(
        <>
        <section className="section1">
        <div className="head-box pt-70 pb-70">
          <p className="text">Faculty Information</p>
          <div className="bread1">
            <Link to='/'>Home</Link><span>&nbsp;•&nbsp;</span>
            <a href="#">FACULTY</a> <span>&nbsp;•&nbsp;</span>
            <a href="#">faculty</a>
          </div>
        </div>
      </section>
    <div className="accordion " id="facultyAccordion">
      {Object.entries(departmentFaculty).map(([deptKey, teachers], index) => (
        <div className="accordion-item mt-1" key={deptKey}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button ${index !== 0 ? "collapsed" : "" }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse-${deptKey}`}
              aria-expanded={index === 0 ? "true" : "false"}
              aria-controls={`collapse-${deptKey}`}
            >
              Department of &nbsp; <span className='department-name'>
                {deptKey.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
              </span>
            </button>
          </h2>
        <div
  id={`collapse-${deptKey}`}
  className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
  data-bs-parent="#facultyAccordion"
>

          <div className="accordion-body row ">

              {teachers.map((teacher, tIndex) => (
                <div key={tIndex} className="mb-3 p-2 col-md-4 text-center">
                  <img
                    src={teacher.imageUrl}
                    alt={teacher.name}
                    className="img-fluid col-11 col-md-12" 
                  />
                 <div className='teacher-name pt-3'> {teacher.name}</div>
                  <div className='teacher-details pt-3'>Qualification: {teacher.qualification}</div>
                  <div className='teacher-details'>Email : {teacher.email}</div>
                  <div className='teacher-details'>Contact No : {teacher.contact}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
</>
    )
}