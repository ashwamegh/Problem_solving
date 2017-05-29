
function myReplace(str, before, after) {
  let checkCase = before.split('');
  checkCase[0] = checkCase[0].toUpperCase();
  checkCase = checkCase.join('');
  if (before === checkCase){
    after = after.split('');
    after[0] = after[0].toUpperCase();
    after = after.join('');
  }
  return str.replace(before, after);
}