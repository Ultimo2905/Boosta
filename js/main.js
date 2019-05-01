let angle = 0;

function galleryspin(sign) {
    spinner = document.querySelector("#spinner");
    if (!sign) {
        angle = angle + 45;
    } else {
        angle = angle - 45;
    }
    spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = +n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = +n);
    }

    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("mySlides");
        let dots = document.getElementsByClassName("dot");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    let angle = 0;

    function galleryspin(sign) {
        spinner = document.querySelector("#spinner");
        if (!sign) {
            angle = angle + 45;
        } else {
            angle = angle - 45;
        }
        spinner.setAttribute("style", "-webkit-transform: rotateY(" + angle + "deg); -moz-transform: rotateY(" + angle + "deg); transform: rotateY(" + angle + "deg);");
    }


    let lis = document.getElementsByTagName('li');
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.position = 'relative';
        let span = document.createElement('span');

        span.style.cssText = 'position:absolute;left:0;top:0';
        span.innerHTML = i + 1;
        lis[i].appendChild(span);
    }

    let width = 75; // ширина изображения
    let count = 1; // количество изображений

    let carousel = document.getElementById('carousel');
    let list = carousel.querySelector('ul');
    let listElems = carousel.querySelectorAll('li');

    let position = 1;

    carousel.querySelector('.preV').onclick = function () {

        position = Math.min(position + width * count, 0)
        list.style.marginLeft = position + 'px';
    };

    carousel.querySelector('.nexT').onclick = function () {

        position = Math.max(position - width * count, -width * (listElems.length - count));
        list.style.marginLeft = position + 'px';
    };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


let lis = document.getElementsByTagName('li');
for (let i = 0; i < lis.length; i++) {
    lis[i].style.position = 'relative';
    let span = document.createElement('span');

    span.style.cssText = 'position:absolute;left:0;top:0';
    span.innerHTML = i + 1;
    lis[i].appendChild(span);
}

let width = 75; // ширина изображения
let count = 1; // количество изображений

let carousel = document.getElementById('carousel');
let list = carousel.querySelector('ul');
let listElems = carousel.querySelectorAll('li');

let position = 1;

carousel.querySelector('.preV').onclick = function () {

    position = Math.min(position + width * count, 0)
    list.style.marginLeft = position + 'px';
};

carousel.querySelector('.nexT').onclick = function () {

    position = Math.max(position - width * count, -width * (listElems.length - count));
    list.style.marginLeft = position + 'px';
};



