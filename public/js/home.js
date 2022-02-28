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




/* Chosing Ultraviolet or Aero */

function uv() {
    console.log('uv work');
    /*
    const iframe = document.getElementById("stealth");
    const main = document.querySelector('main') || {};
    const input = document.getElementById("name");
    iframe.style.display = "initial";
    main.style.display = "none";
    iframe.setAttribute("src", "https://www.example.com" + input.value);
    */
}

const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
            
        if (!isUrl(url))
            url = 'https://search.brave.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://')))
            url = 'http://' + url;
        
        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

    function isUrl(val = ''){
        if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
        return false;
    };

console.log(localStorage.getItem("corrosion"))

/*
if(localStorage.getItem("corrosion") === 'true') {
    const search = document.getElementById('search');
    search.removeAttribute("action");
    search.removeAttribute("method");
    search.setAttribute("onsubmit", "corrosion(); return false;");
} else {
    const search = document.getElementById('search');
    search.removeAttribute("action");
    search.removeAttribute("method");
    search.setAttribute("onsubmit", "womginx(); return false;");
}
*/

/* Title stuff */

var title = localStorage.getItem("title")
var favicon = localStorage.getItem("favicon")

if (localStorage.hasOwnProperty("title")) {
    document.title = title
}

if (localStorage.hasOwnProperty("favicon")) {
    document.querySelector("link[rel='shortcut icon']").href = favicon;
}


/* Cloud Stuff */

function setGameCloud(){
    let left = document.getElementById('games_cloud').style.left;
    /* console.log(left); */
    localStorage.setItem('games_cloud', left);


    let games_cloud = localStorage.getItem("games_cloud");
    console.log('Games Cloud LocalStorage : ' + games_cloud);
}

function setSettingsCloud(){

    let left = document.getElementById('settings_cloud').style.left;
    /* console.log(left); */
    localStorage.setItem('settings_cloud', left);


    let settings_cloud = localStorage.getItem("settings_cloud");
    console.log('Settings Cloud LocalStorage : ' + settings_cloud);

}


let games_cloud = localStorage.getItem("games_cloud");
let settings_cloud = localStorage.getItem("settings_cloud");


if (localStorage.hasOwnProperty("games_cloud")) {
    document.getElementById('games_cloud').style.left = games_cloud;
}

if (localStorage.hasOwnProperty("settings_cloud")) {
    document.getElementById('settings_cloud').style.left = settings_cloud;
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


/* Cloud Movement stuff */

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