var index = 1;

showSlides(index);

function incrementSlides(n)
{
  // moves through slides
  showSlide(index+= n);
}

function showCurrentSlide(n)
{
  // shows slide at that index
  showSlide(index=n);
}


function showSlide
{
    var i;
    var slides = document.getElementsByClassName('theSlides');

    // go to end
    if (n<1)
    {
      index = slides.length;
    }


    // start from beginning
    if (n>slides.length)
    {
      index = 1
    }

    for (i=0; i<slides.length; i++)
    {
      slides[i].style.display = "none";
    }
    slides[index - 1].style.display = "block";
}
