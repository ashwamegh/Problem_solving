
function convertHTML(str) {
  // &colon;&rpar;
  const htmlStringArr = str.split('');
  const htmlEntities ={'&' : '&amp;','>' : '&gt;','<' : '&lt;',"\'": '&apos;','\"': '&quot;'};

  htmlStringArr.forEach((htmlStr,index) => {
      if (htmlEntities.hasOwnProperty(htmlStr)){
          htmlStringArr[index] = htmlEntities[htmlStr];
      }
  })
  return htmlStringArr.join('');
}

convertHTML("Dolc'e & Gabbana");
