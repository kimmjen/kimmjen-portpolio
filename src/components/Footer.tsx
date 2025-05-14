import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 border-t border-[var(--border-color)]">
      <div className="text-center px-6">
        <p className="text-gray-500 text-sm">
          &copy; {currentYear} KIM JE MIN. All rights reserved.
        </p>
        <p className="mt-4 text-gray-400 text-xs italic">
          &ldquo;다양한 경험을 통해 데이터의 중요성을 느끼고 데이터를 다루고 싶은 데이터 엔지니어&rdquo;
        </p>
      </div>
    </footer>
  );
};

export default Footer; 