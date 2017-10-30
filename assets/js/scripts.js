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


    $(document).ready(init);
    
    function init(jQuery) {
      $("#myCanvas").mouseenter(window.globals.canvasEnter);
      $("#myCanvas").mouseleave(window.globals.canvasLeave);
    }
    
    // PaperScript Interop
    window.globals = {
      paperClicked: function() {},
      canvasEnter: function() {},
      canvasLeave: function() {}
    }

