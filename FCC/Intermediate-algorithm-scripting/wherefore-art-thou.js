
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  
  // Only change code below this line
  collection.forEach((element) =>{

    if (Array.isArray(source)){
      source.forEach((sourceElement)=>{
      var keys = Object.keys(sourceElement);
      keys.forEach((key)=>{
      if( element.hasOwnProperty(key) && source[key] === element[key]){
        arr.push(element);
       }
     });      
   });
 } else{
   let keys = Object.keys(source);
   let count = 0;
   console.log(element);
    keys.forEach((key)=>{
      if( element.hasOwnProperty(key) && source[key] === element[key]){
        count++;
       }
     });
     if(count=== keys.length){ arr.push(element); }
   }  

  });
  
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });