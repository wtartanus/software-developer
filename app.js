//Overlay
 //Capture click event on .seemore
//oppend div to body (overlay)
//get parents elemts and append to overlay
//change See More to See Less
// on See Lees click close overlay


$(".seemore").click(function() {
  $(this).html("<p>See Less</p>")
  var $className = $(this).parent().attr("class");
  console.log($className);
  $(".seemore").addClass("seeless");
  $(".seemore").removeClass("seemore");

  if($className == "html") {
    $(".html-description").addClass("overlay-description");
    $(".html-description").removeClass("html-description");

    $(".html-example").addClass("overlay-example");
    $(".html-example").removeClass("html-example");
   } else if($className == "css") {
     $(".css-description").addClass("overlay-description");
     $(".css-description").removeClass("css-description");

     $(".css-example").addClass("overlay-example");
     $(".css-example").removeClass("css-example");

   } else if($className == "js") {
     $(".js-description").addClass("overlay-description");
     $(".js-description").removeClass("js-description");

     $(".js-example").addClass("overlay-example");
     $(".js-example").removeClass("js-example");

   } else {
    $(".ruby-description").addClass("overlay-description");
    $(".ruby-description").removeClass("ruby-description");

    $(".ruby-example").addClass("overlay-example");
    $(".ruby-example").removeClass("ruby-example");
   };
 var $content = $(this).parent().html();
 $("body").prepend("<div class='overlay'></div>")
 $(".overlay").append($content);
  });

$(document).on("click",".seeless", function() {
  console.log("ewe");
  $(".seeless").html("<p>See More</p>")
  var $className = $(this).parent().attr("class");
  console.log($className);
  $(".overlay").remove();
  $(".seeless").addClass("seemore");
  $(".seeless").removeClass("seeless");

});







