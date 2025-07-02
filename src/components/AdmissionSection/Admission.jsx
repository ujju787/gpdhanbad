import React from 'react';
import './admissionNormal.css';
import './admissionResponsive.css';
import admissionProcess from '../assets/admissionProcess.jpg';
import { Link } from 'react-router-dom';
export default function Admission() {
  return (
    <>
      <section className="section1">
        <div className="head-box pt-70 pb-70">
          <p className="text">Admission</p>
          <div className="bread1">
            <Link to='/'>Home</Link><span>&nbsp;•&nbsp;</span>
            <a href="#">ADMISSION</a> <span>&nbsp;•&nbsp;</span>
            <a href="#">Admission</a>
          </div>
        </div>
      </section>


      <section className="section2">
        <div style={{ fontSize: "1.5rem" }} className="heading">
          <span className="adm">ADMISSION</span><span className="pro"> PROCEDURE </span>
          <h6>&nbsp;</h6>
        </div>
        <div className="row d-flex justify-content-center ">
          <div className="col-md-7 col-11 ">
            <p>
              Admission in <span className="orange">GOVERNMENT POLYTECHNIC, DHANBAD (JHARKHAND)</span> is strictly through <span className="orange">POLYTECHNIC ENTRANCE COMPETITIVE EXAM (PECE)</span> conducted by <span className="orange">Jharkhand Combined Entrance Competitive Examination Board (JCECEB)</span> every year.
            </p>
            <p>
              संस्थान में सभी प्रवेश झारखंड संयुक्त प्रवेश प्रतियोगी परीक्षा बोर्ड द्वारा आयोजित राज्य स्तरीय प्रवेश परीक्षा और उसके बाद ऑनलाइन काउंसलिंग के माध्यम से किए जाते हैं। प्रवेश के लिए आवेदन पत्र आमतौर पर जनवरी के महीने में आमंत्रित किए जाते हैं और प्रवेश परीक्षा अप्रैल/मई में आयोजित की जाती है। संस्थान को जून/जुलाई में ऑनलाइन काउंसलिंग से आवंटित किया जाता है। अधिक जानकारी के लिए वेबसाइट देखें:
              <a target='_blank' className='ChangeLinkColor' href="https://jceceb.jharkhand.gov.in"> https://jceceb.jharkhand.gov.in</a>
            </p>
          </div>
          <div className="col-md-4 col-11 text-center">
            <img src={admissionProcess} alt="Admission Process " className='img-fluid' />
          </div>
        </div>
      </section>

      <section className="section3">
        <table className="table table-bordered table-striped text-dark mt-5">
          <thead>
            <tr>
              <th>Entity</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr><th>ENTRANCE EXAM FORM FILLING MONTHS:</th><td>JANUARY AND FEBRUARY EVERY YEAR</td></tr>
            <tr><th>ENTRANCE EXAM DATE:</th><td>LAST WEEK OF APRIL</td></tr>
            <tr><th>RESULT OF ENTRANCE EXAM:</th><td>MID OF MAY</td></tr>
            <tr><th>COUNSELLING:</th><td>JUNE AND JULY</td></tr>
          </tbody>
        </table>
      </section>

      <section className="section4">
        <div className="contain">
          <div className="content">
            <p>
              Jharkhand Combined Entrance Competitive Examination Board (JCECEB) द्वारा संस्थान आवंटन के पश्चात अभ्यर्थियों को <span id="eng">Provisional Admit Card</span> और अन्य दस्तावेजों के साथ संस्थान में उपस्थित होना होता है। शुल्क का भुगतान ऑनलाइन माध्यम (Net Banking / UPI / Debit / Credit Card) से करना अनिवार्य है।
            </p>
            <p>
              विशेष: अन्य राज्यों से परीक्षा उत्तीर्ण करने वाले अभ्यर्थी भी पात्र हैं। विस्तृत जानकारी के लिए:
              <a className='ChangeLinkColor' href="https://jceceb.jharkhand.gov.in"> https://jceceb.jharkhand.gov.in</a>
            </p>
          </div>

          <div className="list">
            <ul>
              <li>Copy of PROVISIONAL ADMISSION LETTER (JCECEB)</li>
              <li>Admit Card of Polytechnic Entrance Exam</li>
              <li>All fee receipts from JCECEB</li>
              <li>High school certificate + mark sheet + self-attested photocopies</li>
              <li>Intermediate / ITI documents (if applicable)</li>
              <li>Category Certificates (SC/ST/OBC/EWS)</li>
              <li>Sub-category Certificates (if applicable)</li>
              <li>Recent Income Certificate</li>
              <li>Residence Certificate</li>
              <li>Aadhar Card copy</li>
              <li>Character Certificate</li>
              <li>Transfer Certificate</li>
              <li>Medical Certificate (Govt. Hospital)</li>
              <li>Gap Affidavit (if applicable)</li>
              <li>Anti-ragging Affidavit</li>
              <li>2 Envelopes with Rs. 25 stamp</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section5">
        <div style={{ fontSize: "1.5rem" }} className="heading">
          <span className="adm">COLLEGE</span><span className="heading"> BRANCH</span>
          <h6>&nbsp;</h6>
        </div>
        <table className="table table-bordered table-striped text-center">
          <thead>
            <tr>
              <th>Level</th>
              <th>Programmes</th>
              <th>Duration</th>
              <th>Qualification</th>
              <th>Strength</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>DIPLOMA</td><td>COMPUTER SCIENCE AND ENGINEERING</td><td>3 Year</td><td>10th standard</td><td>60</td></tr>
            <tr><td>DIPLOMA</td><td>CIVIL ENGINEERING</td><td>3 Year</td><td>10th standard</td><td>60</td></tr>
            <tr><td>DIPLOMA</td><td>ELECTRICAL ENGINEERING</td><td>3 Year</td><td>10th standard</td><td>60</td></tr>
            <tr><td>DIPLOMA</td><td>MECHANICAL ENGINEERING</td><td>3 Year</td><td>10th standard</td><td>60</td></tr>
            <tr><td>DIPLOMA</td><td>METALLURGICAL ENGINEERING</td><td>3 Year</td><td>10th standard</td><td>60</td></tr>
            <tr><td>DIPLOMA</td><td>COMPUTER SCIENCE AND ENGINEERING [LATERAL ENTRY]</td><td>2 Year</td><td>Intermediate/ITI</td><td>10% Seats</td></tr>
            <tr><td>DIPLOMA</td><td>CIVIL ENGINEERING [LATERAL ENTRY]</td><td>2 Year</td><td>Intermediate/ITI</td><td>10% Seats</td></tr>
            <tr><td>DIPLOMA</td><td>ELECTRICAL ENGINEERING [LATERAL ENTRY]</td><td>2 Year</td><td>Intermediate/ITI</td><td>10% Seats</td></tr>
            <tr><td>DIPLOMA</td><td>METALLURGICAL ENGINEERING [LATERAL ENTRY]</td><td>2 Year</td><td>Intermediate/ITI</td><td>10% Seats</td></tr>
            <tr><td>DIPLOMA</td><td>MECHANICAL ENGINEERING [LATERAL ENTRY]</td><td>2 Year</td><td>Intermediate/ITI</td><td>10% Seats</td></tr>
          </tbody>
        </table>
      </section>

   
    </>
  );
}
