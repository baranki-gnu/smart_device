import IMask from 'imask';

let phoneInput = document.querySelector('[data-telephone-input] input');

function createMask() {
  const phoneMask = new IMask(phoneInput, {
    mask: '+{7}(000)000-00-00',
  });
}

function maskPhoneInput() {
  createMask();
  phoneInput.addEventListener('input', (evt) => {
    evt.preventDefault();
  });
}

export {maskPhoneInput};
