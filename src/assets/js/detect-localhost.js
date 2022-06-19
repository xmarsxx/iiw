//
// load-more.js
// Theme module
//

(function() {

  //
  // Variables
  //

  var aboutLinkLocal = document.getElementsByClassName('about-localhost-link')[0];
  var pastLinkLocal = document.getElementsByClassName('past-localhost-link')[0];

  //
  // Functions
  //

  function detectLocalhost() {
    if (location.hostname === 'localhost') {
      aboutLinkLocal.setAttribute('href', '/about.html');
      pastLinkLocal.setAttribute('href', '/past-iiw.html');
    }
  }

  window.onload = function() {
    detectLocalhost();
  }



})();
