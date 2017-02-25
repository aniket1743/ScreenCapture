'use strict';

var dark = "body {background: rgb(128,128,128); opacity: 0.5;}"; 
var add = document.querySelector("#capture");

// Error Handler
function onError(error){
  if(error)console.log('Callback: ' + error);
}

//  Opening Image Page
function handleImage(data){
  var new_window = window.open("image.html", false);
  new_window.focus();
  new_window.addEventListener('load',function(){
    new_window.init(data);
  }, true);
}

// Taking Screenshot
function getId(tabs){
  var tab = tabs[0];
  chrome.tabs.captureVisibleTab(tab.windowId, {"format": "png"}, handleImage);
}

// SELECTED TAB
function alterCSS(){
  chrome.tabs.query({currentWindow: true, active: true}, getId);
}

// Event Handler
if(add){
  add.addEventListener("click", alterCSS);
}else console.log("add : NULL\n");



