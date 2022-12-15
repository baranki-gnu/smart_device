function validateTel(formBlock) {
  let inputField = formBlock.querySelector('[data-telephone-input] input');

  if (inputField) {
    if (inputField.value && inputField.value.length === 16) {
      return true;
    } else {
      return false;
    }
  }
  return false;
}

function validateName(formBlock) {
  let inputField = formBlock.querySelector('[data-name-input] input');

  if (inputField) {
    if (inputField.value) {
      return true;
    }
  }
  return false;
}

function enableSubmit(formBlock, phoneMask) {
  if (formBlock) {
    let submitButton = formBlock.querySelector('[data-send-button]');
    let nameValidationTip = formBlock.querySelector('[data-name-warning]');
    let telephoneValidationTip = formBlock.querySelector('[data-telephone-warning]');
    submitButton.addEventListener('click', () => {
      phoneMask.updateValue();
      let checkName = validateName(formBlock);
      let checkTelephone = validateTel(formBlock, phoneMask);

      if (checkName && checkTelephone) {

        nameValidationTip.classList.remove('input-textarea-wrap__show-tip');
        telephoneValidationTip.classList.remove('input-textarea-wrap__show-tip');

      } else if (!checkName && !checkTelephone) {

        nameValidationTip.classList.add('input-textarea-wrap__show-tip');
        telephoneValidationTip.classList.add('input-textarea-wrap__show-tip');

      } else if (checkName && !checkTelephone) {

        nameValidationTip.classList.remove('input-textarea-wrap__show-tip');
        telephoneValidationTip.classList.add('input-textarea-wrap__show-tip');

      } else if (!checkName && checkTelephone) {

        nameValidationTip.classList.add('input-textarea-wrap__show-tip');
        telephoneValidationTip.classList.remove('input-textarea-wrap__show-tip');

      }
    });
  }
}

export {enableSubmit};
