function getName () {
    const userName = document.getElementById("userName").value;
    document.getElementById("name").innerText = userName;
}

function getTime (){
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']

    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = days[date.getDay()];

    if (hour < 10)
        hour = "0" + hour;

    if (minute < 10)
        minute = "0" + minute;

    if (second < 10)
        second = "0" + second;
    
    // hour = hour < 10 ? "0" + hour : hour;
    // minute = minute < 10 ? "0" + minute : minute;
    // second = second < 10 ? "0" + second : second;

    var time = hour + ":" + minute + ":" + second
    var today = "Günlerden : " + day
    document.getElementById("userTime").innerText = time;
    document.getElementById("userDay").innerText = today;

    setTimeout(getTime, 1000); // Refreshing function each second
    
    
    if (day == "Cumartesi" || day =="Pazar" ){
        document.getElementById("compliment").innerText = "Türkay Beyazay iyi haftasonları diler :)"
    }
    else{
        document.getElementById("compliment").innerText = "Türkay Beyazay iyi çalışmalar diler :)"
    }
}


window.onload = getTime();