//
// load-more.js
// Theme module
//

(function() {

  //
  // Variables
  //

  var viewToggle = document.getElementsByClassName('view-more')[0];
  var hiddenCard = document.getElementsByClassName('hidden-card')[0];
  var viewMoreButton = '<span class="mx-auto">View more</span> <i class="fe fe-arrow-right"></i>';
  var viewLessButton = '<span class="mx-auto">View less</span> <i class="fe fe-arrow-up"></i>';

  //
  // Functions
  //

  viewToggle.onclick = function() {
    toggleView()
  };

  function toggleView() {
    if (hiddenCard.classList.contains('d-flex')) {
      viewToggle.innerHTML = viewMoreButton;
      hiddenCard.classList.add('conceal');
      hiddenCard.classList.remove('d-flex');
    } else {
      viewToggle.innerHTML = viewLessButton;
      hiddenCard.classList.add('d-flex');
      hiddenCard.classList.remove('conceal');
    }
  }



})();
