export interface Project {
  title: string;
  date?: string;
  description: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  projects: Project[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface PersonalProject {
  title: string;
  description: string;
  image?: string;
  link?: string;
  period?: string;
  type?: string;
}

export interface ResumeData {
  name: string;
  nameEn: string;
  profile: string;
  contact: {
    phone: string;
    email: string;
    address: string;
    birth: string;
  };
  education: {
    school: string;
    degree: string;
    period: string;
  }[];
  experience: Experience[];
  skills: Skill[];
  projects: PersonalProject[];
}

const resumeData: ResumeData = {
  name: "김제민",
  nameEn: "KIM JE MIN",
  profile: "다양한 경험을 통해 데이터의 중요성을 느끼고 데이터를 다루고 싶은 데이터 엔지니어",
  contact: {
    phone: "010-****-****",
    email: "wpals814@gmail.com",
    address: "서울특별시 강남구 역삼동 809-6",
    birth: "1992.08.14",
  },
  education: [
    {
      school: "대전대학교",
      degree: "경영학 학사",
      period: "2012.03 - 2019.08",
    },
    {
      school: "비트교육센터",
      degree: "AI를 활용한 빅데이터 분석 플랫폼 개발 전문가 과정",
      period: "2019.11 - 2020.05",
    },
    {
      school: "한국소프트웨어 산업협회",
      degree: "아이온커뮤니케이션즈 채용확정형 교육과정",
      period: "2021.08 - 2021.11",
    },
  ],
  experience: [
    {
      company: "소프트웨어공작소",
      position: "선임연구원",
      period: "2024.12 - 2025.03",
      projects: [
        {
          title: "Toyota 텔레매틱스 프로젝트",
          description: [
            "HTML5, CSS3, JavaScript를 활용한 데이터 처리 및 시각화",
            "Git을 활용한 데이터 버전 관리 시스템 구축",
            "UI 컴포넌트 및 레이아웃 구현을 통한 데이터 시각화",
          ],
        },
      ],
    },
    {
      company: "이아이피그리드",
      position: "대리",
      period: "2022.08 - 2024.07",
      projects: [
        {
          title: "EnergyHub 프로젝트",
          date: "2023.12 ~ 2024.07",
          description: [
            "EIP의 VPP 플랫폼의 리소스의 데이터를 가상으로 만드는 서비스 개발",
            "EIP의 VPP의 connector UI, 스케줄 관리, 데이터 업데이트 서비스 개발",
            "Vue.js를 활용한 사용자 중심 대시보드 구현",
            "Python과 FastAPI를 이용한 백엔드 API 서비스 구축",
          ],
        },
        {
          title: "Amadeus 프로젝트",
          date: "2023.12 ~ 2024.07",
          description: [
            "EIP의 VPP 플랫폼의 참여자들의 데이터를 기반으로 Balancing Group 생성 및 분석, 지령 참여 여부를 통해 보고서를 공유하기 위한 서비스 개발",
            "Balancing Group(군집화 되어있는 참여자) 들의 지령 수행 여부를 확인하는 UI 개발",
            "Amadeus 시스템의 전체 알림 UI 개발",
            "데이터 시각화 및 실시간 모니터링 대시보드 구축",
          ],
        },
        {
          title: "Arkn 프로젝트",
          date: "2023.08 ~ 2023.12",
          description: [
            "전기 자동차 충전소를 관리하는 사용자에게 현재 충전 차량 정보, ESS(Energy Storage System) 정보 및 충전소의 배터리 정보를 실시간으로 제공하는 서비스",
            "MBESS(Mobile Battery Energy Service System)의 실시간 충전량, 방전량 및 배터리 수명을 제공하는 UI 개발",
            "배터리 시스템 알림창, 배터리 내 Cell 데이터 실시간 정보를 제공하는 UI개발",
            "Docker를 활용한 서비스 컨테이너화 및 배포",
            "실시간 데이터 시각화 UI 개발 및 대시보드 설계 구현",
          ],
        },
        {
          title: "D3 프로젝트",
          date: "2022.08 ~ 2023.09",
          description: [
            "분산 에너지 자원의 시계열 데이터를 분석하고, 시각화 및 통계 데이터 보고서를 쉽게 생성 및 공유하기 위한 데이터 분석 및 시각화 서비스",
            "기획, 프로세스 문서 및 스프린트 단위로 개발",
            "어플리케이션 레이아웃, 데이터 셋, 어드민 페이지 UI 구현",
            "유저 데이터를 관리하기 위한 백엔드 서버 개발",
            "PostgreSQL을 활용한 RDB 구축 및 최적화",
            "Vue.js를 활용한 사용자 인터페이스 설계",
            "Flask 기반 API 개발",
          ],
        },
      ],
    },
    {
      company: "아이온커뮤니케이션즈",
      position: "사원",
      period: "2021.12 - 2022.08",
      projects: [
        {
          title: "D1 프로젝트",
          date: "2021.12 ~ 2022.08",
          description: [
            "수요 반응 프로그램 평가를 위한 고객 기준 부하, 참여 전력 소비 형태 검증 기준(RRMSE)를 계산 및 예측하는 서비스",
            "고객 기준 부하 예측을 위한 UI 개발",
            "Github Action을 이용한 CI/CD 적용",
            "Github 브랜치 전략 수립",
            "서버 배포 및 릴리즈 노트 작성",
            "데이터 분석 결과 시각화",
            "데이터 이상치 분석",
            "Flask 기반 API 개발",
            "데이터 검증 및 정확도 향상",
          ],
        },
      ],
    },
  ],
  skills: [
    {
      category: "Front-End",
      items: ["Vue.js", "HTML5", "CSS3", "JavaScript"],
    },
    {
      category: "Back-End",
      items: ["Python (Flask, FastAPI)"],
    },
    {
      category: "Database",
      items: ["SQL (PostgreSQL)"],
    },
    {
      category: "Infra",
      items: ["Docker", "Kubernetes"],
    },
    {
      category: "Cloud",
      items: ["AWS EC2", "AWS Elastic Beanstalk", "AWS S3", "AWS Route53"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Slack"],
    },
    {
      category: "Others",
      items: ["CI/CD", "RESTful API", "데이터 시각화"],
    },
  ],
  projects: [
    {
      title: "뜬뜬(ddendden) 프로젝트",
      description: "유재석과 안테나 플러스 제작사의 콘텐츠 중심 웹 플랫폼. React, Next.js, TypeScript, Tailwind CSS로 개발된 팬 커뮤니티 허브로, 다양한 콘텐츠 시리즈(핑계고, 풍향고, 이달의 계원 등)를 제공하며 다국어 지원 및 시상식 시스템을 갖추고 있습니다.",
      period: "2024.11 - 2025.02",
      link: "https://ddendden.vercel.app/",
      type: "개인 프로젝트"
    },
    {
      title: "포트폴리오 웹사이트",
      description: "Next.js와 React를 활용한 개인 포트폴리오 웹사이트. Tailwind CSS로 반응형 디자인을 구현하고 사용자 경험을 개선했습니다.",
      period: "2024",
      link: "https://github.com/kimmjen/kimmjen-portpolio",
      type: "개인 프로젝트"
    },
    {
      title: "EnergyHub 프로젝트",
      description: "EIP의 VPP 플랫폼 리소스 데이터를 가상으로 생성하는 서비스 개발. Vue.js로 대시보드 UI를 구현하고 FastAPI를 이용한 백엔드 API 서비스를 구축했습니다.",
      period: "2023.12 - 2024.07",
      link: "",
      type: "회사 프로젝트"
    },
    {
      title: "Amadeus 프로젝트",
      description: "VPP 플랫폼 참여자 데이터 기반 Balancing Group 생성 및 분석 서비스. 지령 수행 여부를 확인하는 UI와 실시간 모니터링 대시보드를 구축했습니다.",
      period: "2023.12 - 2024.07",
      link: "",
      type: "회사 프로젝트"
    },
    {
      title: "Arkn 프로젝트",
      description: "전기 자동차 충전소 관리 시스템. MBESS의 충전량, 방전량, 배터리 정보를 실시간으로 모니터링하는 UI를 개발하고 Docker로 컨테이너화 및 배포했습니다.",
      period: "2023.08 - 2023.12",
      link: "",
      type: "회사 프로젝트"
    },
    {
      title: "D3 프로젝트",
      description: "분산 에너지 자원의 시계열 데이터 분석 및 시각화 서비스. Vue.js로 사용자 인터페이스를 설계하고 PostgreSQL로 데이터베이스를 구축했습니다.",
      period: "2022.08 - 2023.09",
      link: "",
      type: "회사 프로젝트"
    },
    {
      title: "D1 프로젝트",
      description: "수요 반응 프로그램 평가를 위한 부하 검증 서비스. 고객 기준 부하 예측 UI를 개발하고 Github Action으로 CI/CD를 적용했습니다.",
      period: "2021.12 - 2022.08",
      link: "",
      type: "회사 프로젝트"
    }
  ],
};

export default resumeData; 