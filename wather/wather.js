// fatch wather detals
let weather_fetch= fetch("https://goweather.herokuapp.com/weather/LDN");
var res;
var res1;
var res2; 

function tem(){
weather_fetch.then((value)=>{
    // console.log(value.ok);
    // console.log(value.status);
    return(value.json());
}).then((value1)=>{
    res = JSON.stringify(value1.forecast[0]);
    res1 = JSON.stringify(value1.forecast[1]);
    res2 =  JSON.stringify(value1.forecast[2]);
    
    // console.log(res.forecast[0]);
    // console.log(value1); 
    var s= document.querySelector('.day1');
    s.style.display='block';
    s.innerHTML=res;
    
    var s1= document.querySelector('.day2');
    s1.style.display='block';
    s1.innerHTML=res1;
    
    var s2= document.querySelector('.day3');
    s2.style.display='block';
    s2.innerHTML=res2;

    
})
}
// function tem1(){
//     var s= document.querySelector('.day1');
//     s.innerHTML=res;
    
//     var s1= document.querySelector('.day2');
//     s1.innerHTML=res1;
    
//     var s2= document.querySelector('.day3');
//     s2.innerHTML=res2;
// }
