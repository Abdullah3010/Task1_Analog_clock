const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


var time = null;

time = setInterval(function(){
    var date = new Date();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    

    HOURHAND.style.transform = "rotate(" + hours*30 + "deg)";
    MINUTEHAND.style.transform = "rotate("+minute*6+"deg)";
    SECONDHAND.style.transform = "rotate("+second*6+"deg)";
    
},1000);

