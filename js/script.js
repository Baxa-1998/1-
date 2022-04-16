let burger = document.querySelector(".burger");
let rotate = document.querySelector(".burger__rotate");
let navigation = document.querySelector(".navigation");


burger.addEventListener("click", function () {
    rotate.classList.toggle("active");
    burger.classList.toggle("active");
});

burger.addEventListener("click", function () {
    navigation.classList.toggle("active");
});


// Filter
let inst_svg = document.querySelector('.inst_svg')
let face_svg = document.querySelector('.face_svg')
let telegr_svg = document.querySelector('.telegr_svg')
let tel_logo = document.querySelector('.tel_logo')
let geo_svg = document.querySelector('.geo_svg')

let svgActive4 = () => {
    tel_logo.classList.remove('tel_logo')
}

let svgNoActive4 = () => {
    tel_logo.classList.add('tel_logo')
}

let svgActive5 = () => {
    geo_svg.classList.remove('geo_svg')
}

let svgNoActive5 = () => {
    geo_svg.classList.add('geo_svg')
}

let svgActive = () => {
    inst_svg.classList.remove('inst_svg')
}

let svgNoActive = () => {
    inst_svg.classList.add('inst_svg')
}

let svgActive1 = () => {
    face_svg.classList.remove('face_svg')
}

let svgNoActive1 = () => {
    face_svg.classList.add('face_svg')
}

let svgActive2 = () => {
    telegr_svg.classList.remove('telegr_svg')
}

let svgNoActive2 = () => {
    telegr_svg.classList.add('telegr_svg')
}

let header_items_top = document.querySelector('.header-items_top')

let myScript = () => {
    header_items_top.classList.add('hidden')
}

let noActive = () => {
    header_items_top.classList.remove('hidden')
}

let scroll_link_logo = document.querySelector('.callback-bt')
let call_form__form = document.querySelector('.call_form__form')
let cross = document.querySelector('.cross')
let html = document.querySelector('body')
let call_form = document.querySelector('.call_form')
let div_container = document.querySelector('.div_container')


scroll_link_logo.onclick = () => {
    call_form__form.classList.add('form__active')
    html.style.overflow = 'hidden'
}

cross.onclick = () => {
    call_form__form.classList.remove('form__active')
    html.style.overflowY = 'scroll'
}


let tel_link_logo = document.querySelector('.tel_link_logo')

document.ondragstart = noselect;
// запрет на перетаскивание
document.onselectstart = noselect;
// запрет на выделение элементов страницы
function noselect() {
    return false;
}