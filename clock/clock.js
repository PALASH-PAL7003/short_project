const sec_line =document.querySelector('.sec');
const min_line=document.querySelector('.min');
const hour_line=document.querySelector('.hour');
function updateclock(){
    const now = new Date();
    const sec=now.getSeconds();
    const min=now.getMinutes();
    const hour=now.getHours();


    const second=(360/60)*sec;
    const minute=(360/60)*min+(360/60)*(sec/60);
    const houre=(360/12)*hour+(360/12)*(min/60);

    sec_line.style.transform = `rotate(${second}deg)`;
    min_line.style.transform = `rotate(${minute}deg)`
    hour_line.style.transform = `rotate(${houre}deg)`
}

setInterval(updateclock, 1000);
updateclock();
console.log("i am apalash");