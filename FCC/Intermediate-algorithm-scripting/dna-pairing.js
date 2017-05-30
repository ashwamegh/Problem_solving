
function pairElement(str) {
  let strarr = str.split('');
  let dnaArr = [];
  
  strarr.forEach((singlet)=>{
      switch (singlet) {
          case 'C':
              dnaArr.push(['C','G']);
              break;
          case 'G':
              dnaArr.push(['G','C']);
              break;
          case 'A':
              dnaArr.push(['A','T']);
              break;
          case 'T':
              dnaArr.push(['T','A']);
              break;
          default:
              break;
      }
  });
  
  return dnaArr;
}

pairElement("GCG");
