function  bindValidationsForForm() {
	$("#signup-form input").blur(function(){
		if($.trim($(this).val()) === "") {
			$("#signup-form").addClass("error");
			return(false);
		}
	});
}