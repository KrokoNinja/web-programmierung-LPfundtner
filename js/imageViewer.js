//get elements
const fullImage = document.getElementById("full-image");
const imageViewer = document.getElementById("image-viewer");
const body = document.body;

document.querySelector(".grid").addEventListener("click", function(e){
  //set the full image src to the clicked image
  fullImage.src = e.target.src;
  //display the image viewer
  imageViewer.style.display = "block";
  //disable scroll on the body
  bodyScrollLockUpgrade.disableBodyScroll(body);
});

document.querySelector("#image-viewer .close").addEventListener("click", function(){
  //hide the image viewer
  imageViewer.style.display = "none";
  //enable scroll on the body
  bodyScrollLockUpgrade.enableBodyScroll(body);
});