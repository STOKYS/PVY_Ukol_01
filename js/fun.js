let x = 20;
let spin = 0;
let arr = [-1, 1];
let fonts = ["Arial", "Segoe UI", "Cambria", "Courier New", "Impact", "Times New Roman", "Trebuchet MS", "Georgia", "Palatino Linotype", "Comic Sans MS", "Lucida Sans Unicode", "Tahoma", "Lucida Console"];
let align = ["right", "left", "center", "justify"];
/*let posOrNeg, randSize, randSizeFin, randR, randG, randB, randColor, randFont, randAlign;*/
const main = document.getElementsByTagName("MAIN")[0];
const titleText = document.getElementById("titleText");
const footer = document.getElementsByTagName("FOOTER")[0];
const lenghtx = document.getElementById("length");
const width = document.getElementById("width");
const height = document.getElementById("height");
const radius = document.getElementById("radius");
const submit = document.getElementById("submit");
window.onload = start;
/*Events*/
window.addEventListener("mousewheel", textChange);
titleText.addEventListener("click", titleChange);
footer.addEventListener("mouseover", footerChange);
submit.addEventListener("click", calculate);

function calculate() {
    if (lenghtx.value !== "") {
        document.getElementById("resultCubeS").innerText = "Surface of that cube is: " + 6 * lenghtx.value * lenghtx.value;
        document.getElementById("resultCubeV").innerText = "Volume of that cube is: " + lenghtx.value * lenghtx.value * lenghtx.value;
    } else {
        document.getElementById("resultCubeS").innerText = "Not enought data";
        document.getElementById("resultCubeV").innerText = "Not enought data";
    }
    if (width.value !== "" && lenghtx.value !== "" && height.value !== "") {
        document.getElementById("resultPrismS").innerText = "Surface of that prism is: " + 2 * (width.value * lenghtx.value + height.value * lenghtx.value + height.value * width.value);
        document.getElementById("resultPrismV").innerText = "Volume of that prism is: " + width.value * lenghtx.value * height.value;
    } else {
        document.getElementById("resultPrismS").innerText = "Not enought data";
        document.getElementById("resultPrismV").innerText = "Not enought data";
    }
    if (radius.value !== "" && height.value !== "") {
        document.getElementById("resultCylinderS").innerText = "Surface of that cylinder is: " + 2 * Math.PI * radius.value * height.value + 2 * Math.PI * radius.value * radius.value;
        document.getElementById("resultCylinderV").innerText = "Volume of that cylinder is: " + Math.PI * radius.value * radius.value * height.value;
    } else {
        document.getElementById("resultCylinderS").innerText = "Not enought data";
        document.getElementById("resultCylinderV").innerText = "Not enought data";
    }
    if (radius.value !== "") {
        document.getElementById("resultSphereS").innerText = "Surface of that sphere is: " + 4 * Math.PI * radius.value * radius.value;
        document.getElementById("resultSphereV").innerText = "Volume of that sphere is: " + 3 / 4 * Math.PI * radius.value * radius.value * radius.value;
    } else {
        document.getElementById("resultSphereS").innerText = "Not enought data";
        document.getElementById("resultSphereV").innerText = "Not enought data";
    }
}

/*This is where the fun begins*/
function start() {
    setInterval(loading, 20);
}

function textChange() {
    posOrNeg = Math.floor(Math.random() * 2);
    randSize = (Math.floor(Math.random() * 10) + 1) / 10;
    randSizeFin = arr[posOrNeg] * randSize;
    x = randSizeFin + x;
    main.style.fontSize = x + "px";
    randR = Math.floor(Math.random() * 256);
    randG = Math.floor(Math.random() * 256);
    randB = Math.floor(Math.random() * 256);
    randColor = "rgb(" + randR + ", " + randG + ", " + randB + ")";
    main.style.color = randColor;
    randFont = Math.floor(Math.random() * fonts.length);
    main.style.fontFamily = fonts[randFont];
    randAlign = Math.floor(Math.random() * align.length);
    main.style.textAlign = align[randAlign];
    if (Math.floor(Math.random() * 15) == 2) {
        main.style.display = "none";
    } else {
        main.style.display = "block";
    }
}

function titleChange() {
    titleText.style.transform = "rotateX(180deg)";
    document.getElementsByTagName("HEADER")[0].style.filter = "invert(100%)";
}

function footerChange() {
    document.getElementsByTagName("BODY")[0].style.filter = "invert(100%)";
}

function loading() {
    spin++;
    document.getElementsByTagName("IMG")[0].style.transform = "rotate(" + spin + "deg)";
    if (spin > 1000) {
        document.getElementById("info").style.color = "rgba(200,200,200," + spin / 10000 + ")";
    }
    if (window.pageYOffset > 1050) {
        document.getElementById("loading").style.display = "none";
    }
}