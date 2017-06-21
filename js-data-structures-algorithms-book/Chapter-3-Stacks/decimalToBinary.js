let Stack = require('./stacks-es6');

const DecimalToBinary = (decimalNumber) =>{

	let binaryNumber = new Stack(),
	    binaryNumberString='';

	while(decimalNumber > 0){
		let remainder = Math.floor(decimalNumber%2);
		binaryNumber.push(remainder);
		decimalNumber = Math.floor(decimalNumber/2);
	}

	while(!binaryNumber.isEmpty()){
		binaryNumberString += binaryNumber.pop().toString();
	}

	return binaryNumberString;
}

console.log(DecimalToBinary(555));