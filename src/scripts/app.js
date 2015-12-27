(function(module) {
  module.clickHandler = function() {
    alert('Ciao Haisam, quello la e\' un coglione');
  };

  document.querySelector('button').addEventListener('click', module.clickHandler);
})(window.App || (window.App = {}));
