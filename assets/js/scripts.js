$("#colourFlip").click(function(){
    $("body").toggleClass("flippedColour");
    $(".navbar").toggleClass("flippedColourBar");
});

$(document).ready(function () {
    
        $("#pronounceText").hide();
    
        $("#pronounce").click(function(){
             $("#pronounceText").toggle();
        });
    });