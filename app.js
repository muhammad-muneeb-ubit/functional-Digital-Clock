let hr = document.getElementById("hr");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let amPm = document.getElementById("amPm");
let reference;

function showTime() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();


    if (hour > 12) {
        hour -= 12;
        amPm.innerHTML = 'pm';
      } else {
        amPm.innerHTML = 'am';
      }
      if (hour < 10) {
        hour = "0"+hour;
      }
      if (minute < 10) {
        minute = "0"+minute;
      }
      if (second < 10) {
        second = "0"+second;
      }
      hr.innerText = hour + " : ";
      min.innerText = minute + " : ";
      sec.innerText = second ;
      
}

function startClock() {
    showTime(); 
    reference = setInterval(showTime, 1000);
}


