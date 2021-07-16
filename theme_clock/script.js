

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
const zoneUL = document.getElementById('list-container');

// add timezone searchbar on click of plus sign
addTimezoneBtn.addEventListener('click', (e) => {
    timezoneSearch.classList.add('active');
    addTimezoneBtn.classList.add('in-active');

    if (zoneUL.classList.contains('open')) {
        timezoneSearch.style.borderBottomLeftRadius = "0";
        timezoneSearch.style.borderBottomRightRadius = "0";
    }
});

// add timezone searchbar on click of plus sign
timezoneSearch.addEventListener('keyup', (e) => {
    if(e.keyCode == 13) {
        // e.preventDefault();

        timezoneSearch.classList.remove('active');
        addTimezoneBtn.classList.remove('in-active')
        e.currentTarget.value = '';
    }

});




// TIMEZONE STRINGS
/////////////////////////////////////////////
const tzStrings = [
    {"label":"(GMT-12:00) International Date Line West","value":"Etc/GMT+12"},
    {"label":"(GMT-11:00) Midway Island, Samoa","value":"Pacific/Midway"},
    {"label":"(GMT-10:00) Hawaii","value":"Pacific/Honolulu"},
    {"label":"(GMT-09:00) Alaska","value":"US/Alaska"},
    {"label":"(GMT-08:00) Pacific Time (US & Canada)","value":"America/Los_Angeles"},
    {"label":"(GMT-08:00) Tijuana, Baja California","value":"America/Tijuana"},
    {"label":"(GMT-07:00) Arizona","value":"US/Arizona"},
    {"label":"(GMT-07:00) Chihuahua, La Paz, Mazatlan","value":"America/Chihuahua"},
    {"label":"(GMT-07:00) Mountain Time (US & Canada)","value":"US/Mountain"},
    {"label":"(GMT-06:00) Central America","value":"America/Managua"},
    {"label":"(GMT-06:00) Central Time (US & Canada)","value":"US/Central"},
    {"label":"(GMT-06:00) Guadalajara, Mexico City, Monterrey","value":"America/Mexico_City"},
    {"label":"(GMT-06:00) Saskatchewan","value":"Canada/Saskatchewan"},
    {"label":"(GMT-05:00) Bogota, Lima, Quito, Rio Branco","value":"America/Bogota"},
    {"label":"(GMT-05:00) Eastern Time (US & Canada)","value":"US/Eastern"},
    {"label":"(GMT-05:00) Indiana (East)","value":"US/East-Indiana"},
    {"label":"(GMT-04:00) Atlantic Time (Canada)","value":"Canada/Atlantic"},
    {"label":"(GMT-04:00) Caracas, La Paz","value":"America/Caracas"},
    {"label":"(GMT-04:00) Manaus","value":"America/Manaus"},
    {"label":"(GMT-04:00) Santiago","value":"America/Santiago"},
    {"label":"(GMT-03:30) Newfoundland","value":"Canada/Newfoundland"},
    {"label":"(GMT-03:00) Brasilia","value":"America/Sao_Paulo"},
    {"label":"(GMT-03:00) Buenos Aires, Georgetown","value":"America/Argentina/Buenos_Aires"},
    {"label":"(GMT-03:00) Greenland","value":"America/Godthab"},
    {"label":"(GMT-03:00) Montevideo","value":"America/Montevideo"},
    {"label":"(GMT-02:00) Mid-Atlantic","value":"America/Noronha"},
    {"label":"(GMT-01:00) Cape Verde Is.","value":"Atlantic/Cape_Verde"},
    {"label":"(GMT-01:00) Azores","value":"Atlantic/Azores"},
    {"label":"(GMT+00:00) Casablanca, Monrovia, Reykjavik","value":"Africa/Casablanca"},
    {"label":"(GMT+00:00) Greenwich Mean Time : Dublin, Edinburgh, Lisbon, London","value":"Etc/Greenwich"},
    {"label":"(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna","value":"Europe/Amsterdam"},
    {"label":"(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague","value":"Europe/Belgrade"},
    {"label":"(GMT+01:00) Brussels, Copenhagen, Madrid, Paris","value":"Europe/Brussels"},
    {"label":"(GMT+01:00) Sarajevo, Skopje, Warsaw, Zagreb","value":"Europe/Sarajevo"},
    {"label":"(GMT+01:00) West Central Africa","value":"Africa/Lagos"},
    {"label":"(GMT+02:00) Amman","value":"Asia/Amman"},
    {"label":"(GMT+02:00) Athens, Bucharest, Istanbul","value":"Europe/Athens"},
    {"label":"(GMT+02:00) Beirut","value":"Asia/Beirut"},
    {"label":"(GMT+02:00) Cairo","value":"Africa/Cairo"},
    {"label":"(GMT+02:00) Harare, Pretoria","value":"Africa/Harare"},
    {"label":"(GMT+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius","value":"Europe/Helsinki"},
    {"label":"(GMT+02:00) Jerusalem","value":"Asia/Jerusalem"},
    {"label":"(GMT+02:00) Minsk","value":"Europe/Minsk"},
    {"label":"(GMT+02:00) Windhoek","value":"Africa/Windhoek"},
    {"label":"(GMT+03:00) Kuwait, Riyadh, Baghdad","value":"Asia/Kuwait"},
    {"label":"(GMT+03:00) Moscow, St. Petersburg, Volgograd","value":"Europe/Moscow"},
    {"label":"(GMT+03:00) Nairobi","value":"Africa/Nairobi"},
    {"label":"(GMT+03:00) Tbilisi","value":"Asia/Tbilisi"},
    {"label":"(GMT+03:30) Tehran","value":"Asia/Tehran"},
    {"label":"(GMT+04:00) Abu Dhabi, Muscat","value":"Asia/Muscat"},
    {"label":"(GMT+04:00) Baku","value":"Asia/Baku"},
    {"label":"(GMT+04:00) Yerevan","value":"Asia/Yerevan"},
    {"label":"(GMT+04:30) Kabul","value":"Asia/Kabul"},
    {"label":"(GMT+05:00) Yekaterinburg","value":"Asia/Yekaterinburg"},
    {"label":"(GMT+05:00) Islamabad, Karachi, Tashkent","value":"Asia/Karachi"},
    {"label":"(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi","value":"Asia/Calcutta"},
    {"label":"(GMT+05:30) Sri Jayawardenapura","value":"Asia/Calcutta"},
    {"label":"(GMT+05:45) Kathmandu","value":"Asia/Katmandu"},
    {"label":"(GMT+06:00) Almaty, Novosibirsk","value":"Asia/Almaty"},
    {"label":"(GMT+06:00) Astana, Dhaka","value":"Asia/Dhaka"},
    {"label":"(GMT+06:30) Yangon (Rangoon)","value":"Asia/Rangoon"},
    {"label":"(GMT+07:00) Bangkok, Hanoi, Jakarta","value":"Asia/Bangkok"},
    {"label":"(GMT+07:00) Krasnoyarsk","value":"Asia/Krasnoyarsk"},
    {"label":"(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi","value":"Asia/Hong_Kong"},
    {"label":"(GMT+08:00) Kuala Lumpur, Singapore","value":"Asia/Kuala_Lumpur"},
    {"label":"(GMT+08:00) Irkutsk, Ulaan Bataar","value":"Asia/Irkutsk"},
    {"label":"(GMT+08:00) Perth","value":"Australia/Perth"},
    {"label":"(GMT+08:00) Taipei","value":"Asia/Taipei"},
    {"label":"(GMT+09:00) Osaka, Sapporo, Tokyo","value":"Asia/Tokyo"},
    {"label":"(GMT+09:00) Seoul","value":"Asia/Seoul"},
    {"label":"(GMT+09:00) Yakutsk","value":"Asia/Yakutsk"},
    {"label":"(GMT+09:30) Adelaide","value":"Australia/Adelaide"},
    {"label":"(GMT+09:30) Darwin","value":"Australia/Darwin"},
    {"label":"(GMT+10:00) Brisbane","value":"Australia/Brisbane"},
    {"label":"(GMT+10:00) Canberra, Melbourne, Sydney","value":"Australia/Canberra"},
    {"label":"(GMT+10:00) Hobart","value":"Australia/Hobart"},
    {"label":"(GMT+10:00) Guam, Port Moresby","value":"Pacific/Guam"},
    {"label":"(GMT+10:00) Vladivostok","value":"Asia/Vladivostok"},
    {"label":"(GMT+11:00) Magadan, Solomon Is., New Caledonia","value":"Asia/Magadan"},
    {"label":"(GMT+12:00) Auckland, Wellington","value":"Pacific/Auckland"},
    {"label":"(GMT+12:00) Fiji, Kamchatka, Marshall Is.","value":"Pacific/Fiji"},
    {"label":"(GMT+13:00) Nuku'alofa","value":"Pacific/Tongatapu"}
]

const tzStrings2 = [
    'Europe/Andorra',
  'Asia/Dubai',
  'Asia/Kabul',
  'Europe/Tirane',
  'Asia/Yerevan',
  'Antarctica/Casey',
  'Antarctica/Davis',
  'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Antarctica/Mawson',
  'Antarctica/Palmer',
  'Antarctica/Rothera',
  'Antarctica/Syowa',
  'Antarctica/Troll',
  'Antarctica/Vostok',
  'America/Argentina/Buenos_Aires',
  'America/Argentina/Cordoba',
  'America/Argentina/Salta',
  'America/Argentina/Jujuy',
  'America/Argentina/Tucuman',
  'America/Argentina/Catamarca',
  'America/Argentina/La_Rioja',
  'America/Argentina/San_Juan',
  'America/Argentina/Mendoza',
  'America/Argentina/San_Luis',
  'America/Argentina/Rio_Gallegos',
  'America/Argentina/Ushuaia',
  'Pacific/Pago_Pago',
  'Europe/Vienna',
  'Australia/Lord_Howe',
  'Antarctica/Macquarie',
  'Australia/Hobart',
  'Australia/Currie',
  'Australia/Melbourne',
  'Australia/Sydney',
  'Australia/Broken_Hill',
  'Australia/Brisbane',
  'Australia/Lindeman',
  'Australia/Adelaide',
  'Australia/Darwin',
  'Australia/Perth',
  'Australia/Eucla',
  'Asia/Baku',
  'America/Barbados',
  'Asia/Dhaka',
  'Europe/Brussels',
  'Europe/Sofia',
  'Atlantic/Bermuda',
  'Asia/Brunei',
  'America/La_Paz',
  'America/Noronha',
  'America/Belem',
  'America/Fortaleza',
  'America/Recife',
  'America/Araguaina',
  'America/Maceio',
  'America/Bahia',
  'America/Sao_Paulo',
  'America/Campo_Grande',
  'America/Cuiaba',
  'America/Santarem',
  'America/Porto_Velho',
  'America/Boa_Vista',
  'America/Manaus',
  'America/Eirunepe',
  'America/Rio_Branco',
  'America/Nassau',
  'Asia/Thimphu',
  'Europe/Minsk',
  'America/Belize',
  'America/St_Johns',
  'America/Halifax',
  'America/Glace_Bay',
  'America/Moncton',
  'America/Goose_Bay',
  'America/Blanc-Sablon',
  'America/Toronto',
  'America/Nipigon',
  'America/Thunder_Bay',
  'America/Iqaluit',
  'America/Pangnirtung',
  'America/Atikokan',
  'America/Winnipeg',
  'America/Rainy_River',
  'America/Resolute',
  'America/Rankin_Inlet',
  'America/Regina',
  'America/Swift_Current',
  'America/Edmonton',
  'America/Cambridge_Bay',
  'America/Yellowknife',
  'America/Inuvik',
  'America/Creston',
  'America/Dawson_Creek',
  'America/Fort_Nelson',
  'America/Vancouver',
  'America/Whitehorse',
  'America/Dawson',
  'Indian/Cocos',
  'Europe/Zurich',
  'Africa/Abidjan',
  'Pacific/Rarotonga',
  'America/Santiago',
  'America/Punta_Arenas',
  'Pacific/Easter',
  'Asia/Shanghai',
  'Asia/Urumqi',
  'America/Bogota',
  'America/Costa_Rica',
  'America/Havana',
  'Atlantic/Cape_Verde',
  'America/Curacao',
  'Indian/Christmas',
  'Asia/Nicosia',
  'Asia/Famagusta',
  'Europe/Prague',
  'Europe/Berlin',
  'Europe/Copenhagen',
  'America/Santo_Domingo',
  'Africa/Algiers',
  'America/Guayaquil',
  'Pacific/Galapagos',
  'Europe/Tallinn',
  'Africa/Cairo',
  'Africa/El_Aaiun',
  'Europe/Madrid',
  'Africa/Ceuta',
  'Atlantic/Canary',
  'Europe/Helsinki',
  'Pacific/Fiji',
  'Atlantic/Stanley',
  'Pacific/Chuuk',
  'Pacific/Pohnpei',
  'Pacific/Kosrae',
  'Atlantic/Faroe',
  'Europe/Paris',
  'Europe/London',
  'Asia/Tbilisi',
  'America/Cayenne',
  'Africa/Accra',
  'Europe/Gibraltar',
  'America/Godthab',
  'America/Danmarkshavn',
  'America/Scoresbysund',
  'America/Thule',
  'Europe/Athens',
  'Atlantic/South_Georgia',
  'America/Guatemala',
  'Pacific/Guam',
  'Africa/Bissau',
  'America/Guyana',
  'Asia/Hong_Kong',
  'America/Tegucigalpa',
  'America/Port-au-Prince',
  'Europe/Budapest',
  'Asia/Jakarta',
  'Asia/Pontianak',
  'Asia/Makassar',
  'Asia/Jayapura',
  'Europe/Dublin',
  'Asia/Jerusalem',
  'Asia/Kolkata',
  'Indian/Chagos',
  'Asia/Baghdad',
  'Asia/Tehran',
  'Atlantic/Reykjavik',
  'Europe/Rome',
  'America/Jamaica',
  'Asia/Amman',
  'Asia/Tokyo',
  'Africa/Nairobi',
  'Asia/Bishkek',
  'Pacific/Tarawa',
  'Pacific/Enderbury',
  'Pacific/Kiritimati',
  'Asia/Pyongyang',
  'Asia/Seoul',
  'Asia/Almaty',
  'Asia/Qyzylorda',
  'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
  'Asia/Aqtobe',
  'Asia/Aqtau',
  'Asia/Atyrau',
  'Asia/Oral',
  'Asia/Beirut',
  'Asia/Colombo',
  'Africa/Monrovia',
  'Europe/Vilnius',
  'Europe/Luxembourg',
  'Europe/Riga',
  'Africa/Tripoli',
  'Africa/Casablanca',
  'Europe/Monaco',
  'Europe/Chisinau',
  'Pacific/Majuro',
  'Pacific/Kwajalein',
  'Asia/Yangon',
  'Asia/Ulaanbaatar',
  'Asia/Hovd',
  'Asia/Choibalsan',
  'Asia/Macau',
  'America/Martinique',
  'Europe/Malta',
  'Indian/Mauritius',
  'Indian/Maldives',
  'America/Mexico_City',
  'America/Cancun',
  'America/Merida',
  'America/Monterrey',
  'America/Matamoros',
  'America/Mazatlan',
  'America/Chihuahua',
  'America/Ojinaga',
  'America/Hermosillo',
  'America/Tijuana',
  'America/Bahia_Banderas',
  'Asia/Kuala_Lumpur',
  'Asia/Kuching',
  'Africa/Maputo',
  'Africa/Windhoek',
  'Pacific/Noumea',
  'Pacific/Norfolk',
  'Africa/Lagos',
  'America/Managua',
  'Europe/Amsterdam',
  'Europe/Oslo',
  'Asia/Kathmandu',
  'Pacific/Nauru',
  'Pacific/Niue',
  'Pacific/Auckland',
  'Pacific/Chatham',
  'America/Panama',
  'America/Lima',
  'Pacific/Tahiti',
  'Pacific/Marquesas',
  'Pacific/Gambier',
  'Pacific/Port_Moresby',
  'Pacific/Bougainville',
  'Asia/Manila',
  'Asia/Karachi',
  'Europe/Warsaw',
  'America/Miquelon',
  'Pacific/Pitcairn',
  'America/Puerto_Rico',
  'Asia/Gaza',
  'Asia/Hebron',
  'Europe/Lisbon',
  'Atlantic/Madeira',
  'Atlantic/Azores',
  'Pacific/Palau',
  'America/Asuncion',
  'Asia/Qatar',
  'Indian/Reunion',
  'Europe/Bucharest',
  'Europe/Belgrade',
  'Europe/Kaliningrad',
  'Europe/Moscow',
  'Europe/Simferopol',
  'Europe/Kirov',
  'Europe/Astrakhan',
  'Europe/Volgograd',
  'Europe/Saratov',
  'Europe/Ulyanovsk',
  'Europe/Samara',
  'Asia/Yekaterinburg',
  'Asia/Omsk',
  'Asia/Novosibirsk',
  'Asia/Barnaul',
  'Asia/Tomsk',
  'Asia/Novokuznetsk',
  'Asia/Krasnoyarsk',
  'Asia/Irkutsk',
  'Asia/Chita',
  'Asia/Yakutsk',
  'Asia/Khandyga',
  'Asia/Vladivostok',
  'Asia/Ust-Nera',
  'Asia/Magadan',
  'Asia/Sakhalin',
  'Asia/Srednekolymsk',
  'Asia/Kamchatka',
  'Asia/Anadyr',
  'Asia/Riyadh',
  'Pacific/Guadalcanal',
  'Indian/Mahe',
  'Africa/Khartoum',
  'Europe/Stockholm',
  'Asia/Singapore',
  'America/Paramaribo',
  'Africa/Juba',
  'Africa/Sao_Tome',
  'America/El_Salvador',
  'Asia/Damascus',
  'America/Grand_Turk',
  'Africa/Ndjamena',
  'Indian/Kerguelen',
  'Asia/Bangkok',
  'Asia/Dushanbe',
  'Pacific/Fakaofo',
  'Asia/Dili',
  'Asia/Ashgabat',
  'Africa/Tunis',
  'Pacific/Tongatapu',
  'Europe/Istanbul',
  'America/Port_of_Spain',
  'Pacific/Funafuti',
  'Asia/Taipei',
  'Europe/Kiev',
  'Europe/Uzhgorod',
  'Europe/Zaporozhye',
  'Pacific/Wake',
  'America/New_York',
  'America/Detroit',
  'America/Kentucky/Louisville',
  'America/Kentucky/Monticello',
  'America/Indiana/Indianapolis',
  'America/Indiana/Vincennes',
  'America/Indiana/Winamac',
  'America/Indiana/Marengo',
  'America/Indiana/Petersburg',
  'America/Indiana/Vevay',
  'America/Chicago',
  'America/Indiana/Tell_City',
  'America/Indiana/Knox',
  'America/Menominee',
  'America/North_Dakota/Center',
  'America/North_Dakota/New_Salem',
  'America/North_Dakota/Beulah',
  'America/Denver',
  'America/Boise',
  'America/Phoenix',
  'America/Los_Angeles',
  'America/Anchorage',
  'America/Juneau',
  'America/Sitka',
  'America/Metlakatla',
  'America/Yakutat',
  'America/Nome',
  'America/Adak',
  'Pacific/Honolulu',
  'America/Montevideo',
  'Asia/Samarkand',
  'Asia/Tashkent',
  'America/Caracas',
  'Asia/Ho_Chi_Minh',
  'Pacific/Efate',
  'Pacific/Wallis',
  'Pacific/Apia',
  'Africa/Johannesburg'
];

// console.log(tzStrings[11].label, tzStrings[11].value);
const zoneList = document.getElementById('list-container');
const searchbar = document.getElementById('timezoneSearch');
let timeZones = [];


searchbar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    searchbar.classList.add('open')

    const filteredZones = tzStrings2.filter( zone => {
        return zone.toLowerCase().includes(searchString) 
        // || zone.value.toLowerCase().includes(searchString);
    });
    console.log(filteredZones);
    displayTimezones(filteredZones);
});

const displayTimezones = (zones) => {
    const htmlString = zones
        .map((zone) => {
            return `
            <li class="zone">
                <button class="new-zone-selector">
                    ${zone}
                </button>
            </li>
        `;
        })
        .join('')
        zoneList.innerHTML = htmlString;
};