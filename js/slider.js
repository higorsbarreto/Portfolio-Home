//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;
const sliderTotalItems = sliderItem.length;
var prevItem = document.querySelector('.jl-item-prev');
var nextItem = document.querySelector('.jl-item-next');
var sliderPos = 0;
var curretnSlide = document.querySelector('.jl-current-slide');
var totalSlide = document.querySelector('.jl-total-slide');
var currentCounter = 1;
var navItems = document.querySelectorAll('.jl-item-navigator a');


//Capturando larguras individuais
var containerWidth = sliderContainer.parentElement.offsetWidth;

//Passando larguras dinâmicas
sliderContainer.style.width = containerWidth + 'px';

for (var p = 0; p < sliderItem.length; p++) {
    sliderItem[p].style.width = containerWidth + 'px';
    var sliderItemWidth = sliderItem[p].offsetWidth;

    sliderListWidth += sliderItemWidth;
}

sliderList.style.width = sliderListWidth + 'px';


//Handlers

//Next Slide Animação
var nextSliderAnim = function () {
    var lastItem = sliderListWidth - containerWidth;
    if ((-1*(sliderPos) === lastItem)) return;

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
      });
}
//Prev Slide Animação
var prevSliderAnim = function () {
    if (sliderPos === 0) {
        return;
    } 

    sliderPos += containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
      });
    };

//Counter Formater
var counterFormatter = function (i) {
    if(i < 10) {
        return '0' + i;
    } else {
        return i;
    }
}


//Counter Add
var counterAdd = function () {
    if(currentCounter >= 0 && currentCounter < sliderTotalItems){
        currentCounter++
        curretnSlide.innerHTML = counterFormatter(currentCounter);
   
    }
 }

//Counter Remove
 var counterRemove = function () {
    if(currentCounter > 1 && currentCounter <= sliderTotalItems){
        currentCounter--;
        curretnSlide.innerHTML = counterFormatter(currentCounter);
    }
 }
//Set Active Nav
 var setActiveNav = function () {
    for (var nv = 0; nv < navItems.length; nv++) {
        let myNavNum = navItems[nv].getAttribute('data-nav');
        if (myNavNum == currentCounter) {
            navItems[nv].classList.add('jl-item-active');

            anime({
                targets: '.jl-item-active',
                width: 90,
              });
        }
    }
 }

 var changeActive = function () {
    for (var rm = 0; rm < navItems.length; rm++) {
        navItems[rm].classList.remove('jl-item-active');
        anime({
            targets: navItems[rm],
            width: 20,
          });
    }
    setActiveNav();
 }



//Actions
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

 nextItem.addEventListener('click', function () {
   nextSliderAnim();
   counterAdd();  
   changeActive();
   
 });

 prevItem.addEventListener('click', function () {
    prevSliderAnim();  
    counterRemove();  
    changeActive(); 
});
    

 