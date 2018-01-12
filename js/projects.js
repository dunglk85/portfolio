$(document).ready(function() {
	$('.fancybox').fancybox({
		padding: 5
	});
});

function filterElement(ele) {
	// add class "active" to curren btn
	$('button').filter(".active").removeClass("active");
	$(ele).addClass("active");
	//filter
	if (ele.id == "all") {
		$('figure').css("display","block");
	} else {
		$('figure').css("display","none");
		$('figure').filter("."+ele.id).css("display","block");
	}
}