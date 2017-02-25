
var save = document.querySelector("#save");
var copy = document.querySelector("#copy");
var fb = document.querySelector("#fb");
var tweet = document.querySelector("#tweet");
var drive = document.querySelector("#drive");

var imageUrl = "asd";
var name = "asd";

// GLOBAL VARIABLES	GOOGLE DRIVE
// var SCOPES = ['https://www.googleapis.com/auth/drive','profile'];
// var CLIENT_ID = '938156178764-0bk89ahe90glsu0lh61jtgu1qqu4e94n.apps.googleusercontent.com';
// var FOLDER_NAME = "";
// var FOLDER_ID = "root";
// var FOLDER_PERMISSION = true;
// var FOLDER_LEVEL = 0;
// var NO_OF_FILES = 1000;
// var DRIVE_FILES = [];
// var FILE_COUNTER = 0;
// var FOLDER_ARRAY = [];


//   Initializing Image Page
function init(data){
	imageUrl = data;
	name = Math.random().toString(36).substr(2, 9) + ".png";
	img = new Image();
	img.src = data;
	img.style.margin = "auto";
	img.id = "image";
	document.body.appendChild(img);
	save.addEventListener("click", saveFile);
	copy.addEventListener("click", copyLink);
	fb.addEventListener("click", shareFacebook);
	tweet.addEventListener("click", shareTweet);
	drive.addEventListener("click", shareDrive);
}


//  Copy dataURI to ClipBoard
function copyLink(){
	var image = document.querySelector('#image');
  var dummy = document.createElement("input");
  document.body.appendChild(dummy);
  dummy.setAttribute("id", "dummy_id");
  document.getElementById("dummy_id").value=image.src;
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  window.alert("dataURI Copied to ClipBoard");
}


//  Save Image
function saveFile() {
  var link = document.createElement("a");
  link.download = name;
  link.href = imageUrl;
  console.log(imageUrl);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  delete link;
}


// Sharing  Image 
function shareFacebook(){
	window.alert("Not Available");
}
function shareTweet(){
	window.alert("Not Available");
}
function shareDrive(){
	window.alert("Not Available");
}

// save.addEventListener("click", saveFile);
// copy.addEventListener("click", copyLink);
// fb.addEventListener("click", shareFacebook);
// tweet.addEventListener("click", shareTweet);
// drive.addEventListener("click", shareDrive);