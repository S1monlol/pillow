const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const Snorlax = async () => {
  await sleep(5000)
  console.log('\n'.repeat('50'));
  console.log(' ______ __ __ __                 \n' +
      '|   __ \\__|  |  |.-----.--.--.--.\n' +
      '|    __/  |  |  ||  _  |  |  |  |\n' +
      '|___|  |__|__|__||_____|________|')
  console.log('\n'.repeat('30'));
}

Snorlax()

console.log(' ______ __ __ __                 \n' +
    '|   __ \\__|  |  |.-----.--.--.--.\n' +
    '|    __/  |  |  ||  _  |  |  |  |\n' +
    '|___|  |__|__|__||_____|________|');


var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}

if (localStorage.hasOwnProperty("favicon")) {
    document.querySelector("link[rel='shortcut icon']").href = favicon;
}

function settitle(title) {
  if (title !== "") {
  localStorage.setItem("title", title)
  document.title = title
  } else {
  localStorage.removeItem("title")
  document.title = "\u200E"
  }
}

function setfavicon(icon) {
  if (icon !== "") {
  localStorage.setItem("favicon", icon)
  document.querySelector("link[rel='shortcut icon']").href = icon;
  } else {
  localStorage.removeItem("favicon")
  document.querySelector("link[rel='shortcut icon']").href = "/img/logo.svg";
  }
}

function setgoogle() {
  settitle("Google")
  setfavicon("https://www.google.com/favicon.ico")
}

function setgoogled() {
  settitle("Google Drive")
  setfavicon("https://www.drive.google.com/favicon.ico")
}

function setedpuzzle() {
  settitle("Edpuzzle")
  setfavicon("https://edpuzzle.imgix.net/favicons/favicon-32.png")
}

function setzoom() {
  settitle("Zoom")
  setfavicon("https://st1.zoom.us/zoom.ico")
}

function setreset() {
  localStorage.removeItem("title")
  localStorage.removeItem("favicon")
  location.reload();
}



function setGameCloud(){
  let left = document.getElementById('games_cloud').style.left;
  /* console.log(left); */
  localStorage.setItem('games_cloud', left);


  let games_cloud = localStorage.getItem("games_cloud");
  console.log('Games Cloud LocalStorage : ' + games_cloud);
}

function setHomeCloud(){

  let left = document.getElementById('home_cloud').style.left;
  /* console.log(left); */
  localStorage.setItem('home_cloud', left);


  let home_cloud = localStorage.getItem("home_cloud");
  console.log('Homes Cloud LocalStorage : ' + home_cloud);

}


let games_cloud = localStorage.getItem("games_cloud");
let home_cloud = localStorage.getItem("home_cloud");


if (localStorage.hasOwnProperty("games_cloud")) {
    document.getElementById('games_cloud').style.left = games_cloud;
}

if (localStorage.hasOwnProperty("home_cloud")) {
    document.getElementById('home_cloud').style.left = home_cloud;
}



var homeSlider = document.getElementById("Home");

homeSlider.value = Number(localStorage.getItem("home_cloud_speed") * 100);

homeSlider.oninput = function() {
  console.log(this.value);
  localStorage.setItem("home_cloud_speed", (this.value / 100));
} 


var gamesSlider = document.getElementById("Games");

gamesSlider.value = Number(localStorage.getItem("games_cloud_speed") * 100);

gamesSlider.oninput = function() {
  console.log(this.value);
  localStorage.setItem("games_cloud_speed", (this.value / 100));
} 

var settingsSlider = document.getElementById("Settings");

settingsSlider.value = Number(localStorage.getItem("settings_cloud_speed") * 100);

settingsSlider.oninput = function() {
  console.log(this.value);
  localStorage.setItem("settings_cloud_speed", (this.value / 100));
} 


if (localStorage.getItem("home_cloud_speed") === null) {
  localStorage.setItem("home_cloud_speed", 0.3)
}

if (localStorage.getItem("games_cloud_speed") === null) {
  localStorage.setItem("games_cloud_speed", 0.5)
}


if (localStorage.getItem("settings_cloud_speed") === null) {
  localStorage.setItem("settings_cloud_speed", 0.3)
}


let corrosion_check = true
let corrosion_or_womginx = document.getElementById('corrosion_or_womginx')
var corrosion = document.getElementById("corrosion");



if(localStorage.getItem('corrosion') === 'true'){
  console.log('Corrosion')

  corrosion_or_womginx.textContent = 'Corrosion'
  corrosion_check = true


} else {
  console.log('Womginx')

  corrosion_or_womginx.textContent = 'Womginx'
  corrosion_check = false

}


corrosion.oninput = function() {
  console.log(this.checked);
  if(corrosion_check === true){
    console.log('Womginx')

    corrosion_or_womginx.textContent = 'Womginx'

    localStorage.setItem("corrosion", false);
    corrosion_check = false


  } else {


    console.log('Corrosion')

    corrosion_or_womginx.textContent = 'Corrosion'

    localStorage.setItem("corrosion", true);
    corrosion_check = true

  }

  this.checked = false;

}


setInterval(function(){

  /* console.log((Number(cloud.style.left.slice(0, -2)) + ).toString() + 'px'); */

  var x = document.getElementsByClassName("clouds");
  for (var i = 0; i < x.length; i++) {

    cloud = x[i];


    if(cloud.id == 'home_cloud') {
      let home_cloud_speed = localStorage.getItem("home_cloud_speed")
      
      cloud.style.left = (Number(cloud.style.left.slice(0, -2)) + Number(home_cloud_speed)).toString() + 'px';
    } else if(cloud.id == 'games_cloud') {
      let games_cloud_speed = localStorage.getItem("games_cloud_speed")
      
      cloud.style.left = (Number(cloud.style.left.slice(0, -2)) + Number(games_cloud_speed)).toString() + 'px';

    } else{

      let settings_cloud_speed = localStorage.getItem("settings_cloud_speed")
      
      cloud.style.left = (Number(cloud.style.left.slice(0, -2)) + Number(settings_cloud_speed)).toString() + 'px';


    }
    if ($(window).width() < Number(cloud.style.left.slice(0, -2))) {

      cloud.style.left = '-200px';

    }
  }
}, 10);





