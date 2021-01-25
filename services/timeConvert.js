
export default {
  secondsToHms: (d) => {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    // var s = Math.floor(d % 3600 % 60);
  
    // var hDisplay = h > 0 ? h + (h === 1 ? " hour, " : " hours, ") : "";
    // var mDisplay = m > 0 ? m + (m === 1 ? " minute, " : " minutes, ") : "";
    // var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  
    var hDisplay = h > 0 ? h + "h " : "";
    var mDisplay = m > 0 ? m + "m" : "";
    // var sDisplay = s > 0 ? s + (s === 1 ? " second" : " seconds") : "";
  
    // return hDisplay + mDisplay + sDisplay; 
    return hDisplay + mDisplay; 
  },
  secondsToHM: (totalSeconds) => {
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    // let seconds = totalSeconds % 60;
    
    // console.log("hours: " + hours);
    // console.log("minutes: " + minutes);
    // console.log("seconds: " + seconds);
    
    // If you want strings with leading zeroes:
    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    // seconds = String(seconds).padStart(2, "0");
    // console.log(hours + ":" + minutes + ":" + seconds);
    return hours + ":" + minutes;
  }
}
