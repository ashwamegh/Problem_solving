
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  str = str.replace(/\s(?=[A-Z])/g,"").replace(/_/g,'').replace(/[A-Z]/g,v => ' '+v.toLowerCase()).trim().replace(/\s/g,'-');
  console.log(str);
  return str;
}

spinalCase('Teletubbies say_Eh-oh');