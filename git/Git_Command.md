# Git Command 정리

### 목록 관련
ls -l : 파일 목록 보기
ls -a : 숨김 파일 보기(숨김처리가 가능한 파일들은 .이 붙어있다)

### 폴더 관련
cd hi : hi 폴더로 이동
mkdir apple : apple 폴더를 생성

cd ../ : 상위 폴더로 이동
cd ../banana : 상위 폴더에 있는 banana로 파일로 이동
cd ./ 현재 폴더로 이동

### 파일 관련
touch banana.md : banana이름을 가진 md파일을 생성(여기서 md는 확장자명이다. md외에도 py, java 등이 작성될 수 있다.)

mv apple fruite : apple파일을 fruite 폴더로 이동시킬 때 사용

cp apple apple2 : apple파일을 apple2파일로 복사

rm apple : apple 파일을 제거
rm apple.`*` : apple뒤에 어떤 확장자이든 이름이 apple이면 모두 다 삭제함
rm * : 현재 폴더에 있는 파일을 삭제 함
rm -r fruite : fruite 폴더 속 파일과 폴더를 삭제함
rm -rf clothes : clothes 폴더 속에 시스템에 영향을 줄 수 있는 파일이 있을 경우 묻게되는데, f값을 포함하여 명령을 내리면 되묻지않고 강제삭제함.

vi 파일명 : vim을 이용하여 파일을 삭제할 경우

### vim 사용 법

#### 모드

1. 기본모드 esc
2. 입력모드 i

#### 저장시

: 입력후, wq(write quite)


### git 명령어 사용 법
git status : 현재 상태 확인
git add hello.md : hello.md 파일을 인덱스에 추가함
git commit : 파일을 commit
git push -u origin 작업브랜치명 : 작업하던 브랜치의 정보를 origin 브랜치에 push
git branch test : test 이름을 가진 branch를 추가한다
git switch test : test 브랜치로 이동한다


