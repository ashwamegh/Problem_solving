
function convertToRoman(num) {

    if (num>=1000){
        base = Math.floor(num/1000) * 1000;
        extras = num%1000;
        romanNumber = extras!==0?convertToSymbols(base)+convertToSymbols(extras):convertToSymbols(base);
    }
    else if(num >=100){
       return getThousandRomans(num);
    }
    else if(num>=10){
        return getTensRoman(num);
    }
    else{
        romanNumber = convertToSymbols(num);
    }
    return romanNumber;
}

function getTensRoman(num){
    let romanNumber="",base=0,extras=0;
    base = Math.floor(num/10) * 10;
    extras = num%10;
    romanNumber = extras!==0?convertToSymbols(base)+convertToSymbols(extras):convertToSymbols(base);
    console.log(romanNumber)
    return romanNumber;
}

function getThousandRomans(num){
    let romanNumber="",base=0,extras=0;
    base = Math.floor(num/100)* 100;
    extras = num%100;
    let extras_roman="";
    if (extras>9){
    extras_roman = getTensRoman(extras);
    romanNumber = extras!==0?convertToSymbols(base)+extras_roman:convertToSymbols(base);
        console.log(romanNumber)
    }
    else {
    romanNumber =  extras!==0?convertToSymbols(base)+convertToSymbols(extras):convertToSymbols(base);
    }

    return romanNumber;
}

function convertToSymbols(num) {
    let symbols = {
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
    return symbols[num];
}

convertToRoman(78);
