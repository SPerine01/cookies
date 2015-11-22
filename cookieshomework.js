$(document).ready(function(){
	if(location.search){
		params = location.search.split("?") [1];
		value = params.split("=")[1];
		Cookies.set("deeznutz", value);
		}


	$("#submit").click(function() {
		$("#form").hide(500);
		// $("#hip-hop").slideToggle(2500);
	});

});


$(".butty").click(function(){
		$(".butty").hide("fast");
		$(".butty").html( + Cookies.get("<p>'deeznutz'</p>"));
		$("#words").fadeOut("fast");
		$("#show_it").fadeIn("2500");
	});