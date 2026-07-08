// Manejadores de la página (menú móvil y formulario de presupuesto).
// El runtime del builder no conecta los eventos {{ ... }}, así que se
// resuelven acá con delegación de eventos, que sobrevive a re-renders.
(function () {
  'use strict';

  function toggleMenu() {
    var n = document.getElementById('mnav');
    if (!n) return;
    var open = n.getAttribute('data-open') === '1';
    n.setAttribute('data-open', open ? '0' : '1');
    n.style.display = open ? 'none' : 'flex';
  }

  function closeMenu() {
    var n = document.getElementById('mnav');
    if (!n) return;
    n.setAttribute('data-open', '0');
    n.style.display = 'none';
  }

  document.addEventListener('click', function (e) {
    if (e.target.closest('.hamburger')) {
      toggleMenu();
      return;
    }
    if (e.target.closest('#mnav a')) closeMenu();
  });

  document.addEventListener('submit', function (e) {
    var f = e.target;
    if (!f.elements || !f.elements.nombre) return;
    e.preventDefault();
    var g = function (k) { return f.elements[k] ? f.elements[k].value.trim() : ''; };
    var msg =
      'Hola Tecnalum, quiero pedir un presupuesto.%0A%0A' +
      'Nombre: ' + encodeURIComponent(g('nombre')) + '%0A' +
      'Email: ' + encodeURIComponent(g('email')) + '%0A' +
      'Teléfono: ' + encodeURIComponent(g('telefono')) + '%0A' +
      'Localidad: ' + encodeURIComponent(g('localidad')) + '%0A' +
      'Tipo de proyecto: ' + encodeURIComponent(g('proyecto')) + '%0A' +
      'Mensaje: ' + encodeURIComponent(g('mensaje'));
    var note = document.getElementById('formNote');
    if (note) note.style.display = 'block';
    window.open('https://wa.me/5492255532815?text=' + msg, '_blank');
  });
})();
