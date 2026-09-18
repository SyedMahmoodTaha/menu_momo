document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('itemModal');
  const title = document.getElementById('modalTitle');
  const description = document.getElementById('modalDescription');
  const contains = document.getElementById('modalContains');
  const sidesList = document.getElementById('modalSides');
  const closeBtn = document.querySelector('.close-btn');

  const items = document.querySelectorAll('.menu-item');

  function openModal(item) {
    title.textContent = item.dataset.title;
    description.textContent = item.dataset.description;
    contains.textContent = item.dataset.contains || 'Fresh ingredients, seasoned filling, and a crisp finish.';

    const sides = (item.dataset.sides || '').split(',').map((side) => side.trim()).filter(Boolean);
    sidesList.innerHTML = sides.map((side) => `<li>${side}</li>`).join('');

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
  }

  items.forEach((item) => {
    item.addEventListener('click', () => openModal(item));
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeModal();
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
});
