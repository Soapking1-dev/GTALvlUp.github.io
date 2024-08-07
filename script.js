document.getElementById('proceed-button').addEventListener('click', function() {
  document.getElementById('home-page').classList.add('hidden');
  document.getElementById('main-content').classList.add('visible');
  document.body.style.overflow = 'auto';
});
