
// temporary
function popUp() {
  alert("Website is still in progress")
}

var drpdwn = document.getElementsByClassName("dropbtt");
var i;

for (i=0; i<drpdwn.length; i++) {
  drpdwn[i].onclick = function() {
    var dropdown_menu = this.nextElementSibling;
    if (dropdown_menu.style.maxHeight) {
      dropdown_menu.style.maxHeight = null;
    } else {
      dropdown_menu.style.maxHeight = dropdown_menu.scrollHeight + "px";
    }
  }
}
