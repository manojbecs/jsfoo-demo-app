function  bindValidationsForForm() {
	checkNotEmptyForAllFields();
	checkForEmailUniqueness();
}

function checkNotEmptyForAllFields(){
	$("#signup-form input").blur(function(){
		if($.trim($(this).val()) === "") {
			$("#signup-form").addClass("error");
			$(this).addClass("error");
			return(false);
		}
	});
}

function checkForEmailUniqueness() {
	$("#signup-form input#email").blur(function(){
		var emailValue = $(this).val();
		$.ajax({
 			type: "GET",
  			url: "/user/validate",
  			data: { email: emailValue },
  			success: function() {

  			},
  			error: function() {
  				$("#signup-form input#email").addClass("error");
  				$("#signup-form").addClass("error");
  			}
		});
	});
}