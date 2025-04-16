
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.accordion-header').forEach(header => {
      header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const isActive = content.classList.contains('active');
        
        // Close all contents
        document.querySelectorAll('.accordioncontent').forEach(c => 
            c.classList.remove('active')
            // icon.textContent = '×';
        );
  
        // Toggle current content if it was not active
        if (!isActive) content.classList.add('active');
      });
    });
  });
  

  
function scrollCarousel(distance) {
    document.getElementById('posterCarousel').scrollBy({
      left: distance,
      behavior: 'smooth'
    });
  }