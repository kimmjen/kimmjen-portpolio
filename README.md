# 김제민 포트폴리오

Next.js와 React를 활용한 개인 포트폴리오 웹사이트입니다.

## 주요 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 다크 모드 지원
- 경력, 스킬, 프로젝트 소개
- 이력서 다운로드 (PDF, DOCX 형식)
- 이메일 연락 기능 (모달 형태)

## 시작하기

```bash
# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev
```

## 이메일 기능 설정하기

이메일 기능을 활성화하려면 프로젝트 루트에 `.env.local` 파일을 생성하고 SMTP 설정을 추가하세요:

```
SMTP_HOST=smtp.your-email-provider.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@example.com
SMTP_PASS=your-email-password
```

개발 환경에서는 설정을 하지 않아도 [Ethereal Email](https://ethereal.email/)을 통해 테스트 이메일이 자동으로 설정됩니다.

## 이력서 파일 생성하기

이 프로젝트는 `김제민_이력서.md` 마크다운 파일을 기반으로 PDF와 DOCX 형식의 이력서 파일을 자동으로 생성합니다.

```bash
# 이력서 파일 생성 (PDF, DOCX)
npm run generate-resume
```

생성된 파일은 `public/downloads/` 디렉토리에 저장됩니다.

## 배포

```bash
# 빌드 (이력서 파일 자동 생성 포함)
npm run build

# GitHub Pages 배포
npm run deploy
```

## 기술 스택

- **프론트엔드**: Next.js, React, TypeScript, Tailwind CSS
- **백엔드**: Next.js API Routes
- **이메일**: Nodemailer
- **배포**: Vercel

## 라이센스

MIT 