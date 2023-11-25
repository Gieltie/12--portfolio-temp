import { useEffect } from 'react';

const ScrollToTop = () => {
  useEffect(() => {
    const handleScroll = () => {
      // Récupérer la position actuelle du scroll
      const scrollPosition = window.scrollY;

      // Si la position de défilement est en haut, supprimer le fragment d'URL
      if (scrollPosition === 0) {
        history.replaceState({}, document.title, window.location.pathname + window.location.search);
      }
    };

    // Ajouter un écouteur d'événements de défilement
    window.addEventListener('scroll', handleScroll);

    // Nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return;
};

export default ScrollToTop;