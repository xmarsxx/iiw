//
// load-more.js
// Theme module
//

(function() {

  //
  // Variables
  //

  var viewToggle = document.getElementsByClassName('view-more')[0];
  var hiddenCardNumber = document.getElementsByClassName('hidden-card').length;
  var hiddenCard = document.getElementsByClassName('hidden-card');
  var viewMoreButton = '<span class="mx-auto">View more</span> <i class="fe fe-arrow-right"></i>';
  var viewLessButton = '<span class="mx-auto">View less</span> <i class="fe fe-arrow-up"></i>';

  //
  // Functions
  //

  if (viewToggle) {
    viewToggle.onclick = function() {
      toggleView();
    };
  }

  function toggleView() {
    for (var i = 0; i < hiddenCardNumber; i++) {
      if (hiddenCard[i].classList.contains('d-flex')) {
        viewToggle.innerHTML = viewMoreButton;
        hiddenCard[i].classList.add('conceal');
        hiddenCard[i].classList.remove('d-flex');
      } else {
        viewToggle.innerHTML = viewLessButton;
        hiddenCard[i].classList.add('d-flex');
        hiddenCard[i].classList.remove('conceal');
      }
    }
  }


})();
