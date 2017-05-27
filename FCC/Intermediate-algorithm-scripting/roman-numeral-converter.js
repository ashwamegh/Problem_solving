const symbols = {
        1: "I",
        2: "II",
        3: "III",
        4: "IV",
        5: "V",
        6: "VI",
        7: "VII",
        8: "VIII",
        9: "IX",
        10: "X",
        20: "XX",
        30: "XXX",
        40: "XL",
        50: "L",
        60: "LX",
        70: "LXX",
        80: "LXXX",
        90: "XC",
        100: "C",
        200: "CC",
        300: "CCC",
        400: "CD",
        500: "D",
        600: "DC",
        700: "DCC",
        800: "DCCC",
        900: "CM",
        1000: "M"
    };

     const numbers = Object.keys(symbols).reverse();
     let romanNumber = "";

function convertToRoman(num) {
     if (num === 0){
         return '';
     }
     else{
         for ( let i = 0; i < numbers.length ; i++){
             if( num>=numbers[i]){
                 romanNumber = symbols[numbers[i]] + convertToRoman(num-numbers[i]);
                 return romanNumber;
             }
         }
     }
}

convertToRoman(99);
