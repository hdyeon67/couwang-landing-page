# couwang-landing-page

쿠왕(Couwang) 앱의 실제 운영용 소개 페이지이자, 크몽 상품 2 "앱/서비스 소개용 반응형 랜딩페이지 제작"의 포트폴리오 샘플로 활용할 수 있는 정적 반응형 랜딩페이지입니다.

배포 URL: `https://hdyeon67.github.io/couwang-landing-page/`

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
│   ├── google-play-badge.png
│   ├── og-image.png
│   └── favicon.png
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
- `google-play-badge.png`: Google Play 공식 배지 이미지
- `app-store-badge.png`: App Store 공식 배지 이미지
- `og-image.png`: 카카오톡, 문자, SNS 공유에 사용할 대표 이미지
- `favicon.png`: 브라우저 favicon과 Apple Touch Icon 이미지

파일명이 달라질 경우 `index.html` 상단의 Asset file map 주석과 실제 `<img src="...">` 경로를 함께 수정합니다.

스크린샷 이미지 용량이 커질 경우 WebP 변환을 권장합니다. 단, 파일명을 바꾸면 `index.html`의 이미지 경로도 함께 바꿔야 합니다.

## 스토어 링크 수정 위치

현재 실제 스토어 링크가 `index.html`에 반영되어 있습니다.

- Google Play: `https://play.google.com/store/apps/details?id=com.fineboll.couwangApp`
- App Store: `https://apps.apple.com/kr/app/%EC%BF%A0%EC%99%95-%EC%BF%A0%ED%8F%B0-%EA%B8%B0%ED%94%84%ED%8B%B0%EC%BD%98-%EB%A7%8C%EB%A3%8C-%EC%95%8C%EB%A6%BC/id6761751304`

스토어 주소가 바뀌면 `index.html`에서 위 URL을 검색해 Hero와 Footer 링크를 함께 교체합니다.

## 문의 링크 수정 방법

문의 CTA는 앱 운영용과 포트폴리오용 안내를 분리해서 구성합니다.

- 앱 문의하기: `mailto:fineboll67@gmail.com?subject=%EC%BF%A0%EC%99%95%20%EC%95%B1%20%EB%AC%B8%EC%9D%98`
- 인스타그램에서 소식 보기: `https://www.instagram.com/couwang.app/`
- 랜딩페이지 제작 문의: 별도 직접 링크 없이, 이용 중인 크몽/숨고/위시켓 플랫폼 메시지로 문의하도록 안내 문구만 노출

앱 운영 이메일을 바꾸려면 `index.html`에서 `mailto:fineboll67@gmail.com`을 검색해 교체합니다. 제목도 바꾸려면 `subject=` 뒤의 URL 인코딩된 문구를 함께 수정합니다.

인스타그램 주소를 바꾸려면 `index.html`에서 `https://www.instagram.com/couwang.app/`를 검색해 교체합니다. 인스타그램은 외부 링크이므로 `target="_blank"`와 `rel="noopener noreferrer"`를 유지합니다.

## 스토어 배지 교체 방법

Hero와 Footer는 아래 파일을 공식 스토어 배지 이미지로 사용합니다.

- `assets/google-play-badge.png`
- `assets/app-store-badge.png`

배지 이미지를 교체할 때는 같은 파일명으로 덮어쓰면 됩니다. 다른 파일명을 사용할 경우 `index.html`의 `<img src="...">`를 함께 수정합니다.

## OG 이미지와 favicon

`index.html`의 공유 이미지는 아래 경로로 연결되어 있습니다.

```html
<meta property="og:image" content="https://hdyeon67.github.io/couwang-landing-page/assets/og-image.png">
```

`og-image.png`는 1200 x 630 비율을 권장합니다. 쿠왕 로고, 마스코트, 앱 대표 화면이 함께 보이는 구성이 적합합니다.

favicon과 Apple Touch Icon은 현재 `assets/favicon.png`를 사용합니다.

```html
<link rel="icon" type="image/png" href="assets/favicon.png">
<link rel="apple-touch-icon" href="assets/favicon.png">
```

favicon 파일명을 바꾸면 `index.html`의 위 경로를 함께 수정합니다.

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

1. GitHub 저장소에 변경사항을 push합니다.
2. GitHub 저장소의 `Settings`로 이동합니다.
3. 왼쪽 메뉴에서 `Pages`를 선택합니다.
4. `Build and deployment`의 Source를 `Deploy from a branch`로 설정합니다.
5. Branch는 `main`, 폴더는 `/ (root)`를 선택합니다.
6. 저장 후 `https://hdyeon67.github.io/couwang-landing-page/`에서 배포 결과를 확인합니다.

## Vercel 배포 방법

1. Vercel에서 새 프로젝트를 생성합니다.
2. GitHub 저장소를 연결합니다.
3. Framework Preset은 `Other` 또는 정적 사이트로 둡니다.
4. Build Command는 비워두고, Output Directory도 기본값으로 둡니다.
5. Deploy를 실행합니다.

Netlify에 배포할 때도 별도 빌드 명령 없이 프로젝트 루트를 배포하면 됩니다.

## 크몽 상품 2 포트폴리오 활용 방법

이 랜딩페이지는 쿠왕 앱의 실제 소개 페이지이면서, 앱/서비스 소개용 반응형 랜딩페이지 제작 역량을 보여주는 포트폴리오 샘플입니다.

포트폴리오에 활용할 때는 아래 관점으로 소개할 수 있습니다.

- 실제 앱 프로젝트를 기반으로 한 운영용 랜딩페이지 제작
- 모바일, 태블릿, 데스크톱 반응형 UI 구성
- 서비스 문제 정의, 기능 소개, 화면 흐름, 기술 스택, CTA까지 이어지는 1페이지 구성
- Google Play와 App Store 출시 대응 경험을 바탕으로 한 앱 소개 페이지 구성
- Flutter 기반 Android/iOS 앱 경험과 HTML/CSS/JavaScript 랜딩페이지 제작 경험을 함께 표현
- 외주 문의 유도는 과하게 노출하지 않고, 플랫폼 메시지 안내 문구로만 처리

## 배포 후 확인 체크리스트

- [ ] Google Play 링크 정상 동작
- [ ] App Store 링크 정상 동작
- [ ] Hero 스토어 배지 이미지 표시
- [ ] Footer 스토어 링크 표시
- [ ] 모바일 375px 화면에서 레이아웃 깨짐 없음
- [ ] 태블릿 화면에서 앱 스크린샷 배치 자연스러움
- [ ] 데스크톱 화면에서 Hero와 App Screens 가독성 양호
- [ ] 모든 이미지 alt 입력 완료
- [ ] SEO title/description 입력 완료
- [ ] OG 메타태그 입력 완료
- [ ] `assets/og-image.png` 추가 완료
- [ ] favicon 경로 확인 완료
- [ ] Apple Touch Icon 경로 확인 완료
- [ ] 앱 문의 mailto 링크 정상 동작
- [ ] 인스타그램 링크 정상 동작
- [ ] 외주 문의가 플랫폼 메시지 안내 문구로만 표시됨
- [ ] 과장 표현 없음
- [ ] Android/iOS 출시 표현 정확함
