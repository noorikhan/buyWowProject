//banners timer slider slider script

var slideIndexs = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("silder");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndexs++;
  if (slideIndexs > x.length) {
    slideIndexs = 1;
  }
  x[slideIndexs - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

//banners slider script

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("silder");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
