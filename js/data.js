'use strict';

(function () {
  window.productsArray = [];

  document.onError = function (error) {
    var modalError = document.querySelector('.modal--error');
    var modalErrorText = modalError.querySelector('.modal__message-text');
    var modalClose = modalError.querySelector('.modal__close');

    modalError.style.display = 'block';
    modalErrorText.textContent = error;

    var hideModal = function () {
      modalError.classList.remove('modal--hidden');
    };

    modalClose.addEventListener('click', hideModal);
  };

  var onLoad = function (objects) {
    if (Array.isArray(objects)) {
      window.productsArray = objects;
      window.good.addProductsToPage(window.productsArray);
    }
  };

  window.serverData.loadData(onLoad, document.onError);
})();
