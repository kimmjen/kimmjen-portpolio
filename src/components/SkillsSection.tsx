'use client';

import React from 'react';
import Image from 'next/image';
import resumeData from '@/data/resumeData';

// 기술 아이콘 매핑 객체
const skillIcons: Record<string, string> = {
  // 프론트엔드
  'Vue.js': '/images/skills/vue.svg',
  'HTML5': '/images/skills/html5.svg',
  'CSS3': '/images/skills/css3.svg',
  'JavaScript': '/images/skills/javascript.svg',
  
  // 백엔드
  'Python': '/images/skills/python.svg',
  'Flask': '/images/skills/flask.svg',
  'FastAPI': '/images/skills/fastapi.svg',
  
  // 데이터베이스
  'SQL': '/images/skills/sql.svg',
  'PostgreSQL': '/images/skills/postgresql.svg',
  
  // 인프라
  'Docker': '/images/skills/docker.svg',
  'Kubernetes': '/images/skills/kubernetes.svg',
  
  // 클라우드
  'AWS': '/images/skills/aws.svg',
  
  // 도구
  'Git': '/images/skills/git.svg',
  'GitHub': '/images/skills/github.svg',
  'Slack': '/images/skills/slack.svg',
  
  // 기타
  'CI/CD': '/images/skills/cicd.svg',
  'RESTful API': '/images/skills/api.svg',
  '데이터 시각화': '/images/skills/datavis.svg',
};

// 카테고리 아이콘 매핑
const categoryIcons: Record<string, string> = {
  'FRONT-END': '/images/categories/frontend.svg',
  'BACK-END': '/images/categories/backend.svg',
  'DATABASE': '/images/categories/database.svg',
  'INFRA': '/images/categories/infra.svg',
  'CLOUD': '/images/categories/cloud.svg',
  'TOOLS': '/images/categories/tools.svg',
  'OTHERS': '/images/categories/others.svg',
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16">
      <div className="jm-biography">
        <h3 className="text-xl font-bold uppercase tracking-widest text-center mb-12 mt-8">
          SKILLS
          <div className="w-16 h-0.5 bg-black mx-auto mt-1"></div>
        </h3>
        
        <div className="jm-biography__wrapper">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {resumeData.skills.map((skill, index) => (
              <div 
                key={index} 
                className="border border-[var(--border-color)] p-5 rounded"
              >
                <h4 className="uppercase tracking-wider font-bold mb-4 border-b border-[var(--border-color)] pb-2 flex items-center justify-center">
                  {skill.category}
                </h4>
                
                <ul className="space-y-4">
                  {skill.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm flex items-center justify-center">
                      {getSkillIcon(item) ? (
                        <div className="relative w-4 h-4 mr-2">
                          <Image
                            src={getSkillIcon(item)}
                            alt={item}
                            width={16}
                            height={16}
                            className="object-contain"
                            onError={(e) => {
                              // 이미지 로드 실패 시 숨김 처리
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                      ) : (
                        <div className="w-4 h-4 mr-2"></div>
                      )}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-500 italic text-sm mt-10">
            지속적으로 새로운 기술을 학습하고 있습니다
          </p>
        </div>
      </div>
    </section>
  );
};

// 스킬명에 맞는 아이콘 경로 반환
function getSkillIcon(skillName: string): string {
  // 전체 이름이 일치하는 경우 찾기
  if (skillIcons[skillName]) {
    return skillIcons[skillName];
  }
  
  // 부분 일치하는 경우 찾기
  for (const key in skillIcons) {
    if (skillName.includes(key) || key.includes(skillName)) {
      return skillIcons[key];
    }
  }
  
  // 일치하는 항목이 없으면 빈 문자열 반환 (아이콘 표시 안함)
  return '';
}

export default SkillsSection; 