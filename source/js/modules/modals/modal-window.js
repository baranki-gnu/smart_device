let openModalButton = document.querySelector('[data-open-modal]');
let closeModalButton = document.querySelector('[data-close-modal]');
let modalWindow = document.querySelector('[data-modal]');

function openModal() {
  openModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWindow.classList.remove('is-closed');
    modalWindow.classList.add('is-open');
  });
}

function closeModal() {
  closeModalButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    modalWindow.classList.remove('is-open');
    modalWindow.classList.add('is-closed');
  });
}

export {openModal, closeModal};
