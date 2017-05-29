
function translatePigLatin(str) {
    let vowels = "a,e,i,o,u".split(',');
    let newstr = str.split('');
    let arr = [];
    let pigArray=[];

    if( vowels.indexOf(newstr[0]) === -1){
         let i = 0;
         while( vowels.indexOf(newstr[i]) === -1 ){
             arr.push(str[i]);
             i++;
         }
         pigArray = newstr.slice(arr.length);
         pigArray =  pigArray.concat(arr);
         pigArray.push("ay");
         return pigArray.join('');
    }
    else{
         newstr.push("way");
    }
    return newstr.join('');
}

translatePigLatin("paragraphs");
