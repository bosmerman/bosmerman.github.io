var desireHours = 23;
var desireMinutes = 52;
var desireSeconds = 0;

var d = new Date();
var nowHours = d.getHours();
var nowMinutes = d.getMinutes();
var nowSeconds = d.getSeconds();

var diffHoursinSec = (desireHours - nowHours)*3600;
var diffMinutesinSec = (desireMinutes - nowMinutes)*60;
var diffSecondsinSec = Math.abs(desireSeconds - nowSeconds);

offsetTiminginMillisec = (diffHoursinSec + diffMinutesinSec + diffSecondsinSec)*1000;

setTimeout(myFunctionREDIRECT, offsetTiminginMillisec);
function myFunctionREDIRECT() {
  location.replace("Intermission.html")
}
