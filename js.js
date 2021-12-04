/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var text=['create solutions for problems.', 'form meaningful relationships.', "empathize with others' struggles.", 'help people live better lives.'];
var textIndex=0;



function typeWrite() {    
        var newArray = [];
        var currentText=text[textIndex];
        for (letter=0; letter<currentText.length + 1; letter++) {
                var currentLetter = currentText.slice(0,letter);
                var currentLetterString = currentLetter.toString();
                newArray.push(currentLetterString);
                }
        
        newArray.forEach((newArray, x) => {
                  setTimeout(() => {
                  
                  document.getElementById('typewrite').innerHTML=newArray + "|";
                }, x * 60);
              });
        console.log(textIndex)
        if (textIndex == 3) {
                      document.getElementById('typewrite').style.color="white";
                  }
        if (newArray.length == currentText.length + 1) {
            newArray =[];
        }
        
   }
   
 
   




function pleaseWork() {
    text.forEach((text, i) => {
            setTimeout(() => {
            typeWrite();
            textIndex = textIndex + 1;
                }, i * 3500);
              });
     }
     
function hello() {    
        var newArray = [];
        var currentText="Hi, I'm Anthony";
        for (letter=0; letter<currentText.length + 1; letter++) {
                var currentLetter = currentText.slice(0,letter);
                var currentLetterString = currentLetter.toString();
                newArray.push(currentLetterString);
                }
        
        newArray.forEach((newArray, x) => {
                  setTimeout(() => {
                  
                  document.getElementById('hello').innerHTML=newArray + "|";
                }, x * 60);
              });
        console.log(textIndex)
        if (textIndex == 3) {
                      document.getElementById('hello').style.color="white";
                  }
        if (newArray.length == currentText.length + 1) {
            newArray =[];
        }
        
   }
  /* for (let i=0 ; i < text.length + 1; i++) {
        console.log('i is: ' + i);
        console.log("text length is: " + text.length);
        
        /* setTimeout("typeWrite()", i * 4000); 
        console.log(text[textIndex]);
        typeWrite();
      
        textIndex = textIndex + 1;   
        
  } 
}
    

  
    /* if (term==text.length) {
        term=0;
    } */
 
/* function addLetter() {
                document.getElementById('typewrite').innerHTML=currentLetterString + "|";
                console.log(currentLetterString);
}


const terms = ['create solutions for problems.', 'empathize with others.', 'form meaningful relationships.', 'help people live better lives.' ];


terms.forEach((terms, i) => {
  setTimeout(() => {
    document.getElementById('typewrite').innerHTML=terms;
  }, i * 1000);
});


/* var aText = new Array(
'create solutions for problems.', 'empathize with others.', 'form meaningful relationships.', 'help people.' 
);
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
function typewriter()
{
    sContents =  ' ';
    iRow = Math.max(0, iIndex-iScrollAt);
    var destination = document.getElementById("typewrite");

    while ( iRow < iIndex ) {
     sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if ( iTextPos++ == iArrLength ) {
     iTextPos = 0;
     iIndex++;
     if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
     }
    } else {
     setTimeout("typewriter()", iSpeed);
    }

function typeWrite1() {    
        var newArray = [];
        var currentText=text[1];
        for (letter=0; letter<currentText.length + 1; letter++) {
                var currentLetter = currentText.slice(0,letter);
                var currentLetterString = currentLetter.toString();
                newArray.push(currentLetterString);
                }
        
        newArray.forEach((newArray, x) => {
                  setTimeout(() => {
                  document.getElementById('typewrite').innerHTML=newArray + "|";
                }, x * 80);
              });
       
        if (newArray.length == currentText.length + 1) {
            newArray =[];
        }
        
   }
   
   function typeWrite2() {    
        var newArray = [];
        var currentText=text[2];
        for (letter=0; letter<currentText.length + 1; letter++) {
                var currentLetter = currentText.slice(0,letter);
                var currentLetterString = currentLetter.toString();
                newArray.push(currentLetterString);
                }
        
        newArray.forEach((newArray, x) => {
                  setTimeout(() => {
                  document.getElementById('typewrite').innerHTML=newArray + "|";
                }, x * 80);
              });
       
        if (newArray.length == currentText.length + 1) {
            newArray =[];
        }
        
   }
   
   function typeWrite3() {    
        var newArray = [];
        var currentText=text[3];
        for (letter=0; letter<currentText.length + 1; letter++) {
                var currentLetter = currentText.slice(0,letter);
                var currentLetterString = currentLetter.toString();
                newArray.push(currentLetterString);
                }
        
        newArray.forEach((newArray, x) => {
                  setTimeout(() => {
                  document.getElementById('typewrite').innerHTML=newArray + "|";
                }, x * 80);
              });
       
        if (newArray.length == currentText.length + 1) {
            newArray =[];
        }
        
   }
 
} */

