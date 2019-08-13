$(function () {

	// Add element:

	// $("ul ul:first").append("<li>I'm gona be the last sub-item</li>");
	// $("ul ul:first").prepend("<li>I'm gona be the first sub-item</li>");
	// $("ul ul").prepend("<li>I'm gona be the first sub-item</li>");

	// $("<li>I'm gona be the last sub-item</li>").appendTo($("ul ul:first"));
	// $("<li>I'm gona be the last sub-item</li>").prependTo($("ul ul:first"));
	// $("<h4>Marinochka</h4>").prependTo("#content");

	// $(".red-box").after("<div class='red-box'>Another Red</div>");
	// $(".blue-box").before("<div class='blue-box'>Blue Friend</div>");

	// $(".blue-box").before(function () {
	// 	return "<div class='blue-box'>Blue 2</div>";
	// })


	// Does not clone el, just moove to the new position
	// $(".blue-box").before($(".red-box"));
	// $("P").before($("#list"));

	// Replace element:

	// $("li").replaceWith("<li>Replaced.</li>");
	// $("li").replaceWith(function() {
	// 	return "<li>Replaced with function</li>"
	// });
	// var firstListItem = $("li:first");
	// $("p").replaceWith(firstListItem);

	// $(".red-box, .blue-box").replaceWith("<div class='green-box'>More Green</div>")
	// $("<div class='green-box'>More Green</div>").replaceAll(".red-box, .blue-box");


	// Remove element:
	
	// $("li").remove();
	// $("form").children().not("input:text, textarea, br").remove();
	
	// var detachedListItem = $("li").detach();
	// $("#content").append(detachedListItem);

	// Remooves text and child elements
	// $("p:first").empty();
	// $(".red-box, .blue-box, .green-box").empty()


	// Manipulating Attributes and Properties:
	// attr(), prop(), val()
	// for multiple elements calls the first!!!

	// var specialLink = $("#special-link");
	// console.log(specialLink.attr("href"));
	// console.log(specialLink.attr("title"));
	// to set attr:
	// specialLink.attr("href", "http://marina.iovbak@mail.com");
	// console.log(specialLink.attr("href"));

	// var checkbox = $("input:checkbox");
	// console.log(checkbox.prop("checked"));
	// console.log(checkbox.attr("checked"));

	// var textInput = $("input:text");
	// textInput.val("Marinochka")
	// console.log(textInput.val());

	// var rangeInput = $("input[type='range']");
	// console.log(rangeInput.val());

	// Slideshow:

	// var galleryImage = $(".gallery").find("img").first();
	// var images = [
	// 	"images/laptop-mobile_small.jpg",
	// 	"images/laptop-on-table_small.jpg",
	// 	"images/people-office-group-team_small.jpg"
	// ]

	// var i = 0;
	// setInterval(function() {
	// 	i = (i + 1) % images.length;
	// 	galleryImage.fadeOut(function() {
	// 		$(this).attr("src", images[i]);
	// 		$(this).fadeIn();
	// 	});
	// 	console.log(galleryImage.attr("src"));
	// }, 2000);

	// Changing css props:
	// $(".gallery").css("display", "none"); 
	// // .hide()

	// var redBox = $(".red-box");
	// console.log(redBox.css("width"));
	// console.log(redBox.width());

	// redBox.css("background-color", "#AA7700");
	// $("p").css("font-size", "18px")
	// redBox.css("width", "+=20px");

	// var properties = $("p").css(["font-size", "line-height", "color"]);
	// var properties = $("p").css(["font-size"]);
	// console.log(properties);

	// // redBox.css("user-select", "none");
	// redBox.css("user-select", function() {
	// 	return "none";
	// });

	// Add and remoove css classes:
	// $("a").addClass("fancy-link"); 
	// $("p:first").addClass("large emphasize");

	// $("li li").addClass(function(index) {
	// 	$(this).addClass("item-" + index)
	// })

	// $("div").addClass(function(index, currentClass) {
	// 	if (currentClass === "dummy") {
	// 		return "red-box";
	// 	}
	// });

	// $(".red-box").removeClass("red-box").addClass("blue-box");
	// $(".dummy").addClass("green-box").removeClass("dummy")

	// Changing the Data of an Element:

	// var gallery = $(".gallery");
	// var images = [
	// 	"images/laptop-mobile_small.jpg",
	// 	"images/laptop-on-table_small.jpg",
	// 	"images/people-office-group-team_small.jpg"
	// ];
	// gallery.data("avaliableImages", images);
	// console.log(gallery.data("avaliableImages"));
	// gallery.data("name", "The Awesome Gallery");
	// console.log(gallery.data());
	// gallery.removeData("name");
	// console.log(gallery.data("name"));

	// var firstPar = $("p:first");
	// console.log(firstPar.data("mydata"))

	// Changing content of the element:
	// text(), html()

	// var firstPar = $("p:first");
	// console.log(firstPar.text());
	console.log(firstPar.html());

	// firstPar.text("<strong>Hello</strong> World!");
	// firstPar.html("<strong>Hello</strong> World!");

	firstPar.html(firstPar.html() + "This was just appended.");
});