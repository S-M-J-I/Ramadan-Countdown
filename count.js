
function countdown(){
    let countDownDate = new Date("2021-07-21").getTime();

    let x = setInterval( function() {

        let now = new Date();
        new Date(now).getTime();

        let distanceToDate = countDownDate - now;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distanceToDate % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        document.getElementById("demo").innerHTML = days + "d  " + hours + "h  " + minutes + "m  " + seconds + "s";

        if(distanceToDate < 0){
            alert("Ramadan Mubarak");
            document.querySelector("img").style.width = '720px';
            document.getElementById("demo").innerHTML = "Ramadan Mubarak";
            document.getElementById("third-para").innerHTML = "";
            clearInterval(x);
        }

    }, 1000);
}
