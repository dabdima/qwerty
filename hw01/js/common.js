
$("#burger").on("click", function () {
	$(".content aside").toggleClass("aside-hide");
});


$("#fontsize").on("keyup", function () {
	if (Number($("#fontsize").val()) <= 24 && Number($("#fontsize").val()) >= 8) {
		$(".right p").attr("style", ("font-size:"+ $("#fontsize").val() + "px; line-height:1.4;"));
	}
});


$("#bg_col").on("keyup", function () {
	$("#wraper .content").attr("style", ("background: #"+ $("#bg_col").val() + ";"));
});
