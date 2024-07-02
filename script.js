function theTime() {
    var now = new Date();
    var weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var currentDay = weekDays[now.getUTCDay()];
    var hoursUTC = now.getUTCHours().toString().padStart(2, '0');
    var minutesUTC = now.getUTCMinutes().toString().padStart(2, '0');
    var secondsUTC = now.getUTCSeconds().toString().padStart(2, '0');
    var currentTime = `${hoursUTC}:${minutesUTC}:${secondsUTC}`;
    document.getElementById('today').textContent = currentDay;
    document.getElementById('timeNow').textContent = currentTime;
}
theTime();
setInterval(theTime, 1000);