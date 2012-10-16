describe("Sign Up form", function(){
	beforeEach(function(){
		/*:DOC += <!DOCTYPE html>
		<form id='signup-form' action="/" method="post" class="form-horizontal">
	    	<input id="name" name='name' type='text'></input>
        	<input id="email" name='email' type='text'></input>
        	<input id="password" name='password' type='password'></input>    
        	<button class='btn btn-primary' type='submit'>Sign Up</button>
   		</form>
   		*/
	});

	afterEach(function(){
	});

	describe("Validations", function(){
		
		it("should validate presence of name field", function(){
			var nameInput = $("input#name");
			bindValidationsForForm();
			nameInput.val(" ").trigger("blur");
			expect($("form#signup-form").hasClass("error")).toBeTruthy();
		});	



	});
	
});