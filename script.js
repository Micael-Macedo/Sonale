const cards = document.querySelectorAll(".card");
const cardbuttons = document.querySelectorAll(".cardButton")
const navToggles = document.querySelectorAll(".nav-toggle")
const navButtons = document.querySelectorAll(".nav-button")
function showCard (button) {
    const cardSelected = $(button).attr("name")

    cardbuttons.forEach(cardbutton => {
            $(cardbutton).removeClass("selected");
    });
    cards.forEach(card => {
        if($(card).attr("id") === cardSelected){
            $(card).addClass("selected");
            $(button).addClass("selected");
        }else{
            $(card).removeClass("selected");
        }
    });
}

function displayMenu(menuSelected) {
    let div = $(menuSelected).parent()
    let menu = $(div).find(".nav-toggle")
    if($(menuSelected).hasClass("selected")){
        $(menuSelected).removeClass("selected")
        navToggles.forEach(navToggle => {
            $(navToggle).removeClass("selected")
        });
    }else{
        navButtons.forEach(navButton => {
            $(navButton).removeClass("selected")
        });
        navToggles.forEach(navToggle => {
            $(navToggle).removeClass("selected")
        });
    
        $(menu).toggleClass("selected")
        $(menuSelected).toggleClass("selected")
    }
}
const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".item")
const maxItems = items.length;
currentItem = 0


setInterval(() => {
    currentItem += 1
    if(currentItem < 0){
        currentItem = maxItems - 1;
    }
    if(currentItem === maxItems){
        currentItem = 0;
    }
    console.log(currentItem);
    items.forEach(item => item.classList.remove('current-item'))
    items[currentItem].scrollIntoView({
        inline: "center",
        behavior: "smooth"
    })
    items[currentItem].classList.add('current-item')
}, 2000);

