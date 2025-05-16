'use client';

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt, faCalendar } from '@fortawesome/free-solid-svg-icons';
import resumeData from '@/data/resumeData';
import EmailModal from './EmailModal';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="py-16">
      <div className="jm-biography">
        <h3 className="uppercase tracking-wider font-bold text-xl text-center mb-8">
          Contact
        </h3>
        
        <div className="jm-biography__wrapper text-center">
          <div className="mb-10">
            <p className="text-lg mb-4">{resumeData.contact.email}</p>
            <p className="text-gray-600">{resumeData.contact.phone}</p>
            
            {/* <button
              onClick={openModal}
              className="mt-6 inline-flex items-center px-4 py-2 border border-[var(--border-color)] hover:bg-gray-50 text-sm font-medium tracking-wider transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2 h-4 w-4" />
              이메일 보내기
            </button> */}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
            <div className="border border-[var(--border-color)] flex items-center p-4">
              <FontAwesomeIcon icon={faPhone} className="text-gray-700 text-xs w-3 h-3 mr-2" />
              <p className="text-sm">{resumeData.contact.phone}</p>
            </div>
            
            <div className="border border-[var(--border-color)] flex items-center p-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 text-xs w-3 h-3 mr-2" />
              <p className="text-sm">{resumeData.contact.email}</p>
            </div>
            
            <div className="border border-[var(--border-color)] flex items-center p-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="text-gray-700 text-xs w-3 h-3 mr-2" />
              <p className="text-sm">{resumeData.contact.address}</p>
            </div>
            
            <div className="border border-[var(--border-color)] flex items-center p-4">
              <FontAwesomeIcon icon={faCalendar} className="text-gray-700 text-xs w-3 h-3 mr-2" />
              <p className="text-sm">{resumeData.contact.birth}</p>
            </div>
          </div>
        </div>
      </div>

      {/* 이메일 보내기 모달 */}
      <EmailModal 
        isOpen={isModalOpen}
        onClose={closeModal}
        recipientEmail={resumeData.contact.email}
      />
    </section>
  );
};

export default ContactSection; 