$(function () {
	// $.load()
	// $("#code").load("js/scriptAJAX.js");
	
	// $("#code").load("js/scriptAJAX.js", function(response, status) {
	// 	if (status == "error") {
	// 		alert("Could not find file");
	// 	}
	// 	console.log(response);
	// });


	// var flikrApiUrl = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";

	// $.getJSON(flikrApiUrl, {
	// 	tags: "sun, beach",
	// 	tagmode: "any",
	// 	format: "json"
	// }).done(function (data) {
	// 	console.log(data);
	// 	$.each(data.items, function(index, item) {
	// 		console.log(item);
	// 		$("<img>").attr("src", item.media.m).appendTo("#flikr");
	// 		if (index == 4) {
	// 			return false;
	// 		}
	// 	});
	// }).fail(function() {
	// 	alert("Ajax call failed");
	// });

	var pokeapiUrl = "https://pokeapi.co/api/v2/generation/1";
	var pokemonByName = "https://pokeapi.co/api/v2/pokemon/";

	$.getJSON(pokeapiUrl).done(function (data) {
		console.log(data);
		$.each(data.pokemon_species, function(index, pokemon) {
			var name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
			var link = $("<a>").attr("id", pokemon.name).attr("href", "#").append($("<strong>").text(name));
			var par = $("<p>").html("Pkemon species no. " + (index+1) + " is ").append(link);
			
			link.click(function(event) {
				$.getJSON(pokemonByName + pokemon.name).done(function(details) {
					console.log(details);
					var pokemonDiv = $("#pokemon-details")
					pokemonDiv.empty();
					pokemonDiv.append("<h2>" + name + "</h2>");
					pokemonDiv.append("<img src='" + details.sprites.front_default + "'>")
					pokemonDiv.append("<img src='" + details.sprites.back_default + "'>")
					pokemonDiv.append("<img src='" + details.sprites.front_shiny + "'>")
					pokemonDiv.append("<img src='" + details.sprites.back_shiny + "'>")
				});
			});

			par.appendTo("#pokemon");
		});
	}).fail(function() {
		console.log("Request to Pokeapi failed.")
	}).always(function() {
		console.log("Pokemon is awesome.")
	})

});