markedCoordinates = [];

function selectMarkers(){
  showImageMask();
  if(document.getElementById("selectMarkersButton").innerHTML == "Done"){
    document.getElementById("selectMarkersButton").innerHTML = "Select Markers";
    document.getElementById("selectMarkersButton").style.color = "black";
    hideImageMask();
  }
  else {
    document.getElementById("selectMarkersButton").innerHTML = "Done";
    document.getElementById("selectMarkersButton").style.color = "red";
  };
};


function loadImage(){
  var subjectN = document.getElementById("subjectNumber").value;
  document.getElementById("image").src = "lib/stills/v" + subjectN + "/001.png";
};

function loadMask(){
  var maskSpace = document.getElementById("imageMaskSpace");
  maskSpace.style.height = document.getElementById("image").height.toString() + "px";
  maskSpace.style.width = document.getElementById("image").width.toString() + "px";
  document.getElementById("loadMaskButton").style.color = "green";
  document.getElementById("loadMaskButton").innerHTML = "Mask Loaded";
  document.getElementById("loadMaskButton").disabled = true;
};

function showImageMask() {
  document.getElementById("imageMaskSpace").style.opacity = "0.2";
};

function hideImageMask() {
  document.getElementById("imageMaskSpace").style.opacity = "0";
};

function pointClick(event) {
  markedCoordinates.push({x:event.clientX, y:event.clientY});
  var id = event.clientX.toString() + 'x' + event.clientY.toString();
  console.log("Clicked: " + id);
  var newPix = '<div class="pix" id="' + id + '"></div>';
  document.getElementById("imageMaskSpace").innerHTML = document.getElementById("imageMaskSpace").innerHTML.concat(newPix);
  setTimeout(function(){
    document.getElementById(id).style.left = event.clientX.toString() + "px";
    document.getElementById(id).style.top = event.clientY.toString() + "px";
  }, 300);
}

function analyze(){
  var img = document.getElementById('image');
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0, img.width, img.height);
  //in the following line I could potentially get an entire rectangle (for now 1 pixel)
//  var pixelData = canvas.getContext('2d').getImageData(xStart, yStart, xEnd, yEnd).data;
}

function getMarkedCoordinates() {

}
