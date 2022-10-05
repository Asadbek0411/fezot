let navbar = document.querySelector('body .header .navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.add('active');
}

document.querySelector('#nav-close').onclick = () =>{
    navbar.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active')
}



var destination = new Date("oct 10, 2022 00:00:00");

var x = setInterval(function () {


    var now = new Date().getTime();

    var diff = destination - now;
    var day = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minute =  Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    var Sec = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = "Bu hafta Tugashiga: " + day + " Kun " + hour + " Soat "
    + minute + " Daqiqa " + Sec + " Soniya ";

    if (diff < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "Bu Hafta Yopildi!";
    }

    if(day === 0){
        clearInterval(day)
        document.getElementById("countdown").innerHTML = "Bu hafta Tugashiga: " +
           hour + " Soat " + minute + " Daqiqa " + Sec + " Soniya ";

        if(hour === 0){
            clearInterval(hour)
            document.getElementById("countdown").innerHTML = "Bu hafta Tugashiga: " +
                minute + " Daqiqa " + Sec + " Soniya ";


            if(minute === 0){
                clearInterval(minute)
                document.getElementById("countdown").innerHTML = "Bu hafta Tugashiga: " +
                    Sec + " Soniya ";
            }

        }
    }


}, 1000)
