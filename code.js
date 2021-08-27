/* A string that could be semantically seperated by commas or possible spaces. */
let gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";
let lotrCitiesArray = [ /* An Array */
  "Mordor",
  "Gondor",
  "Rohan",
  "Beleriand",
  "Mirkwood",
  "Dead Marshes",
  "Rhun",
  "Harad",
];
/* An english sentence without the suffix period */
let bestThing =  "The best thing about a boolean is even if you are wrong you are only off by a bit";

// ----------------------------------------------------------------------
// Complete the Following Katas
// ----------------------------------------------------------------------

// Remember to also append the results to your HTML page for every kata!
// Use document.createElement() to create the HTML with JavaScript
// This should be in the format:
// <h3>Kata 0</h3>
// <div>["Your", "array", "result", "here"]</div>

// Remember to render your arrays with JSON.stringify();

// Hint: You could create a function which renders any result to the DOM,
// then just call this function inside each kata!  That way you only have to write code to render
// to the DOM once :)


/*************************************************************** * /
/* An action that uses the Document Object model to proove that
/* the exercise is completed. If the object is an array, they want us
/* to try to use the clumsy `JSON.stringify` method per instructions; 
/* why not join or something else?
/* *@n* An arbitrary numerical index.
/* *@lambda* A JavaScript Object. Presumably an Array or a String.
/* *@return* lambda
 */
function renderDOM(n,lambda){
  r_body     =  document.getElementsByTagName("body")[0];

  r_wrapper  =  document.createElement("div");
  r_label    =  document.createElement("h3");
  r_content  =  document.createElement("div");

  r_label.innerHTML = "Kata " + n;
  r_content.innerHTML = JSON.stringify(lambda);

  r_wrapper.append( r_label   );
  r_wrapper.append( r_content );

  r_body.append(    r_wrapper);
  return lambda;
}


// Write a function that returns an array with the cities in 'gotCitiesCSV'.
function kata1() {
  return renderDOM(1,gotCitiesCSV.split(','));
}
//kata1(); // Remember to execute your function!

// Write a function that returns an array of words from the sentence in 'bestThing'.
function kata2() {
  return renderDOM(2, bestThing.split(" "));
}

// Write a function that returns a string separated by semi-colons instead of commas from 'gotCitiesCSV'.
function kata3() {
  return renderDOM(3,  gotCitiesCSV.replaceAll(",",";") );
}

// Write a function that returns a CSV (comma-separated) string from the 'lotrCitiesArray'.
function kata4() {
  return renderDOM(4, lotrCitiesArray.join(","));
}

// Write a function that returns an array with the first 5 cities in 'lotrCitiesArray'.
function kata5() {
  return renderDOM(5, lotrCitiesArray.slice(0,5) );
}

// Write a function that returns an array with the last 5 cities in 'lotrCitiesArray'.
function kata6() {
  /* Assume we don't know the length of the target array */
  return renderDOM(6, 
    lotrCitiesArray.slice( 
      Math.max( lotrCitiesArray.length-5 , 0) ) );
}

// Write a function that returns an array with the 3rd to 5th city in 'lotrCitiesArray'.
function kata7() {
  return renderDOM(7, lotrCitiesArray.slice(2,5) );
}

// Write a function that uses 'splice' to remove 'Rohan' from 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.'
function kata8() {
  /* 
    + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice][mdn::Array.splice]]*/
  L=lotrCitiesArray.findIndex( (e) => {return e==="Rohan"}   );
  lotrCitiesArray.splice(L,1);
  return renderDOM(8, lotrCitiesArray );
}

// Write a function that uses 'splice' to remove all cities after 'Dead Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata9() {
  /* Instructions do not say to exclude 'Dead Marshes' */
  L=lotrCitiesArray.findIndex( (e) => {return e==="Dead Marshes"}   );
  lotrCitiesArray.splice(L+1, lotrCitiesArray.length);
  return renderDOM(9, lotrCitiesArray );
}

// Write a function that uses 'splice' to add 'Rohan' back to 'lotrCitiesArray' right after 'Gondor' and returns the modified 'lotrCitiesArray'.
function kata10() {
  L=lotrCitiesArray.findIndex( (e) => {return e==="Gondor"}   );
  lotrCitiesArray.splice(L+1,0, "Rohan");
  return renderDOM(10, lotrCitiesArray );
}

// Write a function that uses 'splice' to rename 'Dead Marshes' to 'Deadest Marshes' in 'lotrCitiesArray' and returns the modified 'lotrCitiesArray'.
function kata11() {
  L=lotrCitiesArray.findIndex( (e) => {return e==="Dead Marshes"}   );
  lotrCitiesArray.splice(L,1, "Deadest Marshes");
  return renderDOM(11, lotrCitiesArray );
}

// Write a function that uses 'slice' to return a string with the first 14 characters from 'bestThing'.
function kata12() {
  return renderDOM(12, bestThing.slice(0,14));
}

// Write a function that uses 'slice' to return a string with the last 12 characters from 'bestThing'.
function kata13() {
  /* Dyslexia strikes. Thirteenth exercise and the number we need to use is twelve. */
  return renderDOM(13,  bestThing.slice(bestThing.length - 12) );
}

// Write a function that uses 'slice' to return a string with the characters between the 23rd and 38th position of 'bestThing' (i.e., 'boolean is even').
function kata14() {
   /* Extra effort to write safe code for no reason. */
  return renderDOM(14,
    bestThing.slice( Math.max(23,0),Math.min(38,bestThing.length) )
  );
}

// Write a function that does the exact same thing as #13 but use the 'substring' method instead of 'slice'.
function kata15() {
  return renderDOM(15,  bestThing.substr( bestThing.length-12 ) );
}

// Write a function that does the exact same thing as #14 but use the 'substring' method instead of 'slice'.
function kata16() {
  return renderDOM(16,  bestThing.substr(23,15));
}

XI=null;
// Write a function that uses 'pop' to remove the last city from 'lotrCitiesArray' and returns the modified array.
function kata17() {
  XI=lotrCitiesArray.pop();
  return renderDOM(17,  lotrCitiesArray);
}

// Write a function that uses 'push' to add back the city from 'lotrCitiesArray' that was removed in #17 to the back of the array and returns the modified array.
function kata18() {
  lotrCitiesArray.push(XI);
  return renderDOM(18,  lotrCitiesArray);
}

// Write a function that uses 'shift' to remove the first city from 'lotrCitiesArray' and returns the modified array.
function kata19() {
  /* [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift][mdn::shift]]
   Reverse and pop would be more fun :P
   A stack is also a deck :D
   */
   XI=lotrCitiesArray.shift();
   return renderDOM(19,lotrCitiesArray);
}

// Write a function that uses 'unshift' to add back the city from 'lotrCitiesArray' that was removed in #19 to the front of the array and returns the modified array.
function kata20() {
  lotrCitiesArray.unshift(XI);
  return renderDOM(20,  lotrCitiesArray);
}

// ----------------------------------------------------------------------
// Optional Practice Problems - Complete these for extra practice
// ----------------------------------------------------------------------

// Remember to append the results of each kata to the page as well as return the result!

// Write a function that finds and returns the index of 'only' in 'bestThing'.
function kata21() {
  return renderDOM(21, bestThing.indexOf("only") );
}
// Write a function that finds and returns the index of the last word in 'bestThing'.
function kata22() {
  return renderDOM(22, 
    bestThing.indexOf(  bestThing.split(" ").pop() ) 
  );
}
// Write a function that finds and returns an array of all cities from 'gotCitiesCSV' that use double vowels ('aa', 'ee', etc.).
function kata23() {
  /* 
  + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter][mdn::Array/filter]]
  + [[https://www.w3schools.com/js/js_loop_forin.asp][w3schools::forin]]*/
  function containsDoubleVowel(word){
    for( v of "aeiou")
      if(word.includes(v+v))
          return true;
    return false;
  }
  return renderDOM(23,
    lotrCitiesArray.filter( 
      (word) => { return containsDoubleVowel(word); }//word
    )//filter
  );
}
// Write a function that finds and returns an array with all cities from 'lotrCitiesArray' that end with 'or'.
function kata24() {
  /* [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match][mdn::String/match]]
     Exactly the same as the last problem
     How do I represent the empty string at the end?
      x="alligator";
      y="ortega";
      z="aorta"
  */
  function suffixedByOr(word){
    return !( word.match("or$")===null );
  }
  return renderDOM(24,
    lotrCitiesArray.filter( 
      (word) => { return suffixedByOr(word); }//word
    )//filter
  );
}
// Write a function that finds and returns an array with all the words in 'bestThing' that start with a 'b'.
function kata25() {
  /*
    Same as the last one; just convert the string to an array of words.
    Recall that ^ stands for the prefix empty string.
  */
    function prefixedBy_b(word){
      return !( word.match("^b")===null );
    }
  return renderDOM(25,
    bestThing.split(" ").filter( 
      (word) => { return prefixedBy_b(word); }//word
    )//filter
  );
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Mirkwood'.
function kata26() {
  return renderDOM(26,
    lotrCitiesArray.includes("Mirkwood")?"Yes":"No"
  );
}
// Write a function that returns 'Yes' or 'No' if 'lotrCitiesArray' includes 'Hollywood'.
function kata27() {
  return renderDOM(27,
    lotrCitiesArray.includes("Hollywood")?"Yes":"No"
  )
}
// Write a function that returns the index of 'Mirkwood' in 'lotrCitiesArray'.
function kata28() {
  /*
  + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array][mdn::Array]]
   */
    return renderDOM(28,
      lotrCitiesArray.indexOf("Mirkwood")
    )
}
// Write a function that finds and returns the first city in 'lotrCitiesArray' that has more than one word.
function kata29() {
  /*
  + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find][mdn::Array/find]]*/
  return renderDOM(29,
    lotrCitiesArray.find((word)=>{
      return word.split(" ").length>1
    })
  )
}
// Write a function that reverses the order of 'lotrCitiesArray' and returns the modified array.
function kata30() {
  return renderDOM(30,
    lotrCitiesArray.reverse()
  );
}
// Write a function that sorts 'lotrCitiesArray' alphabetically and returns the modified array.
function kata31() {
  /* 
    + [[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String#Comparing][mdn::String#Comparing]]*/
  function compareMyStrings(u,v){
    u=u.toUpperCase();
    v=v.toUpperCase();
    if(      u<v ) return -1;
    else if( u>v ) return  1;
    return 0;
  }
  return renderDOM(31,
    lotrCitiesArray.sort( compareMyStrings )
  );
}
// Write a function that sorts 'lotrCitiesArray' by the number of characters in each city (i.e., shortest city names go first) and return the modified array.
function kata32() {
  /* 
    + Same as the last problem
  */
  function compareMyStrings(u,v){
    if(      u.length <  v.length )      return -1;
    else if( u.length >  v.length )      return  1;
    return 0;
  }
  return renderDOM(32,
    lotrCitiesArray.sort( compareMyStrings )
  );
}

/*
+ [[https://www.codewars.com/kata/57356c55867b9b7a60000bd7/javascript][codewars::57356]]
+ Could write thirty lines of functions to execute. Recalling my
  solution to a codewars exercize that can save time. A function that
  acts as a calculator.
  */
for(n of Array(31).keys()){
  // console.log("kata"+(n+1)+"()");
  symbolicExpression = "kata"+(n+1)+"()";
  car=eval(symbolicExpression);
}