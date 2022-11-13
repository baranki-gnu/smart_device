let buttonTextToggle = document.querySelector('[data-show-more-less]');
let extraText = document.querySelector('[data-extra-text]');
let lessText = document.querySelector('[data-less-text]');

function checkAvailability() {
  if (buttonTextToggle && extraText && lessText) {
    return true;
  } else {
    return false;
  }
}

function showMoreLess() {
  if (checkAvailability()) {
    buttonTextToggle.classList.remove('nojs');
    extraText.classList.remove('nojs');
    lessText.classList.remove('nojs');

    buttonTextToggle.addEventListener('click', (evt) => {
      evt.preventDefault();

      if (extraText.classList.contains('is-closed')) {
        extraText.classList.remove('is-closed');
        extraText.classList.add('is-open');
        lessText.classList.remove('is-closed');
        lessText.classList.add('is-open');
        buttonTextToggle.classList.remove('show-more');
        buttonTextToggle.classList.add('show-less');

      } else {
        extraText.classList.remove('is-open');
        extraText.classList.add('is-closed');
        lessText.classList.remove('is-open');
        lessText.classList.add('is-closed');
        buttonTextToggle.classList.remove('show-less');
        buttonTextToggle.classList.add('show-more');
      }
    });
  }
}

export {showMoreLess};
