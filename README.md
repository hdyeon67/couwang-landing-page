# couwang-landing-page

쿠왕(Couwang) 앱의 실제 운영용 소개 페이지이자, 크몽 상품 2 "앱/서비스 소개용 반응형 랜딩페이지 제작"의 포트폴리오 샘플로 활용할 수 있는 정적 반응형 랜딩페이지입니다.

쿠왕은 쿠폰과 기프티콘을 등록하고, 만료일 기준으로 확인하며, 사용 시 필요한 바코드와 멤버십까지 함께 관리할 수 있도록 돕는 Flutter 기반 Android/iOS 모바일 앱 프로젝트입니다.

## 파일 구조

```text
couwang-landing-page/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── logo.png
│   ├── mascot.png
│   ├── app-home.png
│   ├── app-detail.png
│   ├── app-register.png
│   ├── app-membership.png
│   ├── app-alerts.png
│   ├── app-settings.png
│   ├── app-splash.png
│   ├── app-store-badge.png
│   └── google-play-badge.png
└── README.md
```

## 이미지 교체 방법

`assets/` 폴더에 아래 파일명으로 실제 쿠왕 앱 자료를 넣으면 `index.html`에서 바로 연결됩니다.

- `logo.png`: 헤더와 푸터에 사용할 쿠왕 로고
- `mascot.png`: Hero 영역에 배치할 쿠왕 마스코트
- `app-home.png`: 쿠폰 목록 또는 홈 화면
- `app-detail.png`: 쿠폰 상세 화면
- `app-register.png`: 쿠폰 등록 화면
- `app-membership.png`: 멤버십 바코드 화면
- `app-alerts.png`: 알림 화면
- `app-settings.png`: 설정 화면
- `app-splash.png`: 스플래시 또는 브랜드 화면
- `app-store-badge.png`: App Store 배지 이미지
- `google-play-badge.png`: Google Play 배지 이미지

파일명이 달라질 경우 `index.html` 상단의 Asset file map 주석과 실제 `<img src="...">` 경로를 함께 수정합니다.

## 링크 수정 방법

`index.html`과 `js/main.js`에서 아래 placeholder를 실제 링크로 교체합니다.

- `[GOOGLE_PLAY_URL]`: Google Play 앱 상세 페이지
- `[APP_STORE_URL]`: App Store 앱 상세 페이지
- `[CONTACT_URL]`: 문의 페이지, 크몽/숨고/위시켓 상품 링크, 이메일 링크 중 하나

예시:

```html
<a href="https://play.google.com/store/apps/details?id=example">Google Play</a>
```

## 로컬 실행 방법

정적 HTML/CSS/JavaScript 프로젝트라서 별도 빌드 과정이 없습니다.

1. 프로젝트 폴더를 엽니다.
2. `index.html` 파일을 브라우저로 실행합니다.

로컬 서버로 확인하고 싶다면 아래 명령을 사용할 수 있습니다.

```bash
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080`으로 접속합니다.

## GitHub Pages 배포 방법

1. GitHub 저장소에 이 프로젝트를 push합니다.
2. GitHub 저장소의 `Settings`로 이동합니다.
3. `Pages` 메뉴에서 배포 브랜치를 선택합니다.
4. root 경로를 선택한 뒤 저장합니다.
5. 발급된 GitHub Pages URL에서 페이지를 확인합니다.

## Vercel 배포 방법

1. Vercel에서 새 프로젝트를 생성합니다.
2. GitHub 저장소를 연결합니다.
3. Framework Preset은 `Other` 또는 정적 사이트로 둡니다.
4. Build Command는 비워두고, Output Directory도 기본값으로 둡니다.
5. Deploy를 실행합니다.

Netlify에 배포할 때도 별도 빌드 명령 없이 프로젝트 루트를 배포하면 됩니다.

## 포트폴리오 활용 방법

이 랜딩페이지는 쿠왕 앱의 실제 소개 페이지이면서, 앱/서비스 소개용 반응형 랜딩페이지 제작 역량을 보여주는 포트폴리오 샘플입니다.

포트폴리오에 활용할 때는 아래 관점으로 소개할 수 있습니다.

- 실제 앱 프로젝트를 기반으로 한 운영용 랜딩페이지 제작
- 모바일, 태블릿, 데스크톱 반응형 UI 구성
- 서비스 문제 정의, 기능 소개, 화면 흐름, 기술 스택, CTA까지 이어지는 1페이지 구성
- Flutter 기반 Android/iOS 앱 출시 대응 경험과 랜딩페이지 제작 경험을 함께 표현

## 검수 체크리스트

- [ ] 모바일에서 레이아웃 깨짐 없는지 확인
- [ ] 이미지 경로가 실제 `assets/` 파일명과 일치하는지 확인
- [ ] Google Play/App Store 링크 placeholder가 실제 링크로 교체됐는지 확인
- [ ] 한글 문구 오탈자 확인
- [ ] iOS 출시 표현이 App Store 출시 대응 경험 수준으로 정확한지 확인
- [ ] 다운로드 수, 사용자 수, 매출, 1위, 최고, 압도적 같은 과장 표현이 없는지 확인
