const showtime = ()=>{

let _dateObj = new Date();
let _day = _dateObj.getDay();
let _date = _dateObj.getDate();
let _month = _dateObj.getMonth();
let _year = _dateObj.getFullYear();
let _hour = _dateObj.getHours();
let _minute = _dateObj.getMinutes();
let _second = _dateObj.getSeconds();
let period = 'AM'


// ----------time-----------------
if(_hour==0){
    _hour = 12;
}
if(_hour > 12){
    _hour = _hour - 12;
    period = 'PM';   
}

_hour = (_hour<10) ? '0'+_hour : _hour
_minute = (_minute<10) ? '0'+_minute : _minute
_second = (_second<10) ? '0'+_second : _second

let currTime = `${_hour}:${_minute}:${_second}  ${period}`
document.getElementById('time').innerHTML = currTime;


// --------------date--------------
switch (_month) {
    case 0:
        _month = 'Jan'
        break;
    case 1:
        _month = 'Feb'
        break;
    case 2:
        _month = 'Mar'
        break;
    case 3:
        _month = 'Apr'
        break;
    case 4:
        _month = 'May'
        break;
    case 5:
        _month = 'Jun'
        break;
    case 6:
        _month = 'Jul'
        break;
    case 7:
        _month = 'Aug'
        break;
    case 8:
        _month = 'Sep'
        break;
    case 9:
        _month = 'Oct'
        break;
    case 10:
        _month = 'Nov'
        break;
    default:
        _month ='Dec'
        break;
}

_date = (_date<10)? '0'+_date:_date
document.getElementById('date').innerHTML = `${_date}-${_month}-${_year}`

// -------------day-----------------
let currDay = document.querySelectorAll('span').item(_day);
currDay.classList.add('active')



    setTimeout(showtime, 1000)
}

showtime();










