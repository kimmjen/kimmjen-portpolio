'use client';

import React from 'react';
import Image from 'next/image';
import resumeData from '@/data/resumeData';
// Import the profile image directly
import profilePic from '../../public/images/profile.jpg';


const HeroSection = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col justify-center">
        <div className="mx-auto max-w-lg px-5 text-center">
          <div className="mb-8 flex flex-col items-center">
            <div className="mb-8 relative w-48 h-48 overflow-hidden rounded-full">
              <Image 
                src={profilePic}
                alt="Profile" 
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 33vw"
                onError={(e) => {
                  // 이미지 로드 실패 시 기본 스타일 적용
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </div>
            <h2 className="text-2xl font-bold uppercase tracking-widest mb-6">
              {resumeData.name}
            </h2>
            <p className="text-base md:text-lg leading-relaxed italic">
              &ldquo;{resumeData.profile}&rdquo;
            </p>
          </div>
          
          <div className="border-t border-[var(--border-color)] pt-8">
            <p className="text-gray-700">
              {resumeData.contact.email}
            </p>
          </div>
        </div>
      </div>
      
      <footer className="pb-10 text-center">
        <div className="text-sm text-gray-500">
          <div>{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'numeric', day: 'numeric' })}</div>
        </div>
      </footer>
    </div>
  );
};

export default HeroSection; 