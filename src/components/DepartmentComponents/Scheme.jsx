import React from 'react';
import './Scheme.css';

// Import PDFs

import pdf7 from '../assets/demoPdf2.pdf';

// Map branch → semester PDFs
const SchemePdf = {
  Mechanical: {
    1: pdf7,
    2: pdf7,
    3: pdf7,
    4: pdf7,
    5: pdf7,
    6: pdf7,
  },
  Civil: {
    1: pdf7,
    2: pdf7,
    3: pdf7,
    4: pdf7,
    5: pdf7,
    6: pdf7,
  },
   Metallurgy: {
    1: pdf7,
    2: pdf7,
    3: pdf7,
    4: pdf7,
    5: pdf7,
    6: pdf7,
  },
   Electrical: {
    1: pdf7,
    2: pdf7,
    3: pdf7,
    4: pdf7,
    5: pdf7,
    6: pdf7,
  },
   Computer: {
    1: pdf7,
    2: pdf7,
    3: pdf7,
    4: pdf7,
    5: pdf7,
    6: pdf7,
  },
};

export default function Scheme({ title, semesters = 6 }) {
  const semList = Array.from({ length: semesters }, (_, i) => i + 1);

  // Handle click to open PDF in new tab
  const handleOpenPdf = (sem) => {
    const pdfUrl = SchemePdf[title]?.[sem];

    if (pdfUrl) {
      window.open(pdfUrl, '_blank');
    } else {
      alert('PDF not available for this semester.');
    }
  };

  return (
    <div className="scheme-container mt-3 ms-lg-5 me-lg-5">
      <h2 className="text-center">{title} Engineering Course Scheme</h2>

      <div
        className="scheme-btn btn-group"
        role="group"
        aria-label="Semester selector"
      >
        {semList.map((sem) => (
          <button
            key={sem}
            type="button"
            className="btn btn-secondary"
            onClick={() => handleOpenPdf(sem)}
          >
            {sem} <sup>sem</sup>
          </button>
        ))}
      </div>
      <p className='mt-2'>Click on corresponding Semeseter to Get Scheme</p>
    </div>
  );
}
