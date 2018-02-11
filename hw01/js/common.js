
//sidebar
$("#burger").on("click", function () {
	$(".content aside").toggleClass("aside-hide");
});

//changing font size for <p> in .middle-content
$("#fontsize").on("keyup", function () {
	if (Number($("#fontsize").val()) <= 24 && Number($("#fontsize").val()) >= 8) {
		$(".right p").attr("style", ("font-size:"+ $("#fontsize").val() + "px; line-height:1.4;"));
	}
});

//changing background color
$("#bg_col").on("keyup", function () {
	$("#wraper").attr("style", ("background: #"+ $("#bg_col").val() + ";"));
});

//changing font family
$("#font_family").on("change", function () {
	var font_option;
	switch (Number($("#font_family").val())) {
	  case 2:
	    font_option = "serif";
	    break;
	  case 3:
	    font_option = "ubuntu";
	    break;
	  case 4:
	    font_option = "days";
	    break;
	  default:
	    font_option = "sans-serif, Arial";
	}
	$("html, body").attr("style", ("font-family: "+ font_option + ";"));
});

//delete the last p in content
$("#delete_p").on("click", function () {
	$('.right p:last').remove();
});
