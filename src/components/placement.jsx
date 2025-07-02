import React, { useState } from "react";
import "./placement.css";
import { Link } from "react-router-dom";
const placements = [
  {
    company: "ULTRATECH CEMENT LTD.",
    logo: "data:image/png;base64,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",
    students: [
    { name: "KRISH BHATT", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "NAKUL KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "NIKHIL MAHATO", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "PANKAJ KUMAR PAL", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "PRINCE PANDIT", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "YASH KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" }
      // ...more students
    ],
  },
  {
    company: "RASHMI METALLIC LTD.",
    logo: "https://i.ytimg.com/vi/Egm5d2AVSRc/sddefault.jpg",
    students: [
        { name: "AMAN KUMAR", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
    { name: "MD MASUM MANSURI", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
    { name: "MD MISTER ANSARI", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
    { name: "VISHAL KUMAR MANDAL", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
   { name: "BASU DEW SAHU", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "BHAGIRATH MAHTO", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "HARSH AYUSH", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "JAYANT SAGAR", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "RAMESHWAR ROY", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "SANJEEV KUMAR RAWANI", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "SAWAN KUMAR RAJAK", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "SHLOK KUMAR", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "VISHAL MONDAL", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "VISHNU KUMAR GORAI", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
  { name: "SIDDHANT KUMAR", year: "2025", branch: "Electrical", gender: "Male", package: "3.6 LPA" },
   { name: "MISHBAHUL SARWAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "AYODHYA KUMAR RAM", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "GANESH KISKU", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "JITENDRA KUMAR YADAV", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "MADHUSUDHAN SHARMA", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "NARAYAN PURTI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "NITESH MAHATO", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SOMNATH SARKAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SUMIT KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "RAHUL MAHALI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "Rupesh Kumar Nayak", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "JITEN GORAI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "BALESHWAR MAHTO", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROHIT PANDEY", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "RAHUL KUMAR MURMU", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "AJEET KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROHIT MARANDI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROUNAK KUMAR SHARMA", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "MATHUR SOREN", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROSHAN CHOUBEY", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SHIV KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "JAYRAM GORAIN", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ANUP KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SWARAJ RANJAN CHOUBEY", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "KRISHANA KR MAHTO", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "LAKHIRAM HEMBROM", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "MD SAMAR HASSAN", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "RONAK SINGH", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "TANISHQ SAHU", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "VIKASH KUMAR MANDAL", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "BIREN KUMAR", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "DILIP KUMAR", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "SANDEEP KUMAR MAHATO", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },

],
  },

  {
    company: "USHA MARTIN",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3G1TA4T9GK8yY0uL3dOOdKXkT_RxT7FpaBdizJEZnN6Xs8QHO9Oierzz0XLCvaCdnpQQihcHGC-3XO16FVkvoCb6Nu8vRKeDALcw0hnjtDzOB67qYG3fTps88C5SthXJDISDfwNDnTgQ/s406/Usha-Martin-Limited.jpg",
    students: [
   { name: "RISHABH RAJ", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
   { name: "DEWANSHU KUMAR SHAH", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "VICKY KUMAR MAHTO", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "SAGAR MANDAL", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    ],
  },
  {
    company: "SUBROSH LIMITED",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3G1TA4T9GK8yY0uL3dOOdKXkT_RxT7FpaBdizJEZnN6Xs8QHO9Oierzz0XLCvaCdnpQQihcHGC-3XO16FVkvoCb6Nu8vRKeDALcw0hnjtDzOB67qYG3fTps88C5SthXJDISDfwNDnTgQ/s406/Usha-Martin-Limited.jpg",
     students: [
   { name: "RONAK KUMAR SHARMA", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
   { name: "AJEET KUMAR ", year: 2025, branch: "Mechanical", gender: "Male", package: "3 LPA" },
    { name: "ANKIT MUNDA", year: 2025, branch: "Mechanical", gender: "Male", package: "3 LPA" },
    { name: "ROSHAN CHAUBEY", year: 2025, branch: "Mechanical", gender: "Male", package: "3 LPA" },
    { name: "ANUP KUMAR", year: 2025, branch: "Mechanical", gender: "Male", package: "3 LPA" },
    { name: "ASMIT KUMAR GUPTA", year: 2025, branch: "Mechanical", gender: "Male", package: "3 LPA" },
    ],
  },
  {
  
    company: "L&T",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu_oE0gOQEuqs6mw0bQmUKQYUbAKlGfbjaiFy7xcTTcVO0wzqOtNuDE-bO0ld6FSb7MP4&usqp=CAU",
    students: [
      { name: "Chandan Kumar Singh", year: "2025", branch: "Civil", gender: "Male", package: "3.6 LPA" }
    ],
  },
  {
  
    company: "CMR GREEN TECHNOLOGIES",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjumeLEDe4UAk0g0RZSEh1vVaURaD4pu6iQNqg0uz_runY9P_9PyxI-e2KkmarlPw2Fg&usqp=CAU",
    students: [
     { name: "NIKHIL PRAMANIK", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
{ name: "RITESH KUMAR", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
{ name: "ABHISHEK MANDAL", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "AMIT MAHATO", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "DHARMRAJ MAHATO", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "DINESH KUMAR DAS", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "JITESH KUMAR", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "RAHUL PANDIT", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "RAJU MAHATO", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },
{ name: "SHIKHA MANDAL", year: "2025", branch: "Metallurgy", gender: "Male", package: "3 LPA" },

],
  },
  {
    company: "JINDAL SAW LIMITED",
    logo: "https://images.moneycontrol.com/static-mcnews/2020/08/JINDAL-SAW-770x433.jpg?impolicy=website&width=770&height=431",
    students: [
   { name: "NADEEM ALAM", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
   { name: "DIPAK KUMAR RAJWAR", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "ROBIN PRAMANIK", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
  ],
  },

  {
    company: "MANN HUMMEL FILTER LTD.",
    logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg3G1TA4T9GK8yY0uL3dOOdKXkT_RxT7FpaBdizJEZnN6Xs8QHO9Oierzz0XLCvaCdnpQQihcHGC-3XO16FVkvoCb6Nu8vRKeDALcw0hnjtDzOB67qYG3fTps88C5SthXJDISDfwNDnTgQ/s406/Usha-Martin-Limited.jpg",
    students: [
  { name: "AMAN KUMAR", year: "2025", branch: "Electrical", gender: "Male", package: "3 LPA" },
{ name: "SOMNATH SARKAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROUNAK KUMAR SHARMA", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROSHAN CHOUBEY", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" }
 
],
  },

  {
    company: "HINDALCO",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqPOWMowTb8GzKtud7j2IqmwKW8m0gcDaWeogZEIYypx8o1cbjlKFZTHY4cCirwBcOZQQ&usqp=CAU",
    students: [
   { name: "BISHESHWAR HEMBRAM", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "MANJIT KUMBHAKAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "MD ZISHAN ANSARI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "MISHBAHUL SARWAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "RAHUL KUMAR PAUL", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "RAJ KUMAR NAYAK", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "ROHIT KUMAR PAUL", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SANDEEP KUMAR DANGI", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SHEKHAR KUMAR MAHATO", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SHUBHAM KUMAR", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SHUSHIL KUMAR YADAV", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "TRIPTI SINHA", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "UJJWAL KUMAR SINGH", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" },
{ name: "SACHIN KUMAR YADAV", year: "2025", branch: "Mechanical", gender: "Male", package: "3 LPA" }
    ],
  },
  {
    company: "JSW BELLARY",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlb2zpRDhlz9W1AH9yASq7S8aUih1nD0gyGA&s",
    students: [
   { name: "ARJUN KUMAR MAHATO", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "BIJAY KUMAR SAW", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "DEWANSHU KUMAR SHAH", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "DIPAK KUMAR RAJWAR", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "HARSH PODDER", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "KIRAN KUMAR RAWANI", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "MALAY PANDEY", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "MRINAL MONDAL", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "PANKAJ KUMAR MAHATO", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "RAJEEV CHOUHAN", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "RAKESH MODAK", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "RAVI KUMAR SINGH", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "ROBIN PRAMANIK", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "ROHIT KUMAR DAS", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "SACHIN RABIDAS", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "SAGAR BHANDARI", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "Shreshth Pratap Vishwakarma", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "SONU SHARMA", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "VICKY KUMAR MAHTO", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "VIVEK KUMAR MAHATO", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "SAGAR MANDAL", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
    { name: "ABHISHEK MANDAL", year: 2025, branch: "Metallurgy", gender: "Male", package: "3 LPA" },
     ],
  },
];

const PlacementSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleOpenModal = (company) => {
    setSelectedCompany(company);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedCompany(null);
    setShowModal(false);
  };

  return (
    <>
       <section className="section1">
            <div className="head-box pt-70 pb-70">
              <p className="text">Placement</p>
              <div className="bread1">
                <Link to='/'>Home</Link><span>&nbsp;•&nbsp;</span>
                <a href="/">PLACEMENT</a> <span>&nbsp;•&nbsp;</span>
                <a href="/">Placement</a>
              </div>
            </div>
          </section>
    <section className="placement-custom-section">
      <div className="placement-wrapper">
        <h2 className="placement-title">Our Placement Highlights</h2>
        <p className="placement-subtitle">
          Here's a glimpse of the students placed in top companies.
        </p>

        <div className="placement-grid">
          {placements.map((item, index) => (
            <div className="placement-card" key={index}>
              <img
                src={item.logo}
                className="placement-logo"
                alt={item.company}
              />
              <div className="placement-info">
                <h5>{item.company}</h5>
                <p><strong>Total Students Selected:</strong> {item.students.length}</p>
                <button
                  className="btn set-btn-font"
                  onClick={() => handleOpenModal(item)}
                >
                  Student Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Popup */}
        {showModal && selectedCompany && (
          <div className="placement-modal-overlay" onClick={handleCloseModal}>
            <div className="placement-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h4>{selectedCompany.company} – Selected Students</h4>
                <button className="close-btn" onClick={handleCloseModal}>×</button>
              </div>
              <div className="modal-body">
                <table className="student-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Year</th>
                      <th>Gender</th>
                      <th>Branch</th>
                      <th>Package</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedCompany.students.map((student, idx) => (
                      <tr key={idx}>
                        <td>{student.name}</td>
                        <td>{student.year}</td>
                        <td>{student.gender}</td>
                        <td>{student.branch}</td>
                        <td>{student.package}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
    </>

  );
};

export default PlacementSection;
