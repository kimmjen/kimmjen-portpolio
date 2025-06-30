import React from 'react';
import resumeData from '@/data/resumeData';

const ProfileSection = () => {
  return (
    <section id="profile" className="py-16">
      <div className="jm-biography">
        <div className="jm-biography__wrapper">
          <div className="jm-biography__info">
            <h4 className="jm-biography__name">{resumeData.nameEn}</h4>
            <p className="jm-biography__date">{resumeData.contact.birth}</p>
          </div>
          
          {/* 이력서 및 경력기술서 다운로드 버튼 */}
          {/* <div className="mt-8 mb-6 flex justify-center gap-4">
            <Link 
              href="/downloads/김제민_이력서.docx" 
              download="김제민_이력서.docx"
              className="inline-flex items-center px-3 py-2 border border-[var(--border-color)] hover:border-black text-sm font-medium tracking-wider transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              이력서 DOCX
            </Link>
            <Link 
              href="/downloads/김제민_이력서.pdf" 
              download="김제민_이력서.pdf"
              className="inline-flex items-center px-3 py-2 border border-[var(--border-color)] hover:border-black text-sm font-medium tracking-wider transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              이력서 PDF
            </Link>
            <Link 
              href="/downloads/김제민_경력기술서.pdf" 
              download="김제민_경력기술서.pdf"
              className="inline-flex items-center px-3 py-2 border border-[var(--border-color)] hover:border-black text-sm font-medium tracking-wider transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              경력기술서 PDF
            </Link>
          </div> */}
          
          <ul className="font-bold leading-tight py-5 text-left mt-8">
            {resumeData.education.map((edu, index) => (
              <li key={index} className="flex">
                <span className="flex-none w-16 inline-block">{edu.period.substring(0, 4)}</span>
                <span className="flex-1">
                  {edu.school} - {edu.degree}
                </span>
              </li>
            ))}
          </ul>
          
          <div className="font-bold leading-tight py-5 text-left mt-8">
            {/* <div className="flex">
              <span className="flex-none w-16 inline-block">연락처</span>
              <span className="flex-1">{resumeData.contact.phone}</span>
            </div> */}
            <div className="flex mt-1">
              <span className="flex-none w-16 inline-block">이메일</span>
              <span className="flex-1">{resumeData.contact.email}</span>
            </div>
            <div className="flex mt-1">
              <span className="flex-none w-16 inline-block">주소</span>
              <span className="flex-1">{resumeData.contact.address}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection; 