'use client';

import React from 'react';
import resumeData from '@/data/resumeData';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16">
      <div className="jm-biography">
        <h3 className="text-xl font-bold uppercase tracking-widest text-center mb-12 mt-8">
          PROJECTS
          <div className="w-16 h-0.5 bg-black mx-auto mt-1"></div>
        </h3>
        
        <div className="jm-biography__wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resumeData.projects.map((project, index) => (
              <div key={index} className="border border-[var(--border-color)] hover:shadow-md transition-shadow">
                <div className="bg-gray-100 h-32 flex flex-col items-center justify-center border-b border-[var(--border-color)] p-4">
                  <h4 className="text-xl font-bold text-center">{project.title}</h4>
                  {project.period && 
                    <p className="text-sm text-gray-600 mt-2">{project.period}</p>
                  }
                </div>
                <div className="p-6">
                  <p className="text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    {project.link ? (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block border border-black px-4 py-2 text-sm tracking-wider hover:bg-black hover:text-white transition-colors"
                      >
                        View Project
                      </a>
                    ) : (
                      <span className="text-xs text-gray-500 italic">Private Project</span>
                    )}
                    
                    <div className="text-xs text-gray-500 font-semibold">
                      {project.type || (index === 0 ? '개인 프로젝트' : '회사 프로젝트')}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 