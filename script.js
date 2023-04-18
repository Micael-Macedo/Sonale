cards = document.querySelectorAll(".card");
function showCard (button) {
    const cardSelected = $(button).attr("name")
    cards.forEach(card => {
        if($(card).attr("id") === cardSelected){
            $(card).addClass("selected");
        }else{
            $(card).removeClass("selected");
        }
    });
}