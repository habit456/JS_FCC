var Person = function(firstAndLast) {
  let firstName = firstAndLast.split(' ')[0];
  let lastName = firstAndLast.split(' ')[1];
  let fullName = firstName + ' ' + lastName;
  this.getFullName = function() {
    return fullName;
  };
  this.getFirstName = function() {
    return firstName;
  };
  this.getLastName = function() {
    return lastName;
  };
  this.setFirstName = function(str) {
    firstName = str;
    fullName = firstName + ' ' + lastName;
  };
  this.setLastName = function(str) {
    lastName = str;
    fullName = firstName + ' ' + lastName;
  };
  this.setFullName = function(str) {
    firstName = str.split(' ')[0];
    lastName = str.split(' ')[1];
    fullName = firstName + ' ' + lastName;
  };
};

var bob = new Person('Bob Ross');
console.log(bob.getFullName());