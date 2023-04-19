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