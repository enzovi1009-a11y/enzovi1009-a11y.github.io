// =============================================
// EFECTO: resaltar enlace activo en la barra
// de navegación según la sección visible
// =============================================

const secciones = document.querySelectorAll('section[id]');
const enlacesNav = document.querySelectorAll('nav ul li a');

function resaltarEnlaceActivo() {
  let seccionActual = '';

  secciones.forEach(seccion => {
    const offsetTop = seccion.offsetTop - 80;
    if (window.scrollY >= offsetTop) {
      seccionActual = seccion.getAttribute('id');
    }
  });

  enlacesNav.forEach(enlace => {
    enlace.style.color = '';
    if (enlace.getAttribute('href') === '#' + seccionActual) {
      enlace.style.color = '#ffffff';
    }
  });
}

window.addEventListener('scroll', resaltarEnlaceActivo);

// =============================================
// EFECTO: animación de aparición al hacer scroll
// =============================================

const observador = new IntersectionObserver(
  (entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.style.opacity = '1';
        entrada.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.tarjeta, .link-card, .contacto-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(16px)';
  el.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
  observador.observe(el);
});