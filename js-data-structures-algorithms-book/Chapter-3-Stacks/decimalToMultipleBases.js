let Stack = require('./stacks-es6');

const DecimalToMultipleBases = (decimalNumber, base) =>{

	let finalBaseNumber = new Stack(),
		digits = '0123456789ABCDEF',
	    finalBaseNumberString='';

	while(decimalNumber > 0){
		let remainder = Math.floor(decimalNumber%base);
		finalBaseNumber.push(remainder);
		decimalNumber = Math.floor(decimalNumber/base);
	}

	while(!finalBaseNumber.isEmpty()){
		finalBaseNumberString += digits[finalBaseNumber.pop().toString()];
	}

	return finalBaseNumberString;
}

console.log(DecimalToMultipleBases(555,16));