# README
![image](https://user-images.githubusercontent.com/97663140/161197133-fb470543-0ce9-4fb4-8479-a125896ec91b.png)

# 프로젝트 주제
### 복약방
#### 안전한 약 복용을 위한 약 정보 & 소통 사이트

- 임상실험으로 밝혀진 부작용과 주의사항등의 정보를 자세히 알고 싶다.
- 약을 먹으면서 변화되는 증상을 다른 사람들과 나누고 싶다.
- 폐쇄적인 부작용을 개방적으로 공유하고 싶다.

## 팀원

:cyclone: 김영애 (백엔드)

:ocean: 김종원 (백엔드)

:fountain:양지현 (프론트엔드)

:runner: 이동빈 (프론트엔드)

## 프로젝트 기간

2022/3/28 ~ 2022/4/1

## 사용 기술 스택

- React
- css
- javascript
- spring
- mySQL
- JPA
- Google Cloud platform

## 사전 계획

- 노션

[https://successful-hydrofoil-f44.notion.site/1-8d5c1bd184d94ffe9f0fa8277a2f5820](https://www.notion.so/1-8d5c1bd184d94ffe9f0fa8277a2f5820)

![image](https://user-images.githubusercontent.com/97663140/161192927-eb0d2bbe-0362-46f2-89fa-938f0500f53f.png)

![image](https://user-images.githubusercontent.com/97663140/161193088-e2a8a2ff-7450-4cf2-a370-64694d8da45d.png)
<br/>
- 카카오 오븐

https://ovenapp.io/view/d6XaZI0DjKuzgYnvhdzS2d8D7XGRIZ13/05y1u
![image](https://user-images.githubusercontent.com/97663140/161193184-93ec8d21-2f4a-4e57-ac97-98de5f02d6a0.png)
- DB ERD <br/>
![image](https://user-images.githubusercontent.com/97663140/161201645-3cb195b0-6330-43cc-aa46-2949d36ac5c3.png)

## 기능 구현

1.google cloud platform 사용 서버 구축 <br/>
2. 약 정보 조회
 ![image](https://user-images.githubusercontent.com/97663140/161197447-60320d7a-0c8e-4cee-95a6-46f5a9c1b783.png)
 ![image](https://user-images.githubusercontent.com/97663140/161197505-fbae5f70-8a91-4c5c-9d0a-86bd767b88a3.png)
 ![image](https://user-images.githubusercontent.com/97663140/161197580-92fd3918-7e29-4efa-a67f-39fcd33654ad.png)
3. 로그인/회원가입  
 ![image](https://user-images.githubusercontent.com/97663140/161198755-6ab8c4f6-8a3e-4f2c-aa4d-254a4d08b67e.png)
4.카트에 해당하는 테이블에 저장 

## 깃허브 활용
![image](https://user-images.githubusercontent.com/97663140/161192761-d8c9f2c5-fb58-4e7f-9f69-4a5aa57ccf51.png)
<br/>
branch 등 깃허브의 여러가지 기능을 활용하여 협업을 진행하였다. 

## Trouble Shooting

1. 회원가입 요청을 할 때 post요청을 보내면 CORS에러, 400, 500에러가 종류별로 떴다. 

→ METHOD:’post’를 METHOD: ‘POST’로 고쳐주었더니 해결^^

2. 약 정보 조회에서 검색이 한번밖에 안되는 오류

서버 실행후 브라우저에서 처음 검색시 데이터를 잘 받아오지만 두번째 검색시 해당 에러 발생.

" java.lang.IllegalArgumentException: Parameter value [] did not match expected type [java.lang.String (n/a)] "

처음 코드

List findByitemNameContainingOrEfcItemContaining(String itemName, String efcItem);

Spring에서 제공하는 findBy함수를 이용하여 실행하였지만 두번째 실행했을때 해당 키워드가 제대로 입력되지 않았다.

→ 

수정 코드

**[@query](https://github.com/query)**("select m from Medi m where m.itemName like %:itemName% or m.efcItem like %:efcItem%")

List searchMediList(**[@param](https://github.com/param)**("itemName") String itemName, **[@param](https://github.com/param)**("efcItem") String efcItem );

결론 <br/>
복잡한 쿼리문은 해당함수가 잘 인식을 못한다고 하는데 복잡한 쿼리문은 Join 정도 되어야지 복잡한 쿼리문인줄 알았다.포함 단어 찾는 조건문이 있는 쿼리문도 복잡한 쿼리문으로 포함하는가 보다.문제 생길시 빠르게 **[@query](https://github.com/query)** 사용해서 처리하면 된다.

주의사항<br/>쿼리문 작성시 DB 기준이 아닌 Entity 기준으로 작성해야 한다.

3. 다대다 테이블 오류

상의 하에 medicinebox에 primarykey를 사용하지 않기로 했는데 스프링에서 primarykey를 넣으라는 말만 남기고 서버를 켜주지 않았다. 

→ 데이터베이스 테이블인 edicinebox에 primarykey를 다시 추가하여 진행하여서 해결하였다.
