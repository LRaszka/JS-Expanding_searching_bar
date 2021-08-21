const input = document.querySelector(".input");
const search = document.querySelector(".search");
const button = document.querySelector(".btn");

button.addEventListener("click", function(){
    search.classList.toggle("active"); //přidá/odebere class active
    input.focus(); //rovnou dá kurzor do pole - nemusí se klikat a může se rovnou psát
});