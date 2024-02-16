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


//Actions
totalSlide.innerHTML = counterFormatter(sliderTotalItems);

 nextItem.addEventListener('click', function () {
   nextSliderAnim();
   counterAdd();   
 });

 prevItem.addEventListener('click', function () {
    prevSliderAnim();  
    counterRemove();   
});
    

 