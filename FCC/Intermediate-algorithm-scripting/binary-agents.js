// https://www.freecodecamp.com/challenges/binary-agents

function binaryAgent(str) {
    let binaryDigits = str.split(' ');
    binaryDigits = binaryDigits.map((element) => {
    element = element.split('');
     let deciamlNumber = element.reduce((accum =0, value, index) => {
            return parseInt(accum) + parseInt((Math.pow(2, 7 - index) * parseInt(value)));
        });
        return String.fromCharCode(deciamlNumber);
    });
  return binaryDigits.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
