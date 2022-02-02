// TODO : Add tags such as mobile combatibility

// Go away dont read this shit code

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




function setSettingsCloud(){

  let left = document.getElementById('settings_cloud').style.left;
  /* console.log(left); */
  localStorage.setItem('settings_cloud', left);


  let settings_cloud = localStorage.getItem("settings_cloud");
  console.log('Settings Cloud LocalStorage : ' + settings_cloud);

}

let settings_cloud = localStorage.getItem("settings_cloud");

if (localStorage.hasOwnProperty("settings_cloud")) {
    document.getElementById('settings_cloud').style.left = settings_cloud;
}

function setHomeCloud(){

  let left = document.getElementById('home_cloud').style.left;
  /* console.log(left); */
  localStorage.setItem('home_cloud', left);

  let home_cloud = localStorage.getItem("home_cloud");
  console.log('Homes Cloud LocalStorage : ' + home_cloud);

}

let home_cloud = localStorage.getItem("home_cloud");

if (localStorage.hasOwnProperty("home_cloud")) {
    document.getElementById('home_cloud').style.left = home_cloud;
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
