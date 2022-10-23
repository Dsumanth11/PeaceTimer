let ele20 = document.getElementById("twentySecondsBtn");
let ele30 = document.getElementById("thirtySecondsBtn");
let ele40 = document.getElementById("fortySecondsBtn");
let ele60 = document.getElementById("oneMinuteBtn");
let paraele = document.getElementById("timerText");
let id = null;
let timerval = null;
ele20.addEventListener('click', function() {
    timerval = 20;
    clearInterval(id);
    paraele.textContent = timerval + " seconds left";
    id = setInterval(function() {
        timerval = timerval - 1;
        paraele.textContent = timerval + " seconds left";
        if (timerval === 0) {
            clearInterval(id);
            paraele.textContent = "Your moment is complete";
        }
    }, 1000);
});

ele30.addEventListener('click', function() {
    timerval = 30;
    clearInterval(id);
    paraele.textContent = timerval + " seconds left";
    id = setInterval(function() {
        timerval = timerval - 1;
        paraele.textContent = timerval + " seconds left";
        if (timerval === 0) {
            clearInterval(id);
            paraele.textContent = "Your moment is complete";
        }
    }, 1000);
});
ele40.addEventListener('click', function() {
    timerval = 40;
    clearInterval(id);
    paraele.textContent = timerval + " seconds left";
    id = setInterval(function() {
        timerval = timerval - 1;
        paraele.textContent = timerval + " seconds left";
        if (timerval === 0) {
            clearInterval(id);
            paraele.textContent = "Your moment is complete";
        }
    }, 1000);
});
ele60.addEventListener('click', function() {
    timerval = 60;
    clearInterval(id);
    paraele.textContent = timerval + " seconds left";
    id = setInterval(function() {
        timerval = timerval - 1;
        paraele.textContent = timerval + " seconds left";
        if (timerval === 0) {
            clearInterval(id);
            paraele.textContent = "Your moment is complete";
        }
    }, 1000);
});