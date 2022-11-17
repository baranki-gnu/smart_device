let openModalButton = document.querySelector('[data-open-modal]');
let closeModalButton = document.querySelector('[data-close-modal]');
let modalWindow = document.querySelector('[data-modal]');
let modalInnerWrap = document.querySelector('[data-modal-wrapper]');
let inputName = modalWindow.querySelector('[data-name-input] input');
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

const isEscapeKey = (evt) => evt.key === 'Escape';


function openModal() {
  if (modalWindow) {
    modalWindow.classList.remove('is-closed');
    modalWindow.classList.add('is-open');
    lockScroll();
    if (inputName) {
      inputName.focus();
    }
    document.addEventListener('keydown', onModalEscKeydown);
  }
}

function closeModal() {
  if (modalWindow && modalWindow.classList.contains('is-open')) {
    modalWindow.classList.remove('is-open');
    modalWindow.classList.add('is-closed');
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
  if (modalWindow && openModalButton) {
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
  window.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (modalWindow && modalWindow.classList.contains('is-open')) {
      if (evt.target !== modalInnerWrap) {
        closeModal();
      }
    }
  });
}

function callModalFunctions() {
  onOpenButtonClick();
  onCloseButtonClick();
  onModalEscKeydown();
  onOutModalClick();
}


export {callModalFunctions};
