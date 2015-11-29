(function(module) {
  module.clickHandler = function() {
    alert('Ciao');
  };

  document.querySelector('button').addEventListener('click', module.clickHandler);
})(window.App || (window.App = {}));
