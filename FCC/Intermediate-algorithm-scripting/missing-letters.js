
function fearNotLetter(str) {
    let compareStr ="", strArr = str.split(''), lostStr="";

    for( let i = str.charCodeAt(0); i <= str.charCodeAt(str.length-1); i++){
        compareStr += String.fromCharCode(i);
    }
    if (compareStr.length !== str.length){
        for (let i = 0; i< compareStr.length; i++){
            if (strArr.indexOf(compareStr[i])=== -1)  lostStr = compareStr[i];
        }
    }
    else return undefined;
    
  return lostStr;
}

fearNotLetter("yz");
