$(function () {
	
	// Click event
	// $("#btn-click").click(function(event) {
	// 	console.log(event);
	// 	alert("Button was clicked.");
	// });

	// $(".red-box").click(function() {
	// 	$(this).fadeTo(1000, 0.5);
	// })

	// to trigger an event:
	// $(".red-box").click();

	// Hover event:
	// $("#btn-hover").hover(function() {
	// 	alert("Button was hovered")
	// });

	// $(".green-box").hover(function() {
	// 	$(this).text("I was hovered");
	// });

	// var blueBox = $(".blue-box");

	// blueBox.mouseenter(function() {
	// 	$(this).stop().fadeTo(500, 0.7);
	// });
	// blueBox.mouseleave(function() {
	// 	$(this).stop().fadeTo(500, 1);
	// });

	// hover(handleIn, handleOut)
	// blueBox.hover(function() {}, function() {});

	// blueBox.hover(function() {
	// 	$(this).stop().fadeTo(500, 0.7)
	// }, function() {
	// 	$(this).stop().fadeTo(500, 1)
	// });

	// .on("click", function() {...})
	// $("html").on("click keydown", function() {
	// 	console.log("Mouse was clicked or key was pressed.");
	// });

	// or the same as above:
	// function logEvent() {
	// 	console.log("Mouse was clicked or key was pressed.");
	// };
	// $("html").on("click keydown", logEvent);

	// var images = [
	// 	"images/laptop-mobile_small.jpg",
	// 	"images/laptop-on-table_small.jpg",
	// 	"images/people-office-group-team_small.jpg"
	// ];

	// var i = 0;
	// $(".gallery").find("img").on("click", function() {
	// 	i = (i + 1) % images.length;
	// 	$(this).fadeOut(function() {
	// 		$(this).attr("src", images[i]).fadeIn();
	// 	});
	// });

	// var i = 0;
	// var galleryImage = $(".gallery").find("img");
	// galleryImage.on("click", switchToNextImage);

	// function switchToNextImage() {
	// 	i = (i + 1) % images.length;
	// 	$(this).fadeOut(function() {
	// 		$(this).attr("src", images[i]).fadeIn();
	// 	});
	// };

	// Delegated events:
	// $("p").click(function () {
	// 	$(this).slideUp();
	// });
	// $("#content").append("<p>This is dynamically added paragraph</p>"); 

	// $("#content").on("click", "p", function() {
	// 	$(this).slideUp();
	// });
	// $("#content").append("<p>This is dynamically added paragraph</p>")

	// $("body").on("mouseenter", "li", function() {
	// 	$(this).css("color", "#00FF00");
	// });

	// Passing Additional Data to Events:

	// $("#btn-click").click({
	// 	user: "Marina",
	// 	domain: "marina.com"
	// }, function(event) {
	// 	greetUser(event.data); 
	// });

	// function greetUser(userdata) {
	// 	username = userdata.user || "Anonymous";
	// 	domain = userdata.domain || "expl.com";
	// 	alert("Welcome back " + username + " from " + domain + "!");
	// } 

	// Gallery with Lightbox Preview:
	var galleryItems = $(".gallery").find("img");
	galleryItems.css("width", "33%").css("opacity", "0.7");

	// galleryItems.mouseenter(function() {
	// 	$(this).stop().fadeTo(500, 1);
	// });

	// galleryItems.mouseleave(function() {
	// 	$(this).stop().fadeTo(500, 0.7);
	// });

	// galleryItems.click(function() {
	// 	var source = $(this).attr("src");
	// 	var image = $("<img>").attr("src", source).css("width", "100%");
	// 	$(".lightbox").empty().append(image).stop().fadeIn(2000);
	// });

	// $(".lightbox").click(function() {
	// 	$(this).stop().fadeOut();
	// });

	// // keypress() - EVILL!
	// $("html").keydown(function(event) {
	// 	console.log(event.which);
	// });


	// var ARROW_RIGHT = 39;
	// $("html").keydown(function (event) {
	// 	if (event.which == ARROW_RIGHT) {
	// 		$(".blue-box").stop().animate({
	// 			marginLeft: "+=10px"
	// 		}, 50);
	// 	}
	// });

	// var inputFields = $("input:text, input:password, textarea");
	// inputFields.focus(function () {
	// 	$(this).css("box-shadow", "0 0 4px #667");
	// });

	// inputFields.blur(function() {
	// 	$(this).css("box-shadow", "none");
	// });

	// $("#name").blur(function() {
	// var text = $(this).val();
	// 	if (text.length < 3) {
	// 		$(this).css("box-shadow", "0 0 4px #811");	
	// 	}
	// 	else {
	// 		$(this).css("box-shadow", "0 0 4px #181");
	// 	}	
	// });

	// $("#checkbox").change(function() {
	// 	var isChecked = $(this).is(":checked");
	// 	if(isChecked) {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #181")
	// 	} else {
	// 		$(this).add("label[for='cb']").css("box-shadow", "0 0 4px #811")
	// 	}
	// });


	// $("#selection").change(function() {
	// 	var selectedOption = $(this).find(":selected").text();
	// 	alert(selectedOption)
	// });

	// $("#form").submit(function(event) {
	// 	var textarea = $("#message");
	// 	if (textarea.val().trim() == "") {
	// 		textarea.css("box-shadow", "0 0 4px #811");
	// 		event.preventDefault();
	// 	} else {
	// 		// form will be submited.
	// 	}
	// });

	// Complete Form Validation on Submit

	var form = $("#form");
	enableFastFeedback(form);

	form.submit(function(event) {
		var name = $("#name").val();
		var password = $("#password").val();
		var message = $("#message").val();
		var checked = $("#checkbox").is(":checked")

		validateNameField(name, event);
		validatePasswordField(password, event);
		validateMessageField(message, event);
		validateCheckboxField(checked, event);
	});
});

	function enableFastFeedback(formElement) {
		var nameInput = formElement.find("#name");
		var passwordInput = formElement.find("#password");
		var messageInput = formElement.find("#message");
		var checkboxInput = formElement.find("#checkbox");
	
		nameInput.blur(function(event) {
			var name = $(this).val();
			validateNameField(name, event);
			if (!isValidName(name)) {
				$(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}) 
			} else {
				$(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}) 
			}
		});

		passwordInput.blur(function(event) {
			var password = $(this).val();
			validatePasswordField(password, event);
			if (!isValidPassword(password)) {
				$(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}) 
			} else {
				$(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}) 
			}
		});

		messageInput.blur(function(event) {
			var message = $(this).val();
			validateMessageField(message, event);
			if (!isValidMessage(message)) {
				$(this).css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}) 
			} else {
				$(this).css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}) 
			}
		});

		checkboxInput.change(function(event) {
			var isChecked = $(this).prop("checked");
			validateCheckboxField(message, event);
			if (!isChecked) {
				$(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #811", "border": "1px solid #600"}) 
			} else {
				$(this).add("label[for='checkbox']").css({"box-shadow": "0 0 4px #181", "border": "1px solid #060"}) 
			}
		});

	}

	function validateNameField(name, event) {
	if(!isValidName(name)) {
		$("#name-feedback").text("Please enter at least two characters");
		event.preventDefault();
	} else {
		$("#name-feedback").text("");
	}
}
function isValidName(name) {
	return name.length >= 2;
}


function validatePasswordField(password, event) {
	if(!isValidPassword(password)) {
		$("#password-feedback").text("Please enter at least 6 characters and number");
		event.preventDefault();
	} else {
		$("#password-feedback").text("");
	}
}
function isValidPassword(password) {
	return password.length >= 6 && /.*[0-9].*/.test(password);
}

function validateMessageField(message, event) {
	if(!isValidMessage(message)) {
		$("#message-feedback").text("Please enter a message");
		event.preventDefault();
	} else {
		$("#message-feedback").text("");
	}
}
function isValidMessage(message) {
	return message.trim() != "";
}


function validateCheckboxField(isChecked, event) {
    if (!isChecked) {
      $("#checkbox-feedback").text("Please agree to this");
      event.preventDefault();
    } else {
      $("#checkbox-feedback").text("");
    }
}

	






