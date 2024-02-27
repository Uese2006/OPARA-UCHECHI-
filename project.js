document.addEventListener("DOMContentLoaded",
function() {
    var targetDate = new Date("march 15,2024 00:00:00").getTime();

    var timerElement=
    document.getElementById("timer");
    function updateTimer() {
        var currentDate = newDate().getTime()
        vartimedifference = targetDate - currentDate;
        var days = Math.floor(timeDifference/(1000 * 60 * 60 * 24));
        var hours = Math.floor((timeDifference % (1000 * 60 * 60 *24 ))/(1000 * 60 * 60));
        var minutes = math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        timerElement.innerHTML= 'Time left: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds';
        if (timeDifference > 0){
            setTimeout(updateTimer, 1000);
        }else{
            timerElement.innerHTML = "Time's up";
        }
    }
    updateTimer();
});