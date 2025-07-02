import React from 'react'
import './notice.css'
import ListImage from './rightArrow.jpg';
// import {useState}  from 'react';
import {collegeNotices} from './noticeData'
import './NoticeList.css'
// import demoPdf from '../assets/demoPdf.pdf';
import { Link } from 'react-router-dom';
export default function NoticeList(){

      
      // const [selectedCategory, setSelectedCategory] = useState('general');
      return (
        <>
          {/* // This section is getting css from admission css */}
          <section className="section1">
            <div className="head-box pt-70 pb-70">
              <p className="text">Notice</p>
              <div className="bread1">
                <Link to="/">Home</Link>
                <span>&nbsp;•&nbsp;</span>
                <span>&nbsp;•&nbsp;</span>
                <a href="/#/GlobalNotice">Notice</a> <span>&nbsp;•&nbsp;</span>
                <a href="/#/GlobalNotice">Notice</a>
              </div>
            </div>
          </section>
          <h3 className="text-center pt-4 pb-1 text-primary text-decoration-underline">
            Official Notices & Announcements
          </h3>
          <div className="list-of-notice new-list">
            <ul>
              {Object.values(collegeNotices)
                .flat()
                .map((notice, index) => (
                  <div className="notice-list">
                    <img
                      src={ListImage}
                      alt=""
                      className="  left-of-list left2"
                    />
                    <div
                      key={index}
                      className=" pt-2 list-group-item right-of-list right2"
                    >
                      <a
                        href={notice.noticePdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="notice-text"
                      >
                        {notice.text}
                      </a>

                      <li className="calendar-icon ">
                        <i className="fa-solid fa-calendar-days"></i>
                        <span className="notice-date ms-2">{notice.date}</span>
                      </li>
                    </div>
                  </div>
                ))}
            </ul>
          </div>
        </>
      );
}