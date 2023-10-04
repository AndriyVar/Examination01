'use strict'

class Contact {
    constructor(firstName, lastName, phoneNumber, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.phoneNumber = phoneNumber;
      this.email = email;
    }
}
  
class PhoneBook {
    constructor() {
        this.contacts = [];
    }
  
    add(contact) {
        this.contacts.push(contact);
    }
  
    edit(index, updatedContact) {
        if (index >= 0 && index < this.contacts.length) {
            this.contacts[index] = updatedContact;
        }
    }
  
    delete(index) {
        if (index >= 0 && index < this.contacts.length) {
            this.contacts.splice(index, 1);
        }
    }
  
    getAllContacts() {
        return this.contacts;
    }
}

const book = new PhoneBook();

const cont1 = new Contact('John', 'John', '3456789456789', 'ertyu@mail.com');
const cont2 = new Contact('Bill', 'John', '3456789456789', 'ertyu@mail.com');
const cont3 = new Contact('Alice', 'John', '3456789456789', 'ertyu@mail.com');
const cont4 = new Contact('Mary', 'John', '3456789456789', 'ertyu@mail.com');
const cont5 = new Contact('Tom', 'John', '3456789456789', 'ertyu@mail.com');

book.add(cont1);
book.add(cont2);
book.add(cont3);
book.add(cont4);
book.add(cont5);

console.log(book.getAllContacts());

const editCont = new Contact('Mary', 'Jane', '3456789456789', 'ertyu@mail.com');
book.edit(0, editCont);

console.log(book.getAllContacts());

book.delete(1);

console.log(book.getAllContacts());