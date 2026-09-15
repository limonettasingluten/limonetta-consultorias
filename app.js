const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

if (menuButton && mainNav) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    mainNav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    mainNav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });

  mainNav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) closeMenu();
  });
}

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.removeAttribute('open');
    });
  });
});

const toast = document.querySelector('#toast');
const showToast = (message) => {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  window.setTimeout(() => toast.classList.remove('show'), 2200);
};

document.querySelectorAll('#project-form').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;

    const data = new FormData(form);
    const isInvestment = form.hasAttribute('data-investment-form');
    const heading = isInvestment
      ? 'Hola, quiero conocer Proyecto Limonetta y explorar una alianza.'
      : 'Hola, quiero solicitar una primera evaluación para una consultoría de Limonetta.';
    const message = [
      heading,
      '',
      `Nombre: ${data.get('nombre')}`,
      `Empresa o proyecto: ${data.get('empresa') || 'No indicado'}`,
      `Ciudad y país: ${data.get('ubicacion')}`,
      `Tipo de consulta: ${data.get('tipo')}`,
      '',
      `${isInvestment ? 'Interés' : 'Necesidad'}: ${data.get('necesidad')}`
    ].join('\n');

    showToast('Abriendo WhatsApp con tu consulta…');
    window.open(`https://wa.me/5493513988585?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
});

const observer = 'IntersectionObserver' in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

document.querySelectorAll('.reveal').forEach((element) => {
  if (observer) observer.observe(element);
  else element.classList.add('visible');
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
