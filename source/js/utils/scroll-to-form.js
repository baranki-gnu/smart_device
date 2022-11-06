let scrollTrigger = document.querySelector('[data-form-scroll]');
let feedbackForm = document.querySelector('[data-feedback-form]');

function scrollToForm() {
  scrollTrigger.addEventListener('click', (evt) => {
    evt.preventDefault();
    feedbackForm.scrollIntoView({
      block: 'center',
      behavior: 'smooth',
    });
  });
}

export {scrollToForm};
