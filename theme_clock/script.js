const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.second');

const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');

const toggle = document.querySelector('.toggle');
const addTimezoneBtn = document.querySelector('.add-timezone');
const timezoneSearch = document.querySelector('.new-timezone-search');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
"Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados",
"Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil",
"British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde",
"Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica",
"Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic",
"Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji",
"Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar",
"Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras",
"Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica",
"Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon",
"Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia",
"Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia",
"Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles",
"New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine",
"Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania",
"Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal",
"Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa",
"South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname",
"Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga",
"Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates",
"United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam",
"Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// light vs dark mode toggle
toggle.addEventListener('click', (e) => {
    const html = document.querySelector('html');

    if (html.classList.contains('dark')) {
        html.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        html.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
});

// set local time
function setLocalTime() {
    // how to get time internationally
    ///////////////////////////////////////////////////////////////////////
    const londonTime = new Date();
    console.log(londonTime.toLocaleString('en-US', {timeZone: 'Europe/London'}))
    ///////////////////////////////////////////////////////////////////////

    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours % 12;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    const secondNeedleRotaion = scale(time.getSeconds(), 0, 60, 0, 360);

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0 ,360)}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0 ,360)}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondNeedleRotaion}deg)`;

    timeEl.innerHTML = `${hoursForClock ? hoursForClock : 12}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};

setLocalTime();

setInterval(setLocalTime, 1000);

// add timezone searchbar on click of plus sign
addTimezoneBtn.addEventListener('click', (e) => {
    timezoneSearch.classList.add('active');
    addTimezoneBtn.classList.add('in-active')
})

// add timezone searchbar on click of plus sign
timezoneSearch.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        // e.preventDefault();

        timezoneSearch.classList.remove('active');
        addTimezoneBtn.classList.remove('in-active')
        e.currentTarget.value = '';
    }
    
});

timezoneSearch.addEventListener('keypress', (e) => {
    let searchInput = document.getElementById('timezoneSearch');

    for (i = 0; i < countries.length; i++) {
        if (countries[i] == searchInput) {
            console.log(countries[i])
        } else {
            console.log("YEAH NAH")
        }
    }
    // console.log(e.code)
});

// timezoneSearch.onclick = function() {
//     let searchInput = document.getElementById('timezoneSearch');

//     for (i = 0; i < countries.length; i++) {
//         if (countries[i] == searchInput) {
//             console.log(countries[i])
//         } else {
//             console.log("YEAH NAH")
//         }
//     }
// }