let openModalButton = document.querySelector('[data-open-modal]');
let closeModalButton = document.querySelector('[data-close-modal]');
let modalOverlay = document.querySelector('[data-modal="feedback-call"]');
let bodyBlock = document.querySelector('[data-body]');

function lockScroll() {
  if (bodyBlock) {
    bodyBlock.style.overflow = 'hidden';
  }
}

function unlockScroll() {
  if (bodyBlock) {
    bodyBlock.style.overflow = 'visible';
  }
}

const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};


function openModal() {
  if (modalOverlay) {
    modalOverlay.classList.remove('is-closed');
    modalOverlay.classList.add('is-open');
    lockScroll();
    let inputName = modalOverlay.querySelector('[data-name-input] input');
    if (inputName) {
      inputName.focus();
    }
    document.addEventListener('keydown', onModalEscKeydown);
  }
}

function closeModal() {
  if (modalOverlay && modalOverlay.classList.contains('is-open')) {
    modalOverlay.classList.remove('is-open');
    modalOverlay.classList.add('is-closed');
    unlockScroll();
    document.removeEventListener('keydown', onModalEscKeydown);
  }
}

function onModalEscKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

function onOpenButtonClick() {
  if (modalOverlay && openModalButton) {
    openModalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      openModal();
    });
  }
}

function onCloseButtonClick() {
  if (closeModalButton) {
    closeModalButton.addEventListener('click', closeModal());
  }
}

function onOutModalClick() {
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (evt) => {
      if (evt.target === modalOverlay) {
        closeModal();
      }
    });
  }

  if (closeModalButton) {
    closeModalButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeModal();
    });
  }
}

function callModalFunctions() {
  onOpenButtonClick();
  onCloseButtonClick();
  onOutModalClick();
}

export {callModalFunctions};
