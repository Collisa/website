menu = document.querySelector("button.menu");
X = document.querySelector("button.menu.delete");
verticalNavBar = document.querySelector("div.vertical-container")

function addClass(){
    verticalNavBar.classList.add("show");
    menu.classList.add("delete");
    X.classList.remove("delete");
}
function removeClass(){
    verticalNavBar.classList.remove("show");
    menu.classList.remove("delete");
}

menu.addEventListener("click", addClass);
X.addEventListener("click", removeClass);