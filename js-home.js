$(document).ready(function() {
    eventReady_displayonHover();
});


function eventReady_displayonHover() {
    var trigger = document.getElementsByClassName("displayonHover");
    console.log("Trigger list: " + trigger.length);
    for (let i = 0; i < trigger.length; i++) {
        let triggerItem = trigger[i];
        triggerItem.addEventListener("mouseover", function() {
            var triggered = triggerItem.querySelectorAll('[data-displayonhover="1"]');
            console.log("Triggered list: " + triggered.length);
            for (let i2 = 0; i2 < triggered.length; i2++) {
                triggered[i2].classList.add("active");
            }  
        });
    }
}

$(document).ready(function() {
    $('a[href*=\\#]').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop : $(this.hash).offset().top
        }, 500);
    });
});