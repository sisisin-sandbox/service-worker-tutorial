navigator.serviceWorker
  .register('/sw.js', { scope: '/' })
  .then(function (reg) {
    console.log('◕‿◕', reg);
  }, function (err) {
    console.log('ಠ_ಠ', err);
  });


var elm = document.querySelector('input');
elm.addEventListener('click', () => {
  fetch('/users')
    .then(v => v.text())
    .then(d => console.log(d));
});