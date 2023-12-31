let navLink = document.querySelectorAll('.nav-item');

for (link = 0; link < navLink.length; link++) {
  navLink[link].classList.add('me-3');
}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


links = document.querySelectorAll(".nav-link");


links.forEach(link => {
  link.addEventListener("click", function () {
    link.style.color = "#4e9f3d";
  });

});
