
let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const container = document.querySelector(".promo-slider");
const track = document.querySelector(".slider-track");
const items = document.querySelectorAll(".slider-item");
const nextBtn = document.querySelector(".arrows-right");
const prewBtn = document.querySelector(".arrows-left");
const itemsCount = items.length;
const itemWidth = container.clientWidth / slidesToShow;
const movePosition = slidesToScroll * itemWidth;
// let checkedNext = true;
// let checkedPrew = true;
checkBtn(position)

nextBtn.addEventListener('click', slideNext);
prewBtn.addEventListener('click', slidePrew);
// nextBtn.addEventListener('mousedown', function(){

// })
items.forEach(function(item, index){
    item.style.minWidth = `${itemWidth}px`;
});
function slideNext(){
    position -= movePosition;
    setPosition(position)
    checkBtn(position)
}

function slidePrew(){
    position += movePosition;
    setPosition(position)
    checkBtn(position)
}

function setPosition(value){
    track.style.transform = `translateX(${value}px)`;
}
function checkBtn(pos){
    if(pos === 0){
        prewBtn.classList.remove('btn_active');
        prewBtn.classList.add('btn_not-active');
        // checkedPrew = false;
    }
    if(pos < 0){
        prewBtn.classList.remove('btn_not-active');
        prewBtn.classList.add('btn_active');
        // checkedPrew = true;
    }
    if(pos <= -(itemsCount - slidesToShow)*itemWidth){
        nextBtn.classList.remove('btn_active');
        nextBtn.classList.add('btn_not-active');
        // checkedNext = false;
    }
    if(pos > -(itemsCount - slidesToShow)*itemWidth){
        nextBtn.classList.remove('btn_not-active');
        nextBtn.classList.add('btn_active');
        // checkedNext = true;
    }
}

//сделать чекед что бы проверять true или false что бы отключаться или навешивать событие на кнопки