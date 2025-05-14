import React from 'react';
import resumeData from '@/data/resumeData';

const ProfileSection = () => {
  return (
    <section id="profile" className="py-16">
      <div className="ma-biography">
        <div className="ma-biography__wrapper">
          <div className="ma-biography__info">
            <h4 className="ma-biography__name">{resumeData.nameEn}</h4>
            <p className="ma-biography__date">{resumeData.contact.birth}</p>
          </div>
          
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
            <div className="flex">
              <span className="flex-none w-16 inline-block">연락처</span>
              <span className="flex-1">{resumeData.contact.phone}</span>
            </div>
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