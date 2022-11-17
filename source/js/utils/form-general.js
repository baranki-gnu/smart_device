let formMain = document.querySelector('[data-feedback-form]');
let formModal = document.querySelector('[data-form-modal]');

function storeFieldData(field, key) {
  if (field && key) {
    localStorage.setItem(key, field.value);
  }
}

function storeFormData(formBlock) {
  if (formBlock) {
    let userName = formBlock.querySelector('[data-name-input] input');
    let userNameKey = 'user-name';
    let userTel = formBlock.querySelector('[data-telephone-input] input');
    let userTelKey = 'user-telephone';
    let userQuest = formBlock.querySelector('[data-textarea] textarea');
    let userQuestKey = 'user-question';

    storeFieldData(userName, userNameKey);
    storeFieldData(userTel, userTelKey);
    storeFieldData(userQuest, userQuestKey);
  }
}

function startStoringData() {
  storeFormData(formMain);
  storeFormData(formModal);
}

export {startStoringData};
