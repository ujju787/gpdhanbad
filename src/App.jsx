import "./App.css";
import Nav from "./components/navbar";
import Carousel from "./components/carousel";
import HeroSection from "./components/heroSection";
import Placement from "./components/placement";
import Branches from "./components/branches";
import ScrollBtn from "./components/btnComponent";
import BranchComponent from "./components/DepartmentComponents/BranchComponent";
import Footer from "./components/footer";
import ScrollTop from "./components/scrollTop";
import AuthPage from "./components/authPage";
import FacultyInformation from "./components/AdmissionSection/FacultyInformation";
import NoticeList from "./components/noticeSection/NoticeList";
import Admission from "./components/AdmissionSection/Admission";
import FacilitySection from "./components/AdmissionSection/facilities";
import MissionSection from "./components/AdmissionSection/missioVision";
import PrincipalDesk from "./components/AdmissionSection/princpalDesk";
import AboutPage from "./components/AdmissionSection/aboutComponent";
import ContactPage from "./components/ContactComponent";
import GalleryCarousel from "./components/galleryCarousel";
import GalleryComponent from "./components/gallery";
import logoImage from "./components/images/electrical.jpg";
//faculty images
// mechanical faculties
import misir from "./components/images/faculty/mi_sir.jpg";
import pankajSir from "./components/images/faculty/pankajSir.jpg";
import mukeshrajanSir from "./components/images/faculty/mukesh_rajan_sir.jpg";
import dilipSir from "./components/images/faculty/dilipSir.jpg";
import meerajSir from "./components/images/faculty/Meraj.jpg";

// cse faculties
import kalyanSir from "./components/images/faculty/kalyanSir.jpg";
import ishratMam from "./components/images/faculty/ishratMam.jpg";
import afzalSir from "./components/images/faculty/afzalSir.jpg";
import sikendarSir from "./components/images/faculty/sikendarSir.jpg";
import vishakaMam from "./components/images/faculty/vishakaMam.jpg";
// metallurgy faculties
import PrincipalSir from "./components/images/faculty/principalSir.jpg";
import markushSir from "./components/images/faculty/markoshSir.jpg";
import rahulSir from "./components/images/faculty/rahul_sir.jpg";
import ankitSir from "./components/images/faculty/ankit_sir.jpg";


import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div className="app-parent">
          <div className="app">
            <div className="navbar-show">
              <Nav />
            </div>
            <div className="body-show">
              <ScrollBtn />
              <ScrollTop />
              {/* <GalleryPreview/> */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <>
                      <Carousel />
                      <HeroSection />
                      <Branches />
                      <GalleryCarousel />
                    </>
                  }
                />
                <Route
                  path="/GlobalNotice"
                  element={
                    <div>
                      <NoticeList />
                    </div>
                  }
                />

                <Route path="/JumpToGallery" element={<GalleryComponent />} />
                <Route path="/PlacementSection" element={<Placement />} />
                <Route path="/contact us" element={<ContactPage />} />
                <Route path="/about/AboutInstitute" element={<AboutPage />} />
                <Route
                  path="/about/principalDesk"
                  element={<PrincipalDesk />}
                />
                <Route
                  path="/about/mission&vision"
                  element={<MissionSection />}
                />
                <Route path="/about/facility" element={<FacilitySection />} />
                <Route
                  path="/auth/signup"
                  element={<AuthPage mode="signup" />}
                />
                <Route path="/admission" element={<Admission />} />
                <Route path="/auth/login" element={<AuthPage mode="login" />} />
                <Route
                  path="/about/FacultyInformation"
                  element={<FacultyInformation />}
                />
                <Route
                  path="/mechanical"
                  element={
                    <>
                      <BranchComponent
                        title="Mechanical Engineering "
                        backgroundImage="'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdsMo0LqNUEB4DcvjsIantmTvNTiyN3EkMPA&s"
                        titleDescription="Innovating the future with code and creativity"
                        departmentDescription="The Department of Computer Science and Engineering at Government Polytechnic Dhanbad provides a solid foundation in computing principles, programming languages, system design, and industry-relevant technologies like AI, ML, and Cybersecurity. Our mission is to produce highly skilled engineers with hands-on experience"
                        // Faculty one Data of Specified branch in title
                        faculty1Name="Er. Mujahidul islam "
                        faculty1Position="Head of Department"
                        faculty1Image={misir}
                        // Faculty two data of specified branch in title
                        faculty2Name="Mr Mukesh Kumar Rajan"
                        faculty2Position="Lecturer "
                        faculty2Image={mukeshrajanSir}
                        faculty3Name="Mr. Pankaj Kumar Srivastava"
                        faculty3Position="Lecturer(NBL)"
                        faculty3Image={pankajSir}
                        faculty4Name=" Mrs. Dilip Kumar Mahato"
                        faculty4Position="Lecturer (NBL)"
                        faculty4Image={dilipSir}
                        faculty5Name="Md Meraj Uddin AnsarI"
                        faculty5Position="Lecturer (NBL)"
                        faculty5Image={meerajSir}
                        labHeading1="Metallography lab "
                        labDesription1="Used for microstructure analysis using microscopes, polishing machines, and etching techniques."
                        labImage1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                        labHeading2="Heat Tratment Lab "
                        labDesription2="Facilities for annealing, quenching, tempering, and hardness testing of metals."
                        labImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                      />
                    </>
                  }
                />

                <Route
                  path="/civil"
                  element={
                    <BranchComponent
                      title="Civil Engineering "
                      backgroundImage="https://www.shutterstock.com/image-photo/construction-land-surveyor-site-inspection-600nw-2211536107.jpg"
                      titleDescription="Innovating the future with code and creativity"
                      departmentDescription="The Department of Computer Science and Engineering at Government Polytechnic Dhanbad provides a solid foundation in computing principles, programming languages, system design, and industry-relevant technologies like AI, ML, and Cybersecurity. Our mission is to produce highly skilled engineers with hands-on experience"
                      // Faculty one Data of Specified branch in title
                      faculty1Name="Mr. Rajeev Kumar "
                      faculty1Position="Head of Department"
                      faculty1Image={pankajSir}
                      // Faculty two data of specified branch in title
                      faculty2Name="Mr Ramesh Prasad "
                      faculty2Position="Senior Lecturer (Physical Metallurgy)"
                      faculty2Image="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/sanjay_examination-768x829.jpg"
                      faculty3Name="Mrs. Pooja Singh "
                      faculty3Position="Lecturer (Extractive Metallurgy)"
                      faculty3Image="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/sadaf_mam-226x300.jpg"
                      faculty4Name=" Mrs. Nisha Verma"
                      faculty4Position="Lecturer (Materials Science)"
                      faculty4Image="https://chemistry.missouri.edu/sites/default/files/styles/large/public/profile-img/2023-07/nisha-verma.jpg?itok=TamVlmtO"
                      labHeading1="Metallography lab "
                      labDesription1="Used for microstructure analysis using microscopes, polishing machines, and etching techniques."
                      labImage1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                      labHeading2="Heat Tratment Lab "
                      labDesription2="Facilities for annealing, quenching, tempering, and hardness testing of metals."
                      labImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                    />
                  }
                />

                <Route
                  path="/electrical"
                  element={
                    <BranchComponent
                      title="Electrical Engineering "
                      backgroundImage={logoImage}
                      titleDescription="Innovating the future with code and creativity"
                      departmentDescription="The Department of Computer Science and Engineering at Government Polytechnic Dhanbad provides a solid foundation in computing principles, programming languages, system design, and industry-relevant technologies like AI, ML, and Cybersecurity. Our mission is to produce highly skilled engineers with hands-on experience"
                      // Faculty one Data of Specified branch in title
                      faculty1Name="Mr. Rajeev Kumar "
                      faculty1Position="Head of Department"
                      faculty1Image="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/vinay_ji-706x1024.jpg"
                      // Faculty two data of specified branch in title
                      faculty2Name="Mr Ramesh Prasad "
                      faculty2Position="Senior Lecturer (Physical Metallurgy)"
                      faculty2Image="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/sanjay_examination-768x829.jpg"
                      faculty3Name="Mrs. Pooja Singh "
                      faculty3Position="Lecturer (Extractive Metallurgy)"
                      faculty3Image="https://gpdhanbad.ac.in/wp-content/uploads/2025/04/sadaf_mam-226x300.jpg"
                      faculty4Name=" Mrs. Nisha Verma"
                      faculty4Position="Lecturer (Materials Science)"
                      faculty4Image="https://chemistry.missouri.edu/sites/default/files/styles/large/public/profile-img/2023-07/nisha-verma.jpg?itok=TamVlmtO"
                      labHeading1="Metallography lab "
                      labDesription1="Used for microstructure analysis using microscopes, polishing machines, and etching techniques."
                      labImage1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                      labHeading2="Heat Tratment Lab "
                      labDesription2="Facilities for annealing, quenching, tempering, and hardness testing of metals."
                      labImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                    />
                  }
                />

                <Route
                  path="/computer science"
                  element={
                    <BranchComponent
                      title="Computer Science & Engineering "
                      backgroundImage="https://buft.edu.bd/themes/buft/images/cse-teachers/cse-banner.jpg"
                      titleDescription="Innovating the future with code and creativity"
                      departmentDescription="The Department of Computer Science and Engineering at Government Polytechnic Dhanbad provides a solid foundation in computing principles, programming languages, system design, and industry-relevant technologies like AI, ML, and Cybersecurity. Our mission is to produce highly skilled engineers with hands-on experience"
                      // Faculty one Data of Specified branch in title
                      faculty1Name="Mr. Kalyan Paul "
                      faculty1Position="Head of Department"
                      faculty1Image={kalyanSir}
                      // Faculty two data of specified branch in title
                      faculty2Name="Mrs. Ishrat Parween "
                      faculty2Position="Lecturer"
                      faculty2Image={ishratMam}
                      faculty3Name="Md Afzal Ahmad"
                      faculty3Position="Lecturer"
                      faculty3Image={afzalSir}
                      faculty4Name=" Mr. Sikandar Kumar"
                      faculty4Position="Lecturer"
                      faculty4Image={sikendarSir}
                      faculty5Name=" Er. Vishaka "
                      faculty5Position="Lecturer"
                      faculty5Image={vishakaMam}
                      labHeading1="Metallography lab "
                      labDesription1="Used for microstructure analysis using microscopes, polishing machines, and etching techniques."
                      labImage1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                      labHeading2="Heat Tratment Lab "
                      labDesription2="Facilities for annealing, quenching, tempering, and hardness testing of metals."
                      labImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                    />
                  }
                />

                <Route
                  path="/Metallurgy"
                  element={
                    <BranchComponent
                      title="Metallurgy"
                      backgroundImage="https://www.shutterstock.com/image-photo/laser-cut-engraving-metallurgy-milling-600nw-2475387515.jpg"
                      titleDescription="Transforming Metals, Forging Futures"
                      departmentDescription="The Department of Metallurgy Engineering at Government Polytechnic Dhanbad provides comprehensive education in physical metallurgy, extractive metallurgy, and mechanical metallurgy. With emphasis on practical experiments and metallurgical analysis, students gain insights into metal properties, testing, foundry operations, and materials science for industrial applications."
                      // Faculty one Data of Specified branch in title
                      faculty1Name="Mr. Rajesh Kumar "
                      faculty1Position="Principal"
                      faculty1Image={PrincipalSir}
                      // Faculty two data of specified branch in title
                      faculty2Name="Mr. Markush Bakhla "
                      faculty2Position="Lecturer (Material Science)"
                      faculty2Image={markushSir}
                      faculty3Name="Mr. Kumar Rahul"
                      faculty3Position="Lecturer (NBL)"
                      faculty3Image={rahulSir}
                      faculty4Name=" Mr. Ankit Kumar Sinha"
                      faculty4Position="Lecturer (NBL)"
                      faculty4Image={ankitSir}
                      
                      labHeading1="Metallography lab "
                      labDesription1="Used for microstructure analysis using microscopes, polishing machines, and etching techniques."
                      labImage1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                      labHeading2="Heat Tratment Lab "
                      labDesription2="Facilities for annealing, quenching, tempering, and hardness testing of metals."
                      labImage2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRrGn08VGwqiHteCXl8R651z4KgVhoBXzQTA&s"
                    />
                  }
                />
              </Routes>
              <Footer />
            </div>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
