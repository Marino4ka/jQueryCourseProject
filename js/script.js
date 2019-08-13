$(function() {
  // jQuery goes here...

  // Uncomment this line to fade out the red box on page load
  // $(".red-box").fadeOut(2000);
  // $(".green-box").fadeOut(2000);
  
  // $(".red-box").fadeIn(1000);
  
  // $(".red-box").fadeTo(1000, 0.5);
  // $(".red-box").fadeTo(3000, 0.2);
  // $(".green-box").fadeTo(2000, 0.5);
  // $(".blue-box").fadeTo(1000, 0.8);

  // $(".green-box").fadeToggle();
  // $(".green-box").fadeToggle();

  // $(".blue-box").hide();
  // $(".blue-box").show();
  
  // $(".blue-box").toggle();
  // $(".blue-box").toggle(1000);

  // $(".blue-box").hide(1000);
  // $(".blue-box").show(1000);
  // $(".blue-box").slideUp(2000);
  // $(".blue-box").slideDown(2000);
  // $(".blue-box").slideToggle(2000);
  // $("p").hide();
  // $("p").slideDown(2000);

  // Custom animation:

  // $(".blue-box").animate({
  // 	"margin-left": "+=200px", 
  // 	"opacity": "0",
  // 	"height": "50px",
  // 	"width": "50px", 
  // 	"margin-top": "25px"
  // }, 1000, "linear");

  // $(".blue-box").animate({
  // 	"margin-left": "-=200px"
  // }, 1000, "linear");

  // $("p").animate({
  // 	"font-size": "20px"
  // }, 1000);

  // Animation chainning:

  // $(".red-box").fadeTo(1000, 0.2);
  // $(".green-box").delay(1000).fadeTo(1000, 0.5);
  // $(".blue-box").delay(2000).fadeTo(1000, 0.8).fadeOut().delay(500).fadeIn();

  // $(".red-box").fadeTo(1000, 0, function() {
  // 	$(".green-box").fadeTo(1000, 0, function() {
  // 		$(".blue-box").fadeTo(1000, 0)
  // 	});
  // });

  // Lightbox:
  // $(".lightbox").delay(500).fadeIn(1000);

  // Selectors:

  // $("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $(".red-box").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input[type='text']").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("h2, p, input").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("p:first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:last").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li:even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input:text").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("input:selected").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").find("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").children("li").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("div").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parents("body").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").parent().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").siblings("p").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").siblings(":header").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").prev().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").next().css("background-color", "rgba(180, 180, 30, 0.8)");
  
  // $("#list").children("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("#list").find("li").filter(":even").css("background-color", "rgba(180, 180, 30, 0.8)");
  
  // $("li").filter(function(index) {
  // 	return index % 3 === 2;
  // }).css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").first().css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").last().css("background-color", "rgba(180, 180, 30, 0.8)");
  
  // $("li").eq(4).css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").eq(-2).css("background-color", "rgba(180, 180, 30, 0.8)");

  // $("li").not(":first").css("background-color", "rgba(180, 180, 30, 0.8)");
  // $("li").not("#list ul li").css("background-color", "rgba(180, 180, 30, 0.8)");

  $("li").not(function(index) {
  	return index % 3 === 2;
  }).css("background-color", "rgba(180, 180, 30, 0.8)");


  


});