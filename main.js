// ======= get element from html ===========
let element = document.querySelector(".parent .links");
let bars = document.querySelector(".parent .bars");


let toggleClass =() => {
    element.classList.toggle("open");
}

bars.addEventListener("click", toggleClass);


console.log(element)
console.log(bars)