var date = document.getElementById('date');
var now = new Date();
var options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
var formattedDate = now.toLocaleDateString(undefined, options);
date.textContent = formattedDate;

function hourOfDay(){
    var hour = now.getHours();
    let hourOfDay = "";

    if(hour >= 5 && hour < 12){
        hourOfDay = "morning";
    }
    else if(hour >= 12 && hour < 17){
        hourOfDay = "afternoon";
    }
    else if(hour >= 17 && hour < 21){
        hourOfDay = "evening";
    }
    else{
        hourOfDay = "night";
    }

    document.getElementById('greeting').textContent = "Good " + hourOfDay + ",";
}

hourOfDay();

const storedName = localStorage.getItem('firstname');
console.log("Retrieved firstname:", storedName);
if(storedName){
    document.getElementById('name').textContent = storedName;
}else{
    window.location.href = '../Log In/login.html';
}