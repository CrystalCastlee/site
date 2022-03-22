

function getcrest() {
    document.getElementById('one-click').classList.toggle('one');
    document.getElementById('two-click').classList.toggle('two');
    document.getElementById('header__button-phones').classList.toggle('header-button');
    const menu = document.getElementById('menu__phones')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
}

function getKorzina() {
    let menu = document.getElementById('korzina');
    if(menu.style.display == 'block')
    menu.style.display = 'none'
    else menu.style.display = 'block'
    document.getElementById('card1').classList.toggle('cartClick1');
    document.getElementById('card2').classList.toggle('cartClick2');

}

function getCerdce() {
    document.getElementById('heart1').classList.toggle('heartClick1');
    document.getElementById('heart2').classList.toggle('heartClick2');
}

function getEverywhere() {
    const menu = document.getElementById('everywhere-list')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
    }
    else {
        menu.style.display = 'block'
    }
    document.getElementById('polygon').classList.toggle('polygonClick')
}

function getCatalog() {
    document.getElementById('catalog-span').classList.toggle('catalog-span-active');
    let menu = document.getElementById('catalog__menu');
    if (menu.style.display == 'flex')
        menu.style.display = 'none'
    else menu.style.display = 'flex'
}


$(".menu__vehicle").on("click", ".menu__vehicle-button", function () {
    $('.menu__vehicle-button').removeClass("active");
    $(this).toggleClass("active");

});

const div2 = document.querySelector( '#catalog__menu');
const catBtn = document.querySelector( '.catalog__left-button');
document.addEventListener( 'click', (e) => {
    const withinBoundaries2 = e.composedPath().includes(div2);
    const button_catalog = e.composedPath().includes(catBtn);
    if ( !withinBoundaries2 && !button_catalog ) {
        div2.style.display = 'none'; 
        if(document.getElementById('catalog__menu').style.display == 'none') {
            document.getElementById('catalog-span').classList.remove('catalog-span-active')
        }
    }
})

const div3 = document.querySelector( '#everywhere-list');
const everywhereBtn = document.querySelector( '.search__left-button');
document.addEventListener( 'click', (e) => {
    const withinBoundaries3 = e.composedPath().includes(div3);
    const button_everywhere = e.composedPath().includes(everywhereBtn);
    if (  !withinBoundaries3 && !button_everywhere) {
        div3.style.display = 'none'; 
        if(document.getElementById('everywhere-list').style.display == 'none') {
            document.getElementById('polygon').classList.remove('polygonClick')
        }
    }
})
const div4 = document.querySelector( '#korzina');
const bracketBtn = document.querySelector( '.right-item3');
 
document.addEventListener( 'click', (e) => {
    const withinBoundaries4 = e.composedPath().includes(div4);
    const button_bracket = e.composedPath().includes(bracketBtn);
    if (  !withinBoundaries4 && !button_bracket) {
        div4.style.display = 'none'; 
        if(document.getElementById('korzina').style.display == 'none') {
            document.getElementById('card1').classList.remove('cartClick1')
            document.getElementById('card2').classList.remove('cartClick2')
        }
    }
})
//Swiper sliders
const swiper = new Swiper('.swiper', {
    speed: 1500,
    autoplay: {
        delay: 8000
    },
    effect: 'fade',
    centeredSlides: true,
    pagination: {
        el:'.slider__pagination',
        type: 'custom',
        renderCustom: function(swiper, current, total){
            let indT = total >= 10 ? total : `${total}`
            let indC = current >= 10 ? current : `${current}`
            return `<b>${indC}</b><span></span> ${indT}`
        }
    },
    scrollbar: {
        el: '.slider__scrollbar',
        draggable: true
    },
    navigation: {
        prevEl: '.slider__prev',
        nextEl: '.slider__next'
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false
    },
    runCallbacksOnInit: true
}) 



$(".scooters__top-list").on("click", ".scooters__item-button", function () {
    $('.scooters__item-button').removeClass("scooters-active");
    $(this).toggleClass("scooters-active");
});


const swiper2 = new Swiper('.swiper-2', {
    speed: 1500,
    centeredSlides: true,
    effect: 'fade',
    navigation: {
        prevEl: '.scooter__slider-prev',
        nextEl: '.scooter__slider-next'
    },
})


$(function(){
    $(".scooter__grid-item").slice(0, 8).show(); // select the first ten
    $("#loadmore").click(function(e){ // click event for load more
        e.preventDefault();
        $(".scooter__grid-item:hidden").slice(0, 999).show(); // select next 10 hidden divs and show them
        if($(".scooter__grid-item:hidden").length == 0){ // check if any hidden divs still exist
        // alert if there are none left
        }else{
            console.log('loadmore Error!')
        }
    });
});


$(function(){
    $(".popular-category__grid-item").slice(0, 8).show(); // select the first ten
    $("#loadmore-popular").click(function(e){ // click event for load more
        e.preventDefault();
        $(".popular-category__grid-item:hidden").slice(0, 999).show(); // select next 10 hidden divs and show them
        if($(".popular-category__grid-item:hidden").length == 0){ // check if any hidden divs still exist
        // alert if there are none left
        }else{
            console.log('loadmore popular Error!')
        }
    });
});


const tabsBtn   = document.querySelectorAll(".benefit-button");
const tabsItems = document.querySelectorAll(".benefits-block");

tabsBtn.forEach( (item) => {
    item.addEventListener("click", () => {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        tabsBtn.forEach( (item) => {
            item.classList.remove('benefit__button--active');
        })

        tabsItems.forEach( (item) => {
            item.classList.remove('benefits-active');
        })
        currentBtn.classList.add('benefit__button--active');
        currentTab.classList.add('benefits-active');
    })
})


const swiper3 = new Swiper('.review__slider', {
    slidesPerView: 3,
    spaceBetween: 10,
    navigation: {
        nextEl: '.slider__next'
    },
});

const swiper4 = new Swiper('.new-article__slider', {
    slidesPerView: 3,
    navigation: {
        nextEl: '.slider__next'
    },
});



document.querySelectorAll('.accordion-item__trigger').forEach((item) => {
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if(parent.classList.contains('accordion-item--active')){
            parent.classList.remove('accordion-item--active');
        } else{
            document.querySelectorAll('.accordion-item').forEach((child) => child.classList.remove('accordion-item--active'))
        }
        parent.classList.add('accordion-item--active');
    })

})


const accordions = document.querySelectorAll('.accordion-item')

for(item of accordions){
   item.addEventListener('click', function() {
       if(this.classList.contains('accordion-item--active')){
           this.classList.remove('accordion-item--active');
       } else{
           for(el of accordions){
               el.classList.remove('accordion-item--active');
           }
           this.classList.add('accordion-item--active');
       }
   })
}