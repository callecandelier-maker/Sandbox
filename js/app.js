const wrappers = document.querySelectorAll('.image-wrapper');

wrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    wrapper.classList.toggle('active'); // lägger till/tar bort 'active'
  });
});
