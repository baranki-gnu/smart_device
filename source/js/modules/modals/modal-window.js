let openModalButton = document.querySelector('[data-open-modal]');
let closeModalButton = document.querySelector('[data-close-modal]');
let modalWindow = document.querySelector('[data-modal]');

function openModal() {
  if (modalWindow && openModalButton) {
    openModalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalWindow.classList.remove('is-closed');
      modalWindow.classList.add('is-open');
    });
  }
}

function closeModal() {
  if (modalWindow && closeModalButton) {
    closeModalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      modalWindow.classList.remove('is-open');
      modalWindow.classList.add('is-closed');
    });
  }
}

export {openModal, closeModal};
