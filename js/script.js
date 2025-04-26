// Ouvrir la lightbox et afficher l'image
document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
  
    document.querySelectorAll('.galerie img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightbox.style.display = 'flex';
      });
    });
  
    lightbox.addEventListener('click', () => {
      lightbox.style.display = 'none';
    });
  });
  