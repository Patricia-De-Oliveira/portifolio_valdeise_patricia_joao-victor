document.addEventListener("DOMContentLoaded", () => {
    
    let slideIndex = 1;

    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("carrossel-slide");
      
      if (n > slides.length) {
        slideIndex = 1;
      }
  
      if (n < 1) {
        slideIndex = slides.length;
      }

      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
      
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block"; 
        slides[slideIndex - 1].classList.add('fade');
      }
    }

    window.plusSlides = function(n) {
      slideIndex += n;
      showSlides(slideIndex);
    }
    
    showSlides(slideIndex);

    const btnTopo = document.getElementById("btn-topo");

    if (btnTopo) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 280) { 
          btnTopo.style.display = "flex";
        } else {
          btnTopo.style.display = "none";
        }
      });

      btnTopo.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth", 
        });
      });
    }
});