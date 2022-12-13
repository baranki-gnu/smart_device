function validateTelephone(formBlock, phoneMask) {
  let inputField = formBlock.querySelector('[data-telephone-input] input');
  inputField.addEventListener('input', (evt) => {
    evt.preventDefault();
    phoneMask.on('complete', () => {
      console.log('валидация телефона прошла');
      return true;
    });
  });
  console.log('валидация телефона не прошла');
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
    //let validationTips = formBlock.querySelectorAll('em');
    let nameValidationTip = formBlock.querySelector('[data-name-warning]');
    let telephoneValidationTip = formBlock.querySelector('[data-telephone-warning]');
    submitButton.addEventListener('click', () => {
      console.log('попытка отправить форму');
      //validationTips.forEach(function (tip) {
      //  tip.classList.toggle('input-textarea-wrap__show-tip');
      //});
      nameValidationTip.classList.toggle('input-textarea-wrap__show-tip');
      telephoneValidationTip.classList.toggle('input-textarea-wrap__show-tip');
      let checkName = validateName(formBlock);
      let checkTelephone = false;

      checkTelephone = phoneMask.on('complete', () => {
        console.log('маска завершена');
        return true;
      });
      if (checkName && checkTelephone) {
        nameValidationTip.classList.toggle('input-textarea-wrap__show-tip');
        telephoneValidationTip.classList.toggle('input-textarea-wrap__show-tip');
        console.log('первый вариант');
        //validationTips.classList.toggle('input-textarea-wrap__show-tip');
        //HTMLFormElement.prototype.submit.call(formBlock);
        //evt.currentTarget.submit();
        //formBlock.submit();
      } else if (checkName && !checkTelephone) {
        nameValidationTip.classList.toggle('input-textarea-wrap__show-tip');
        console.log('второй вариант');
      } else if (!checkName && checkTelephone) {
        telephoneValidationTip.classList.toggle('input-textarea-wrap__show-tip');
        console.log(checkName);
        console.log(checkTelephone);
        console.log('третий вариант');
      }
    });
  }
}

export {enableSubmit};
