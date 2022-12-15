import IMask from 'imask';

let modalForm = document.querySelector('[data-modal]');
let feedbackForm = document.querySelector('[data-feedback-form]');


function createMask(formBlock) {
  if (formBlock) {
    let inputField = formBlock.querySelector('[data-telephone-input] input');
    if (inputField) {
      const phoneMask = new IMask(inputField, {
        mask: '+{7}(000)000-00-00',
      });
      return phoneMask;
    }
  }
  return null;
}

let feedbackMask = createMask(feedbackForm);
let modalMask = createMask(modalForm);

export {feedbackForm, feedbackMask, modalForm, modalMask};
