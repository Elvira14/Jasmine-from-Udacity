describe('Address Book', function() { //'Address Book' - is a new suite
	var addressBook,
	thisContact;

	beforeEach(function() {
		addressBook = new AddressBook(),
		thisContact = new Contact();   
	}); 

	it('should be able to add a contact', function() { //it 'should be able to add a contact' - is a spec
		addressBook.addContact(thisContact);

		//What is a good way for us to test that this contact was actually added to my address book?
		expect(addressBook.getContact(0)).toBe(thisContact);

		//We will also need 'getContact method' in my address Book that accepts an integer index
	});

it('should be able to delete a contact', function() {

	addressBook.addContact(thisContact);
	addressBook.deleteContact(0);

	expect(addressBook.getContact(0)).not.toBeDefined();

	});

});

//Let's write a new test suite called 'Async Address Book'
describe('Async Address Book', function() {
	var addressBook = new AddressBook();

	beforeEach(function(done) {
		addressBook.getInitialContacts(function() {
			done(); // this 'done' function will signal to the framework that our asynchronous func.is done doing what we needed it to do.
		});
	});

	it('should grab initial contacts', function(done) { 
		
		expect(addressBook.initialComplete).toBe(true);
		done(); // this 'done' signals to the framework which of our tests rely upon that asynchronous execution
	});
});

// OPTIONAL] Take special note of the case 
//where if you pass in the done function as an argument, 
//you must also call it (otherwise things break!). 
//And hopefully the Jasmine team will accept a pull request 
//to update this information for all students.
//Also note, if you are testing async, you do not need to pass in and call 'done'.