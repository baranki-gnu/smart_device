import IMask from 'imask';

let modalForm = document.querySelector('[data-modal]');
let feedbackForm = document.querySelector('[data-feedback-form]');

function createMask(formBlock) {
  if (formBlock) {
    let inputField = formBlock.querySelector('[data-telephone-input] input');
    let submitButton = formBlock.querySelector('[data-button-submit]');

    if (inputField && submitButton) {
      submitButton.disabled = true;

      const phoneMask = new IMask(inputField, {
        mask: '+{7}(000)000-00-00',
      });

      inputField.addEventListener('input', (evt) => {
        evt.preventDefault();

        phoneMask.on('complete', () => {
          submitButton.disabled = false;
        });
      });
    }
  }
}

function maskPhoneInput() {
  createMask(modalForm);
  createMask(feedbackForm);
}

export {maskPhoneInput};
