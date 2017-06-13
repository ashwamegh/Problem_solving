
function telephoneCheck(str) {
  // Good luck!
  let strArr = str.split('');

  if(strArr.lastIndexOf(')') > 6 || (strArr.indexOf('(')>-1 && strArr.indexOf(')')===-1) || (strArr.indexOf(')')>0 && strArr.indexOf('(')===-1)){
      return false;
  }
  else{
    nonStr = str.replace(/[0-9]/g,'').split('');
    str = str.replace(/[^0-9]/g,'');

    return str.length === 10?true:(str.length === 11 && str[0]==='1'?true:false);
  }
}


telephoneCheck("(555-555-5555");
