const body = document.querySelector('body');

const IMG_NUMBER = 5;

// function paintImage(imgNumber) {
//   // 이미지를객체를 생성
//   const image = new Image();
//   //   이미지의 경로 정의
//   image.src = `asset/img/main_bg.jpg`;
//   //   image 객체에 bgImage 라는 클래스값 추가
//   image.classList.add('bgImage');
//   // body tag에 image라는 태그 추가
//   body.appendChild(image);
// }

// function genRandom() {
//   const number = Math.floor(Math.random() * IMG_NUMBER);
//   return number;
// }

// function init() {
//   const randomNumber = genRandom();
//   paintImage(randomNumber);
// }

// init();

function paintImage() {
  // 이미지를객체를 생성
  const image = new Image();
  //   이미지의 경로 정의
  image.src = `asset/img/main_bg.jpg`;
  //   image 객체에 bgImage 라는 클래스값 추가
  image.classList.add('bgImage');
  // body tag에 image라는 태그 추가
  body.appendChild(image);
}

// paintImage();
// File dirFile=new File(path);
// File []fileList=dirFile.listFiles();
// for(File tempFile : fileList) {
//   if(tempFile.isFile()) {
//     String tempPath=tempFile.getParent();
//     String tempFileName=tempFile.getName();
//     System.out.println("Path="+tempPath);
//     System.out.println("FileName="+tempFileName);
//     /*** Do something withd tempPath and temp FileName ^^; ***/
//   }
// }
