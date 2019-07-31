
function AddressBook() { // write a constructor function
this.contacts = [];
this.initialComplete = false; //set an initial value of false within the constructor.
}


//next let's write an asynchronous function:
AddressBook.prototype.getInitialContacts = function(cb) {
	var self = this;
//to make 'getInitialContacts' function asynchronous, we'll use set timeOut
	setTimeout(function() {
		self.initialComplete = true;
		if (cb) {
			return cb();
		}
	}, 3);
}

AddressBook.prototype.addContact = function(contact) {
	this.contacts.push(contact);
}

AddressBook.prototype.getContact = function(index) {
	return this.contacts[index];
}

AddressBook.prototype.deleteContact = function(index) {
	this.contacts.splice(index, 1);
}