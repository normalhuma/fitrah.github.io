//calc
function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printHistory(num){
    document.getElementById("history-value").innerText=num;
}
function getOutput(){
    return document.getElementById("output-values").innerText;
}
function printOutput(num){
    if(num==""){
    document.getElementById("output-values").innerText=num;
    }
    else{
        document.getElementById("output-values").innerText=getFormattedNumber(num);
    }
}
function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n=Number(num);
    var value= n.toLocaleString("en");
    return value;
}
function reverseNumberFormat(num){
    return Number(num.replace(/,/g, ''));
}
var operator = document.getElementsByClassName("operator");
for( var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
            if(this.id=="clear"){
                printHistory("");
                printOutput("");
            }
            else if(this.id=="backspace"){
                var
                output=reverseNumberFormat(getOutput()).toString();
                if(output){//if output has a value
                    output= output.substr(0,output.length-1);
                printOutput(output);
                }
            }
            else{
                var output = getOutput();
                var history = getHistory();
                if(output==""&&history!=""){
                    if(isNaN(history[history.length-1])){
                        history=history.substr(0,history.length-1);
                    }
                }
                if(output!="" || history!=""){
                    output= output==""?
                    output:reverseNumberFormat(output);
                    history=history+output;
                    if(this.id=="="){
                        var result= eval(history);
                        printOutput(result);
                        printHistory("");
                    }
                    else{
                        history=history+this.id;
                        printHistory(history);
                        printOutput("");
                    }
                }
            }
    });
}
var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}

// list
// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}