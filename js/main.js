/*##########################################################################################*/
let navLi = document.querySelector('.toggle');
let show = document.querySelector('.mega-menu');

navLi.addEventListener("click", () => {
    show.classList.toggle("mega-menu-active");
});

/*##########################################################################################*/
///Time 
function displayTime(){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.querySelector('.session');
    if(hrs >= 12){
        session.innerHTML = "PM";
    }else{
        session.innerHTML = "AM";
    }
    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.querySelector('.hours').innerHTML = hrs;
    document.querySelector('.minutes').innerHTML = min;
    document.querySelector('.seconds').innerHTML = sec;

}
setInterval(displayTime, 1000);

/*##########################################################################################*/
///scrolY the-progres

let section = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.the-progress span');

 
/*##########################################################################################*/
/// scrolY textContent 
let sectionNumber = document.querySelector('.stats');
let boxSection = document.querySelectorAll('.box .number'); 
let started = false; // Function Started ? No

window.onscroll  = function(){
    ///scrolY the-progres
    if(window.scrollY >= section.offsetTop - 100 ){
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    /// scrolY textContent 
    if(window.scrollY >= sectionNumber.offsetTop){
        if(!started){
            boxSection.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(element) {
    let numbers = element.dataset.num;
    let count = setInterval(() => {
        element.textContent++;
            if(element.textContent == numbers){
                clearInterval(count);
            }
    }, 2000 / numbers);
}
/*##########################################################################################*/
/// scrolY Animation  
 window.addEventListener('scroll', () =>{
    let content = document.querySelectorAll('.box');

    content.forEach((boxs) => {

    let contentPosition = boxs.getBoundingClientRect().top;
    let screenPosition = window.innerHeight; 

        if(contentPosition < screenPosition){
            boxs.classList.add('active');
        } else{
            boxs.classList.remove('active');
        }
    });
});
