let i = 0;
function countup() {
    if(i <= 100) {
        document.getElementById("counter").textContent = i;
        i++;
    }
}

setInterval(countup, 30);