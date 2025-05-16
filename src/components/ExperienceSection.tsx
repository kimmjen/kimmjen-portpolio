import React from 'react';
import resumeData from '@/data/resumeData';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="jm-biography">
        <h3 className="uppercase tracking-wider font-bold text-xl text-center mb-8">
          Experience
        </h3>
        
        <div className="jm-biography__wrapper">
          <ul className="jm-history">
            {resumeData.experience.map((exp, index) => (
              <li key={index} className="mb-12">
                <div className="border-l-2 border-[var(--border-color)] pl-4 mb-6">
                  <div className="uppercase tracking-wider font-bold">{exp.company}</div>
                  <div className="text-gray-600 italic mb-2">{exp.position}</div>
                  <div className="text-gray-500 text-sm">{exp.period}</div>
                </div>
                
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="ml-4 mb-8">
                    <h4 className="font-medium mb-2">
                      {project.title}
                      {project.date && <span className="ml-2 text-sm font-normal text-gray-500">({project.date})</span>}
                    </h4>
                    
                    <ul className="list-disc list-inside text-sm space-y-1 text-gray-600">
                      {project.description.map((desc, dIndex) => (
                        <li key={dIndex}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection; 