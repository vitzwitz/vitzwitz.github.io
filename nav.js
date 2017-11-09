function openNav() {
    document.getElementById('nav').style.height = 100%;
}

function closeNav() {
    document.getElementById('nav').style.height = 0%;
}

function touchNav() {
  if (document.getElementById('nav').style.height == 0%) {
    ovenNav();
  } else {
    closeNav();
  }
}
