let dataItems = document.querySelectorAll('[data-footer-item]');

function checkAndCloseItems(dataList) {
  dataList.forEach((item) => {
    if (item.classList.contains('is-open')) {
      let toggleButton = item.querySelector('[data-toggle]');
      toggleButton.classList.remove('is-open');
      toggleButton.classList.add('is-closed');
      item.classList.remove('is-open');
      item.classList.add('is-closed');
    }
  });

}

function toggleMenu(dataList) {
  dataList.forEach((item) => {
    item.classList.remove('nojs');
    let toggleButton = item.querySelector('[data-toggle]');
    let toggleWrap = item.querySelector('[data-toggle-wrap]');
    toggleWrap.addEventListener('click', (evt) => {
      evt.preventDefault();
      if (toggleButton.classList.contains('is-closed')) {
        checkAndCloseItems(dataList);
        item.classList.remove('is-closed');
        item.classList.add('is-open');
        toggleButton.classList.remove('is-closed');
        toggleButton.classList.add('is-open');
      } else {
        item.classList.remove('is-open');
        item.classList.add('is-closed');
        toggleButton.classList.remove('is-open');
        toggleButton.classList.add('is-closed');
      }
    });
  });
}

export {toggleMenu, dataItems};
