let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll(".slideshow-container img");
  
  // Hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  // Display the current slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  
  // Call the function again after a certain interval (e.g., 3 seconds)
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}
