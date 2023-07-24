let hours;
let minutes;

function setTime() {
   const timeContainer = document.getElementById("current-time");
   const currentDate = new Date();
   hours = currentDate.getHours();
   minutes = currentDate.getMinutes();

   if (hours < 10) {
      const arr = hours.toString().split('');
      arr.push('0');
      arr.reverse();
      const fixValue = arr.join('');
      hours = fixValue;
   }

   if (minutes < 10) {
      const arr = minutes.toString().split('');
      arr.push('0');
      arr.reverse();
      const fixValue = arr.join('');
      minutes = fixValue;
   }

   timeContainer.textContent = `${hours}:${minutes}`
}

window.onload = setTime;

setInterval(setTime, 10000);