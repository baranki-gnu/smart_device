import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {toggleMenu, dataItems} from './utils/menu-toggle';
import {callModalFunctions} from './modules/modals/modal-window';
import {scrollToForm} from './utils/scroll-to-form';
import {showMoreLess} from './utils/show-more-less';
import {feedbackForm, feedbackMask, modalForm, modalMask} from './utils/telephone-mask';
import {enableSubmit} from './utils/form-validation';
import {startStoringData} from './utils/form-general';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------
  toggleMenu(dataItems);
  scrollToForm();
  showMoreLess();
  startStoringData();
  enableSubmit(feedbackForm, feedbackMask);
  //enableSubmit(modalForm, modalMask);


  iosVhFix();

  // Modules
  // ---------------------------------
  callModalFunctions();
  //turnMaskOn();


  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
