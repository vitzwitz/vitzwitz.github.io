var index = 1;
showSlides(index);

function incrementSlides(n)
{
  // moves through slides
  showSlide(index += n);
}

function showSlides(n)
{
    var i;
    var slides = 	document.getElementsByClassName('theSlides');

    // start from beginning
    if (n > slides.length) {index = 1}
    // go to end
    if ( n < 1 ) {index = slides.length}

    for (i=0; i<slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}
