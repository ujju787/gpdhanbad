import React from 'react'
import './BranchesComponents.css';
import Scheme from './Scheme';

document.body.style.backgroundColor="#F0F4F5";
 function BranchComponent(props){
return(
    <> 
 <section className="banner"
 style={{
  backgroundImage: `url(${props.backgroundImage})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover'
}}>
    <div className="overlay"></div>
 
    <div className="banner-text">
      <h1>{props.title}</h1>
      <p>{props.titleDescription}</p>
    </div>
  </section>
 <div>
      <Scheme title={props.SchemeTitle}/>
  </div>
  {/* <!-- ABOUT --> */}
  <section className="content">
    <h2>About the Department</h2>
    <p>{props.departmentDescription}</p>
  </section>

  {/* <!-- FACULTY --> */}
  <section className="section-box">
    <h2>Our Faculty</h2>
    {/* <!-- Faculty Member 1 --> */}
    <div className="faculty-member">
      <div className="faculty-text">
          <h3>{props.faculty1Name}</h3>
        <p>{props.faculty1Position}</p>
        </div>
        
      <div className="faculty-img">
        <img src={props.faculty1Image} alt="Not Available now "/>
      </div>
    </div>

    {/* <!-- Faculty Member 2 --> */}
    <div className="faculty-member">
      <div className="faculty-text">
        <h3>{props.faculty2Name}</h3>
        <p>{props.faculty2Position}</p>
      </div>
      <div className="faculty-img">
        <img src={props.faculty2Image} alt="Not Available now "/>
      </div>
    </div>

    {/* <!-- Faculty Member 3 --> */}
    <div className="faculty-member">
      <div className="faculty-text">
        <h3>{props.faculty3Name}</h3>
          <p>{props.faculty3Position}</p>
          
      </div>
      <div className="faculty-img">
        <img src={props.faculty3Image} alt="Not Available now "/>
      </div>
    </div>

    {/* <!-- Faculty Member 4 --> */}
    <div className="faculty-member">
      <div className="faculty-text">
        <h3>{props.faculty4Name}</h3>
        <p>{props.faculty4Position}</p>
      </div>
      <div className="faculty-img">
        <img src={props.faculty4Image} alt="Not Available now "/>
      </div>
    </div>
    {/* <!-- Faculty Member 4 --> */}
    <div className="faculty-member">
      <div className="faculty-text">
        <h3>{props.faculty5Name}</h3>
        <p>{props.faculty5Position}</p>
      </div>
      <div className="faculty-img">
        <img src={props.faculty5Image} alt="Not Available now "/>
      </div>
    </div>
  </section>

    {/* <!-- LABS --> */}
    
  <section className="section-box">
    <h2>Labs & Facilities</h2>

    {/* <!-- Lab 1 --> */}
    <div className="lab-item">
      <div className="lab-text">
        <h3>{props.labHeading1}</h3>
        <p>{props.labDescription1}</p>
      </div>
      <div className="lab-img">
        <img src={props.labImage1} alt="Metallography Lab"/>
      </div>
    </div>

      {/* <!-- Lab 2 --> */}
    <div className="lab-item">
      <div className="lab-text">
        <h3>{props.labHeading2}</h3>
        <p>{props.labDescription2}</p>
      </div>
      <div className="lab-img">
        <img src={props.labImage2} alt="Metallography Lab"/>
      </div>
    </div>
  </section>

    </>
)
}
export default BranchComponent;
