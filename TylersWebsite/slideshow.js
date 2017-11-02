var index = 1;

showSlides(index);

function incrementSlides(N)
{
  // moves through slides
  showSlide(index+= N);
}

function showCurrentSlide(N)
{
  // shows slide at that index
  showSlide(index=N);
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
