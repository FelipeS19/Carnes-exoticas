const btnmobile = document.querySelector('#btn-mobile');
const controls = document.querySelectorAll(".control")
document.getElementById("radio1").checked = true;
let wrapper = document.querySelectorAll('.wrapper');
let box = document.querySelectorAll('.box');


let isdrag = false, startx, scrollleft;
let count = 0;
let correntbox = 0;
const boxlength = box.length;


setInterval(function() {

        count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}, 3000);




btnmobile.addEventListener('touchstart', function() { 
    const especialidades = document.querySelector('#especialidades');
    especialidades.classList.toggle('active');
})
;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.classList.contains("left");

        if (isLeft) {
            correntbox -=3;

        }else{
            correntbox +=3;
        }
        if (correntbox >= boxlength ) {
            correntbox = 0;
        }
        if (correntbox < 0) {
            correntbox = boxlength -1 ;        
        }

        box[correntbox].scrollIntoView({
            behavior: "smooth",
          });
        console.log(correntbox + " " + boxlength);
    });
    
  });
  

  wrapper.forEach((wrappers) => {
    wrappers.addEventListener("mousemove", (e) => { 
        if (!isdrag) return;
        e.preventDefault();
        const diff = e.clientX - startx;
        wrappers.scrollLeft = scrollleft - diff;
    });


    wrappers.addEventListener("mousedown", (e) => { 
        isdrag = true;
        startx = e.clientX;
        scrollleft = wrappers.scrollLeft;
    });


    wrappers.addEventListener("mouseup", (e) => { 
        isdrag = false;
    });
  });