//PORTFOLIO SLIDER

//Declarando variáveis do slider
var sliderContainer = document.querySelector('.jl-slider-container');
var sliderList = document.querySelector('.jl-slider-list');
var sliderItem = document.querySelectorAll('.jl-slider-item');
var sliderListWidth = null;

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


//Fazendo Animaçao do Slider onClick

 var prevItem = document.querySelector('.jl-item-prev');
 var nextItem = document.querySelector('.jl-item-next');
 var sliderPos = 0;

//Handlers
//Next Slider Animação
var nextSliderAnim = function () {
    var lastItem = sliderListWidth - containerWidth;
    if ((-1*(sliderPos) === lastItem)) return;

    sliderPos -= containerWidth;
    anime({
        targets: sliderList,
        translateX: sliderPos,
      });
}
//Prev Slider Animação
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

//Troca Counter

//Troca Active Navigator




 nextItem.addEventListener('click', function () {
   nextSliderAnim();
 });

 prevItem.addEventListener('click', function () {
    prevSliderAnim();   
});
    

 