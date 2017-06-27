// https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarl

    let fullNameString = firstAndLast;
    let firstNameString = fullNameString.split(' ')[0];
    let lastNameString = fullNameString.split(' ')[1];
    this.getFullName = function() {
      return fullNameString.trim();
    };
    this.getFirstName = function(){
        return firstNameString;
    };
    this.getLastName = function(){
        return lastNameString;
    };
    this.setFirstName = function(first){
        firstNameString = first;
    };
    this.setLastName = function(last){
        lastNameString = last;
    };
    this.setFullName = function(fullName){
        fullNameString = fullName;
    };
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setFirstName("Haskell")
console.log(bob.getFullName());