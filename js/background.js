const images = ["0.jpeg","1.jpeg","2.jpeg"];

const chosenImages = images[Math.floor(Math.random() * images.length)]; //랜덤한 숫자 생성

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImages}`;

document.body.appendChild(bgImage);

