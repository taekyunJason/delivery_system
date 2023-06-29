## Description

* TDD로 배달 시스템을 구현하였습니다. 
* 메인 시나리오 
  https://stream-talon-ff2.notion.site/1-faf92c276e0b4e8e97c0f14f5ad8f1aa
* 테스트 시나리오
 https://docs.google.com/spreadsheets/d/1mQ0bsoQCnQgZGLudDVAhmYH_gl9yv62YTUIFx7jQ4a4/edit#gid=507459023

## Features
* 유저 : 주문, 장바구니, 리뷰 등록
* 사장님 : 매장등록, 메뉴등록, 배달 상태관리
* 공통 : 로그인, 회원가입 

## Getting Started
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
## Swagger
![화면 캡처 2023-06-30 012752](https://github.com/taekyunJason/delivery_system/assets/44867889/8969e244-f75e-4e92-b32d-b128a92932fb)

## Branch strategy
* main
* develop : 개발용 브랜치
* feature/xx-{feature-name} : 작업을 위한 브랜치 develop에서 가져옴
*  hotfix 브랜치 :  main에서 시급한 작업이 있을 경우 main에서 바로 머지 그 후 develop에 머지

1. pull request 날려서 feature 브랜치 develop으로 merge
2. develop 완료되면 main으로 merge
