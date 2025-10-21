function updateTime(){
    const timeEl =document.getElementById("user-time");
    timeEl.textContent=Date.now();
}
updateTime();
setInterval(updateTime,1000)
