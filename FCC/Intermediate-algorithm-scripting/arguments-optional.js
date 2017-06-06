// https://www.freecodecamp.com/challenges/arguments-optional

function addTogether(a, b) {
    if ( typeof a ==='number' && arguments.length===1){
        /**
         * This returned closure function accepts a second argument 
         * then add the previous argument with the current one.
         */
        return b => addTogether(a,b);
    }
    else if ( typeof b === 'number' && typeof a ==='number'){
        return a+b;
    }
    else{
        return undefined;
    }
  }

addTogether('http://bit.ly/IqT6zt');
