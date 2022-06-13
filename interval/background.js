const images = ["hyun.jpeg","gun.jpeg","goack.png"];

const chooseimg = images[Math.floor(Math.random() * images.length)];
//console.log(chooseimg);
const bgImage = document.createElement("img");
bgImage.src = `img/${chooseimg}`;
//console.log(bgImage);
document.body.appendChild(bgImage);
