//1.compare of two JSON properties
function isEqual(a, b) {
    for (const property in a) {
      if (a[property] !== b[property]) {
        return false;
      }
    }
    return true;
  }
  
  let obj1 = {name:"Person1", age:5};
  let obj2 = {age:5, name:"Person1"};
  
  if (isEqual(obj1, obj2)) {
    console.log("The two JSON property are equal.");
  } else {
    console.log("The two JSON property are not equal.");   //output: "The two JSON property are equal."
  }
   
//2. restcountry all flags display in console

var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all")
request.send();
request.onload = function () {
    var data = JSON.parse(this.responseText);
    printData(data);
}
function printData(data) {
    if(data.length > 0) {
       for(let i= 0; i < data.length; i++) {
           const { flags }  = data[i];
           console.log(flags.svg);
       }
    }
}

//3. XMLHTTPREQUEST is an browser api

function printData(data) {
    if(data.length > 0) {
       for(let i= 0; i < data.length; i++) {
           const { name = {}, region = '', subregion = '', population = 0 }  = data[i];
           console.log(name.common, region, subregion, population);
       }
    }
}


