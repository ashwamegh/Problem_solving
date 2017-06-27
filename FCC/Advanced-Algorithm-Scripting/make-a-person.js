// https://www.freecodecamp.com/challenges/make-a-person

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarl

     fullNameString = firstAndLast;
     firstNameString = fullNameString.split(' ')[0];
     lastNameString = fullNameString.split(' ')[1];
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
        fullNameString = firstNameString +' '+lastNameString;
    };
    this.setLastName = function(last){
        lastNameString = last;
        fullNameString = firstNameString +' '+lastNameString;
    };
    this.setFullName = function(fullName){
        fullNameString = fullName;
     firstNameString = fullNameString.split(' ')[0];
     lastNameString = fullNameString.split(' ')[1];
    };
    
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.setLastName("Curry");
console.log(bob.getFullName());