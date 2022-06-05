var updateTime = setInterval(showTimeDay, 1000);

function showTimeDay() {
  var today = new Date();
  var time = today.getHours() + ":" + today.getMinutes();

  document.getElementById("topTime").innerHTML = time;

  document.getElementById("time").innerHTML = time;

  var weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  document.getElementById("day").innerHTML = weekDays[today.getDay()];
}

let message = document.getElementById("messageDisplay");
let innerMsg = document.getElementById("innermessage");
let hr = document.createElement("hr");
var msg = document.createElement("p");

function showMessage() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "block";
  document.getElementById("music").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("message").style.color = "white";
}
function showJavaMsg() {
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText =
    "Java is high-level programming language developed by sun Microsystems";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showHtmlMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText =
    "HTML stands for Hyper Text Markup Language. HTML describes the structure of a Web page.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showCssMsg() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = true;
  document.getElementById("btnMusic").disabled = true;
  message.style.display = "none";
  innerMsg.style.display = "block";
  msg.innerText = "Css is a cascading style sheet used for styling purpose.";
  innerMsg.appendChild(msg);
  innerMsg.appendChild(hr);
}
function showWatch() {
  msg.innerText = "";
  document.getElementById("btnMessage").disabled = false;
  document.getElementById("btnMusic").disabled = false;
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "none";

  innerMsg.style.display = "none";
  document.getElementById("timeDisplay").style.display = "block";
  showTimeDay();
  document.getElementById("music").style.color = "white";
  document.getElementById("clock").style.color = "white";
  document.getElementById("message").style.color = "white";
}

var tracks = [
  {
    id: "1",
    name: "Without Me",
    trackSrc:"assests\sorry.mp3",
    artist: "Halsey",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/f/f1/Without_Me_%E2%80%93_Halsey.png?resize=696%2C425&ssl=1",
  },
  {
    id: "2",
    name: "Escape",
    trackSrc: "assests\escape.mp3",
    artist: "Enrique",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Escape_album_cover.jpg/220px-Escape_album_cover.jpg",
  },
  {
    id: "3",
    name: "Beautiful",
    trackSrc: "assests\beautiful.mp3",
    artist: "Akon",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/0/02/Beautiful_%28Akon_song%29.jpg/220px-Beautiful_%28Akon_song%29.jpg",
  },
  {
    id: "4",
    name: "Castle",
    trackSrc: "assests\castle.mp3",
    artist: "Halsey",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a1/Halsey_-_Castle.png/220px-Halsey_-_Castle.png",
  },

];
function playMusic() {
  document.getElementById("timeDisplay").style.display = "none";
  document.getElementById("messageDisplay").style.display = "none";
  document.getElementById("musicDisplay").style.display = "block";
  document.getElementById("message").style.color = "gray";
  document.getElementById("clock").style.color = "gray";
  document.getElementById("music").style.color = "white";
}

let play = document.getElementById("play-pause");
let ol = document.getElementById("orderList");

tracks.forEach((track) => {
  let li = document.createElement("li");
  var audio = document.querySelector("audio");
  li.innerHTML =
    track.id + " . " + track.name + "<span>- " + track.artist + "</span>";
  var img = document.getElementById("songimg");

  li.onclick = function () {
    var trackname = document.getElementById("trackname");
    trackname.innerText = track.name;

    img.setAttribute("src", track.imgSrc);

    audio.pause();
    audio.setAttribute("src", track.trackSrc);
    audio.load();
    audio.play();
    play.innerHTML = "Pause";
  };

  ol.appendChild(li);
});

function playtrack() {
  let audio = document.querySelector("audio");
  if (audio.paused) {
    play.innerHTML = "Pause";
    audio.play();
  } else {
    play.innerHTML = "Play";
    audio.pause();
  }
}
