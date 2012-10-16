describe("Sign Up form", function(){
	beforeEach(function(){
		loadFormFixture();
	});

	afterEach(function(){
	});

	describe("Validations", function(){
		
		it("should validate presence of name field", function(){
			var nameInput = $("input#name");
			bindValidationsForForm();
			nameInput.val(" ").trigger("blur");
			expect($("form#signup-form").hasClass("error")).toBeTruthy();
			expect(nameInput.hasClass("error")).toBeTruthy();
		});	

		it("should validate the uniqueness of email field", function(){
			var server = sinon.fakeServer.create();
           	server.respondWith('GET', "/user/validate", [422, {'Content-Type': 'application/json'}, "{email: 'Already present'}"]);

			var emailInput = $("input#email");
			bindValidationsForForm();
			emailInput.val("sample@email.com").trigger("blur");

			server.respond();

			expect($("form#signup-form").hasClass("error")).toBeTruthy();
			expect(emailInput.hasClass("error")).toBeTruthy();

			server.restore();
		});

	});
	
});