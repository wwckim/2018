var menu = document.getElementById("#menubtn");
var header = document.getElementsByTagName("header");

menu.addEventListener('click', function () {
    header.classList.add("redbg");
})