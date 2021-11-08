// Task 1:

let clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000)

//or 2
//function displayCurrentTime() {
//    let currentTime = new Date();
//    let hours = currentTime.getHours();
//    let minutes = currentTime.getMinutes();
//    let seconds = currentTime.getSeconds();
//    let amOrPm = hours < 12 ? "AM" : "PM";
     
//    hours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours; 

//    hours = addZero(hours);
//    minutes = addZero(minutes);
//    seconds = addZero(seconds);

//    let timeString = `${hours} : ${minutes} : ${seconds} ${amOrPm}`;
//    document.getElementById("clock").innerText = timeString;
//    let timer = setTimeout(displayCurrentTime, 1000);
//}

//   function addZero(component) {
//     return component < 10 ? "0" + component : component;
//}

//     displayCurrentTime();

//or 3
//const clock = () => {
//    let date    = new Date();
//    let hours   = date.getHours();
//   let minutes = date.getMinutes();
//    let seconds = date.getSeconds();
//    let midday;
  
//    hours     = updateTime(hours);
//    minutes   = updateTime(minutes);
//    seconds   = updateTime(seconds);  

//    if else condition
  
//    midday = (hours >= 12) ? "PM" : "AM";
  
//    document.getElementById("clock").innerHTML =
//      "<span>"+hours+"</span>" + ":" + "<span>"+minutes+"</span>" + ":" + "<span>"+seconds+"</span>" + "<span>"+midday+"</span>";

//  }
  
//  const updateTime = (k) => {
//    if (k < 10) {
//      return "0" + k;
//    } else {
//      return k;
//    }
//  }
  
//  call clock function 
//  clock();

//or simpl 4
//setInterval(function(){
//    let timer = new Date();
//    let h = timer.getHours();
//    let m = timer.getMinutes();
//    let s = timer.getSeconds();
     

//    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
//},1000);
 
//or 5
// setInterval(function(){
//    const clock = document.querySelector(".display");
//    let time = new Date();
//    let sec = time.getSeconds();
//    let min = time.getMinutes();
//    let hr = time.getHours();
//    let day = 'AM';
//    if(hr > 12){
//      day = 'PM';
//      hr = hr - 12;
//    }
//    if(hr == 0){
//      hr = 12;
//    }
//    if(sec < 10){
//      sec = '0' + sec;
//    }
//    if(min < 10){
//      min = '0' + min;
//   }
//    if(hr < 10){
//      hr = '0' + hr;
//    }
//    clock.textContent = hr + ':' + min + ':' + sec + " " + day;
// });

  // Task 2:
let slideIndex = 0;
  showSlides();
  
  function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 1 seconds
  }

    // Task 4:
    
    let n = 4;
    let k = 3;
    const s = [-1, -3, 4, 2];
    
    function angryProfessor(k, s) {
        let result = 0;
        for(let i = 0; i < s.length; i++){
            if(s[i] <= 0) {
                result++;
            }
        }
        if(result >= k){
          return "NO";
        }else {
          return "YES";
        }
    }
    
    console.log(angryProfessor(k, s));