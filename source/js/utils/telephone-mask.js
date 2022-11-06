import IMask from 'imask';

let phoneInput = document.querySelector('[data-telephone-input] input');
//let submitFeedbackForm = document.querySelector('[data-feedback-submit]');

const phoneMask = new IMask(phoneInput, {
  mask: '+{7}(000)000-00-00',
});

function maskPhoneInput() {
  //submitFeedbackForm.classList.add('is-inactive');
  phoneInput.addEventListener('input', (evt) => {
    evt.preventDefault();

    //phoneMask.on('complete', () => {
    //  submitFeedbackForm.classList.remove('is-inactive');
     // submitFeedbackForm.classList.add('is-active');
    //});
  });
}

export {maskPhoneInput};
