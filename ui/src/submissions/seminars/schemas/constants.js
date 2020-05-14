import getValue from '../../common/getValue';
import { DATE_RANGE_FORMAT, TIME_FORMAT } from '../../../common/constants';

export const SEMINAR_DATETIME_FORMAT = `${DATE_RANGE_FORMAT} ${TIME_FORMAT}`;

export const timeZoneOptions = [
  { value: 'America/Adak' },
  { value: 'America/Anchorage' },
  { value: 'America/Anguilla' },
  { value: 'America/Antigua' },
  { value: 'America/Araguaina' },
  { value: 'America/Argentina/Buenos_Aires' },
  { value: 'America/Argentina/Catamarca' },
  { value: 'America/Argentina/ComodRivadavia' },
  { value: 'America/Argentina/Cordoba' },
  { value: 'America/Argentina/Jujuy' },
  { value: 'America/Argentina/La_Rioja' },
  { value: 'America/Argentina/Mendoza' },
  { value: 'America/Argentina/Rio_Gallegos' },
  { value: 'America/Argentina/Salta' },
  { value: 'America/Argentina/San_Juan' },
  { value: 'America/Argentina/San_Luis' },
  { value: 'America/Argentina/Tucuman' },
  { value: 'America/Argentina/Ushuaia' },
  { value: 'America/Aruba' },
  { value: 'America/Asuncion' },
  { value: 'America/Atikokan' },
  { value: 'America/Atka' },
  { value: 'America/Bahia' },
  { value: 'America/Barbados' },
  { value: 'America/Belem' },
  { value: 'America/Belize' },
  { value: 'America/Blanc-Sablon' },
  { value: 'America/Boa_Vista' },
  { value: 'America/Bogota' },
  { value: 'America/Boise' },
  { value: 'America/Buenos_Aires' },
  { value: 'America/Cambridge_Bay' },
  { value: 'America/Campo_Grande' },
  { value: 'America/Cancun' },
  { value: 'America/Caracas' },
  { value: 'America/Catamarca' },
  { value: 'America/Cayenne' },
  { value: 'America/Cayman' },
  { value: 'America/Chicago' },
  { value: 'America/Chihuahua' },
  { value: 'America/Coral_Harbour' },
  { value: 'America/Cordoba' },
  { value: 'America/Costa_Rica' },
  { value: 'America/Cuiaba' },
  { value: 'America/Curacao' },
  { value: 'America/Danmarkshavn' },
  { value: 'America/Dawson' },
  { value: 'America/Dawson_Creek' },
  { value: 'America/Denver' },
  { value: 'America/Detroit' },
  { value: 'America/Dominica' },
  { value: 'America/Edmonton' },
  { value: 'America/Eirunepe' },
  { value: 'America/El_Salvador' },
  { value: 'America/Ensenada' },
  { value: 'America/Fortaleza' },
  { value: 'America/Fort_Wayne' },
  { value: 'America/Glace_Bay' },
  { value: 'America/Godthab' },
  { value: 'America/Goose_Bay' },
  { value: 'America/Grand_Turk' },
  { value: 'America/Grenada' },
  { value: 'America/Guadeloupe' },
  { value: 'America/Guatemala' },
  { value: 'America/Guayaquil' },
  { value: 'America/Guyana' },
  { value: 'America/Halifax' },
  { value: 'America/Havana' },
  { value: 'America/Hermosillo' },
  { value: 'America/Indiana/Indianapolis' },
  { value: 'America/Indiana/Knox' },
  { value: 'America/Indiana/Marengo' },
  { value: 'America/Indiana/Petersburg' },
  { value: 'America/Indiana/Tell_City' },
  { value: 'America/Indiana/Vevay' },
  { value: 'America/Indiana/Vincennes' },
  { value: 'America/Indiana/Winamac' },
  { value: 'America/Indianapolis' },
  { value: 'America/Inuvik' },
  { value: 'America/Iqaluit' },
  { value: 'America/Jamaica' },
  { value: 'America/Jujuy' },
  { value: 'America/Juneau' },
  { value: 'America/Kentucky/Louisville' },
  { value: 'America/Kentucky/Monticello' },
  { value: 'America/Knox_IN' },
  { value: 'America/La_Paz' },
  { value: 'America/Lima' },
  { value: 'America/Los_Angeles' },
  { value: 'America/Louisville' },
  { value: 'America/Maceio' },
  { value: 'America/Managua' },
  { value: 'America/Manaus' },
  { value: 'America/Marigot' },
  { value: 'America/Martinique' },
  { value: 'America/Matamoros' },
  { value: 'America/Mazatlan' },
  { value: 'America/Mendoza' },
  { value: 'America/Menominee' },
  { value: 'America/Merida' },
  { value: 'America/Mexico_City' },
  { value: 'America/Miquelon' },
  { value: 'America/Moncton' },
  { value: 'America/Monterrey' },
  { value: 'America/Montevideo' },
  { value: 'America/Montreal' },
  { value: 'America/Montserrat' },
  { value: 'America/Nassau' },
  { value: 'America/New_York' },
  { value: 'America/Nipigon' },
  { value: 'America/Nome' },
  { value: 'America/Noronha' },
  { value: 'America/North_Dakota/Center' },
  { value: 'America/North_Dakota/New_Salem' },
  { value: 'America/Ojinaga' },
  { value: 'America/Panama' },
  { value: 'America/Pangnirtung' },
  { value: 'America/Paramaribo' },
  { value: 'America/Phoenix' },
  { value: 'America/Port-au-Prince' },
  { value: 'America/Porto_Acre' },
  { value: 'America/Port_of_Spain' },
  { value: 'America/Porto_Velho' },
  { value: 'America/Puerto_Rico' },
  { value: 'America/Rainy_River' },
  { value: 'America/Rankin_Inlet' },
  { value: 'America/Recife' },
  { value: 'America/Regina' },
  { value: 'America/Resolute' },
  { value: 'America/Rio_Branco' },
  { value: 'America/Rosario' },
  { value: 'America/Santa_Isabel' },
  { value: 'America/Santarem' },
  { value: 'America/Santiago' },
  { value: 'America/Santo_Domingo' },
  { value: 'America/Sao_Paulo' },
  { value: 'America/Scoresbysund' },
  { value: 'America/Shiprock' },
  { value: 'America/St_Barthelemy' },
  { value: 'America/St_Johns' },
  { value: 'America/St_Kitts' },
  { value: 'America/St_Lucia' },
  { value: 'America/St_Thomas' },
  { value: 'America/St_Vincent' },
  { value: 'America/Swift_Current' },
  { value: 'America/Tegucigalpa' },
  { value: 'America/Thule' },
  { value: 'America/Thunder_Bay' },
  { value: 'America/Tijuana' },
  { value: 'America/Toronto' },
  { value: 'America/Tortola' },
  { value: 'America/Vancouver' },
  { value: 'America/Virgin' },
  { value: 'America/Whitehorse' },
  { value: 'America/Winnipeg' },
  { value: 'America/Yakutat' },
  { value: 'America/Yellowknife' },
  { value: 'Europe/Amsterdam' },
  { value: 'Europe/Andorra' },
  { value: 'Europe/Athens' },
  { value: 'Europe/Belfast' },
  { value: 'Europe/Belgrade' },
  { value: 'Europe/Berlin' },
  { value: 'Europe/Bratislava' },
  { value: 'Europe/Brussels' },
  { value: 'Europe/Bucharest' },
  { value: 'Europe/Budapest' },
  { value: 'Europe/Chisinau' },
  { value: 'Europe/Copenhagen' },
  { value: 'Europe/Dublin' },
  { value: 'Europe/Gibraltar' },
  { value: 'Europe/Guernsey' },
  { value: 'Europe/Helsinki' },
  { value: 'Europe/Isle_of_Man' },
  { value: 'Europe/Istanbul' },
  { value: 'Europe/Jersey' },
  { value: 'Europe/Kaliningrad' },
  { value: 'Europe/Kiev' },
  { value: 'Europe/Lisbon' },
  { value: 'Europe/Ljubljana' },
  { value: 'Europe/London' },
  { value: 'Europe/Luxembourg' },
  { value: 'Europe/Madrid' },
  { value: 'Europe/Malta' },
  { value: 'Europe/Mariehamn' },
  { value: 'Europe/Minsk' },
  { value: 'Europe/Monaco' },
  { value: 'Europe/Moscow' },
  { value: 'Europe/Nicosia' },
  { value: 'Europe/Oslo' },
  { value: 'Europe/Paris' },
  { value: 'Europe/Podgorica' },
  { value: 'Europe/Prague' },
  { value: 'Europe/Riga' },
  { value: 'Europe/Rome' },
  { value: 'Europe/Samara' },
  { value: 'Europe/San_Marino' },
  { value: 'Europe/Sarajevo' },
  { value: 'Europe/Simferopol' },
  { value: 'Europe/Skopje' },
  { value: 'Europe/Sofia' },
  { value: 'Europe/Stockholm' },
  { value: 'Europe/Tallinn' },
  { value: 'Europe/Tirane' },
  { value: 'Europe/Tiraspol' },
  { value: 'Europe/Uzhgorod' },
  { value: 'Europe/Vaduz' },
  { value: 'Europe/Vatican' },
  { value: 'Europe/Vienna' },
  { value: 'Europe/Vilnius' },
  { value: 'Europe/Volgograd' },
  { value: 'Europe/Warsaw' },
  { value: 'Europe/Zagreb' },
  { value: 'Europe/Zaporozhye' },
  { value: 'Europe/Zurich' },
  { value: 'Asia/Aden' },
  { value: 'Asia/Almaty' },
  { value: 'Asia/Amman' },
  { value: 'Asia/Anadyr' },
  { value: 'Asia/Aqtau' },
  { value: 'Asia/Aqtobe' },
  { value: 'Asia/Ashgabat' },
  { value: 'Asia/Ashkhabad' },
  { value: 'Asia/Baghdad' },
  { value: 'Asia/Bahrain' },
  { value: 'Asia/Baku' },
  { value: 'Asia/Bangkok' },
  { value: 'Asia/Beirut' },
  { value: 'Asia/Bishkek' },
  { value: 'Asia/Brunei' },
  { value: 'Asia/Calcutta' },
  { value: 'Asia/Choibalsan' },
  { value: 'Asia/Chongqing' },
  { value: 'Asia/Chungking' },
  { value: 'Asia/Colombo' },
  { value: 'Asia/Dacca' },
  { value: 'Asia/Damascus' },
  { value: 'Asia/Dhaka' },
  { value: 'Asia/Dili' },
  { value: 'Asia/Dubai' },
  { value: 'Asia/Dushanbe' },
  { value: 'Asia/Gaza' },
  { value: 'Asia/Harbin' },
  { value: 'Asia/Ho_Chi_Minh' },
  { value: 'Asia/Hong_Kong' },
  { value: 'Asia/Hovd' },
  { value: 'Asia/Irkutsk' },
  { value: 'Asia/Istanbul' },
  { value: 'Asia/Jakarta' },
  { value: 'Asia/Jayapura' },
  { value: 'Asia/Jerusalem' },
  { value: 'Asia/Kabul' },
  { value: 'Asia/Kamchatka' },
  { value: 'Asia/Karachi' },
  { value: 'Asia/Kashgar' },
  { value: 'Asia/Kathmandu' },
  { value: 'Asia/Katmandu' },
  { value: 'Asia/Kolkata' },
  { value: 'Asia/Krasnoyarsk' },
  { value: 'Asia/Kuala_Lumpur' },
  { value: 'Asia/Kuching' },
  { value: 'Asia/Kuwait' },
  { value: 'Asia/Macao' },
  { value: 'Asia/Macau' },
  { value: 'Asia/Magadan' },
  { value: 'Asia/Makassar' },
  { value: 'Asia/Manila' },
  { value: 'Asia/Muscat' },
  { value: 'Asia/Nicosia' },
  { value: 'Asia/Novokuznetsk' },
  { value: 'Asia/Novosibirsk' },
  { value: 'Asia/Omsk' },
  { value: 'Asia/Oral' },
  { value: 'Asia/Phnom_Penh' },
  { value: 'Asia/Pontianak' },
  { value: 'Asia/Pyongyang' },
  { value: 'Asia/Qatar' },
  { value: 'Asia/Qyzylorda' },
  { value: 'Asia/Rangoon' },
  { value: 'Asia/Riyadh' },
  { value: 'Asia/Saigon' },
  { value: 'Asia/Sakhalin' },
  { value: 'Asia/Samarkand' },
  { value: 'Asia/Seoul' },
  { value: 'Asia/Shanghai' },
  { value: 'Asia/Singapore' },
  { value: 'Asia/Taipei' },
  { value: 'Asia/Tashkent' },
  { value: 'Asia/Tbilisi' },
  { value: 'Asia/Tehran' },
  { value: 'Asia/Tel_Aviv' },
  { value: 'Asia/Thimbu' },
  { value: 'Asia/Thimphu' },
  { value: 'Asia/Tokyo' },
  { value: 'Asia/Ujung_Pandang' },
  { value: 'Asia/Ulaanbaatar' },
  { value: 'Asia/Ulan_Bator' },
  { value: 'Asia/Urumqi' },
  { value: 'Asia/Vientiane' },
  { value: 'Asia/Vladivostok' },
  { value: 'Asia/Yakutsk' },
  { value: 'Asia/Yekaterinburg' },
  { value: 'Asia/Yerevan' },
  { value: 'Africa/Abidjan' },
  { value: 'Africa/Accra' },
  { value: 'Africa/Addis_Ababa' },
  { value: 'Africa/Algiers' },
  { value: 'Africa/Asmara' },
  { value: 'Africa/Asmera' },
  { value: 'Africa/Bamako' },
  { value: 'Africa/Bangui' },
  { value: 'Africa/Banjul' },
  { value: 'Africa/Bissau' },
  { value: 'Africa/Blantyre' },
  { value: 'Africa/Brazzaville' },
  { value: 'Africa/Bujumbura' },
  { value: 'Africa/Cairo' },
  { value: 'Africa/Casablanca' },
  { value: 'Africa/Ceuta' },
  { value: 'Africa/Conakry' },
  { value: 'Africa/Dakar' },
  { value: 'Africa/Dar_es_Salaam' },
  { value: 'Africa/Djibouti' },
  { value: 'Africa/Douala' },
  { value: 'Africa/El_Aaiun' },
  { value: 'Africa/Freetown' },
  { value: 'Africa/Gaborone' },
  { value: 'Africa/Harare' },
  { value: 'Africa/Johannesburg' },
  { value: 'Africa/Kampala' },
  { value: 'Africa/Khartoum' },
  { value: 'Africa/Kigali' },
  { value: 'Africa/Kinshasa' },
  { value: 'Africa/Lagos' },
  { value: 'Africa/Libreville' },
  { value: 'Africa/Lome' },
  { value: 'Africa/Luanda' },
  { value: 'Africa/Lubumbashi' },
  { value: 'Africa/Lusaka' },
  { value: 'Africa/Malabo' },
  { value: 'Africa/Maputo' },
  { value: 'Africa/Maseru' },
  { value: 'Africa/Mbabane' },
  { value: 'Africa/Mogadishu' },
  { value: 'Africa/Monrovia' },
  { value: 'Africa/Nairobi' },
  { value: 'Africa/Ndjamena' },
  { value: 'Africa/Niamey' },
  { value: 'Africa/Nouakchott' },
  { value: 'Africa/Ouagadougou' },
  { value: 'Africa/Porto-Novo' },
  { value: 'Africa/Sao_Tome' },
  { value: 'Africa/Timbuktu' },
  { value: 'Africa/Tripoli' },
  { value: 'Africa/Tunis' },
  { value: 'Africa/Windhoek' },
  { value: 'Australia/ACT' },
  { value: 'Australia/Adelaide' },
  { value: 'Australia/Brisbane' },
  { value: 'Australia/Broken_Hill' },
  { value: 'Australia/Canberra' },
  { value: 'Australia/Currie' },
  { value: 'Australia/Darwin' },
  { value: 'Australia/Eucla' },
  { value: 'Australia/Hobart' },
  { value: 'Australia/LHI' },
  { value: 'Australia/Lindeman' },
  { value: 'Australia/Lord_Howe' },
  { value: 'Australia/Melbourne' },
  { value: 'Australia/North' },
  { value: 'Australia/NSW' },
  { value: 'Australia/Perth' },
  { value: 'Australia/Queensland' },
  { value: 'Australia/South' },
  { value: 'Australia/Sydney' },
  { value: 'Australia/Tasmania' },
  { value: 'Australia/Victoria' },
  { value: 'Australia/West' },
  { value: 'Australia/Yancowinna' },
  { value: 'Indian/Antananarivo' },
  { value: 'Indian/Chagos' },
  { value: 'Indian/Christmas' },
  { value: 'Indian/Cocos' },
  { value: 'Indian/Comoro' },
  { value: 'Indian/Kerguelen' },
  { value: 'Indian/Mahe' },
  { value: 'Indian/Maldives' },
  { value: 'Indian/Mauritius' },
  { value: 'Indian/Mayotte' },
  { value: 'Indian/Reunion' },
  { value: 'Atlantic/Azores' },
  { value: 'Atlantic/Bermuda' },
  { value: 'Atlantic/Canary' },
  { value: 'Atlantic/Cape_Verde' },
  { value: 'Atlantic/Faeroe' },
  { value: 'Atlantic/Faroe' },
  { value: 'Atlantic/Jan_Mayen' },
  { value: 'Atlantic/Madeira' },
  { value: 'Atlantic/Reykjavik' },
  { value: 'Atlantic/South_Georgia' },
  { value: 'Atlantic/Stanley' },
  { value: 'Atlantic/St_Helena' },
  { value: 'Pacific/Apia' },
  { value: 'Pacific/Auckland' },
  { value: 'Pacific/Chatham' },
  { value: 'Pacific/Easter' },
  { value: 'Pacific/Efate' },
  { value: 'Pacific/Enderbury' },
  { value: 'Pacific/Fakaofo' },
  { value: 'Pacific/Fiji' },
  { value: 'Pacific/Funafuti' },
  { value: 'Pacific/Galapagos' },
  { value: 'Pacific/Gambier' },
  { value: 'Pacific/Guadalcanal' },
  { value: 'Pacific/Guam' },
  { value: 'Pacific/Honolulu' },
  { value: 'Pacific/Johnston' },
  { value: 'Pacific/Kiritimati' },
  { value: 'Pacific/Kosrae' },
  { value: 'Pacific/Kwajalein' },
  { value: 'Pacific/Majuro' },
  { value: 'Pacific/Marquesas' },
  { value: 'Pacific/Midway' },
  { value: 'Pacific/Nauru' },
  { value: 'Pacific/Niue' },
  { value: 'Pacific/Norfolk' },
  { value: 'Pacific/Noumea' },
  { value: 'Pacific/Pago_Pago' },
  { value: 'Pacific/Palau' },
  { value: 'Pacific/Pitcairn' },
  { value: 'Pacific/Ponape' },
  { value: 'Pacific/Port_Moresby' },
  { value: 'Pacific/Rarotonga' },
  { value: 'Pacific/Saipan' },
  { value: 'Pacific/Samoa' },
  { value: 'Pacific/Tahiti' },
  { value: 'Pacific/Tarawa' },
  { value: 'Pacific/Tongatapu' },
  { value: 'Pacific/Truk' },
  { value: 'Pacific/Wake' },
  { value: 'Pacific/Wallis' },
  { value: 'Pacific/Yap' },
  { value: 'Antarctica/Casey' },
  { value: 'Antarctica/Davis' },
  { value: 'Antarctica/DumontDUrville' },
  { value: 'Antarctica/Macquarie' },
  { value: 'Antarctica/Mawson' },
  { value: 'Antarctica/McMurdo' },
  { value: 'Antarctica/Palmer' },
  { value: 'Antarctica/Rothera' },
  { value: 'Antarctica/South_Pole' },
  { value: 'Antarctica/Syowa' },
  { value: 'Antarctica/Vostok' },
  { value: 'Arctic/Longyearbyen' },
  { value: 'UTC' },
];
export const timeZoneValues = timeZoneOptions.map(getValue);
