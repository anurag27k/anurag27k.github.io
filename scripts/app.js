//Smooth Scroll
const scroll = new SmoothScroll('.nav-links, .arrow, #work, a[href*="#"]', {
  speed: 900,
});

//Text Fade
// const text = document.querySelector(".intro-text");
const text =
  "I design for User Experiences. I am based /out of Chennai, India. Currently I am /studying at IDC, IIT Bombay";
// const strText = text.textContent;
// const splitText = strText.split("");
const splitText = text.split("");
// text.textContent = "";

for (let i = 0; i < splitText.length; i++) {
  if (splitText[i] == "/") {
    //  text.innerHTML += "<br>";
    document.getElementById("abcd").innerHTML += "<br>";
    continue;
  }
  text.innerHTML += "<span>" + splitText[i] + "</span>";
  document.getElementById("abcd").innerHTML +=
    "<span>" + splitText[i] + "</span>";

  if (splitText[i] === " ") {
    // text.innerHTML += "<span>" + "&nbsp" + "</span>";
    document.getElementById("abcd").innerHTML += "<span>" + "&nbsp" + "</span>";
    continue;
  }
}

let char = 0;
let timer = setInterval(onTick, 10);

function onTick() {
  const spans = document.querySelectorAll("span")[char];
  spans.classList.add("fadein");
  char++;
  // char-=1
  if (char > 0) {
    complete();
    return;
  }
}

function complete() {
  // clearInterval(timer);
  timer = null;
}
$(".blank").hide();
