var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

var spotify = document.getElementById("spotify");
var widget = document.getElementById("widget");

spotify.addEventListener("click", function() {
  if (widget.style.display === "block") {
    widget.style.display = "none";
  } else {
    widget.style.display = "block";
  }
}
);

/* Toggle between adding and removing the "responsive" class to nav when the user clicks on the icon */
function toggleNav() {
  var x = document.getElementById("topnav");
  var y = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
    y.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


// var acc2 = document.getElementsByClassName("accordion2");
// var j;

// for (j = 0; j < acc2.length; j++) {
//   acc2[j].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }