# react-without-CRA

Create React App 없이 설정해보는 리액트

<br/>
<br/>

# 프로젝트 설정 과정

### 프로젝트 초기 세팅
1. [8f87d83](https://github.com/llddang/react-without-cra/commit/8f87d83911721340bd1e1c6102c59c6001f46e28) - React 애플리케이션을 실행할 기본 HTML 구조인 **index.html 파일 생성**
2. [a5ce79b](https://github.com/llddang/react-without-cra/commit/a5ce79bf082dfe5fb1f516c71e9e6d9d824fc191) - 별도의 설치 없이 React를 사용하기 위해서 **React와 ReactDOM을 CDN을 통해 추가**
3. [f4986ea](https://github.com/llddang/react-without-cra/commit/f4986ea836593a393fb8a3d16316f25d6f5f3322) - 간단한 React 컴포넌트를 **React 문법으로 생성**
<br/>

### 트랜스파일러 적용하여 JSX 문법 사용
1. [a47fc4a](https://github.com/llddang/react-without-cra/commit/a47fc4ad1c3b41f58d7158d535ea7f18e53fcd17) - CDN을 통해서 Babel 로드 및 트랜스파일할 파일에 **Babel 설정**
2. 런타임이 아닌 **빌드 시점에 트랜스파일** 하도록 Babel 설정 추가
    - [89704df](https://github.com/llddang/react-without-cra/commit/89704df166d782cd39f6dc7e4faa76843d64aff2) - `babel-cli` `@babel/core` `@babel/preset-react` 패키지 설치
    - [86aea80](https://github.com/llddang/react-without-cra/commit/86aea80e3a02c55384513a05f71ba5eb665116f5) - React 코드를 변환하도록 플러그인을 `.babelrc` 파일에 설정
    - [154ce4b](https://github.com/llddang/react-without-cra/commit/154ce4b362c61063b96046a9b039db4d0cbcd395) - build 스크립트 작성 및 참조 스크립트 변경
<br/>

### 성능 개선을 위한 번들러 도입
1. [86ff64f](https://github.com/llddang/react-without-cra/commit/86ff64fdb18e16f68d87f34e820213f7c249dcf0) - 성능 개선을 위해 `Webpack` 패키지 설치 및 환경 설정
<br/>

### 편의를 위한 Plugin 추가
1. [348af31](https://github.com/llddang/react-without-cra/commit/348af3141f504ac2e342741f77488d15f5a775ec) - 캐시 문제를 해결하기 위해 빌드된 **파일 이름에 해시값**을 추가
2. [95cab16](https://github.com/llddang/react-without-cra/commit/95cab16c07014561a59796f13700b0ec2edc5458) - 파일 이름에 해시값이 추가되면 **HTML 파일에서 자동으로** 해당 파일을 **참조**하도록 `html-webpack-plugin` 설정
3. [b684853](https://github.com/llddang/react-without-cra/commit/b684853a92274d330feebdd45b97982e741b3c0c) - 사용하지 않는 빌드 파일들을 **자동으로 삭제**하는 `clean-webpack-plugin` 설정
4. [5eee27a](https://github.com/llddang/react-without-cra/commit/5eee27ac6a575e93da88e3574712fa2e317af1d2) - **코드의 변경사항을 실시간으로 반영**하도록 `webpack-dev-server`로 개발 서버 설정
5. [1c99df4](https://github.com/llddang/react-without-cra/commit/1c99df48f2f9883b650bacc961957a5eec466228) - 개발, 프로덕션, 스테이징 환경에 맞게 **다른 변수를 사용**할 수 있도록 `dotenv-webpack`을 사용해 환경 변수 관리
6. [c4ab7c2](https://github.com/llddang/react-without-cra/commit/c4ab7c2d67f5fa3d6139365c44f9a61c06ecb027) - **OS에** 따른 환경 변수 설정에서 **오류가 나지 않도록** `cross-env` 설치
<br/>
