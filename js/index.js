window.onload = ()=> {
  const images = document.querySelectorAll('[data-feature-image]');
  const texts = document.querySelectorAll('[data-feature-text]');
  const feature = document.querySelector('.feature');


  $('#menu-toggler').on('click', ()=>{
    console.log('nav-menu-called')
    toggleNavMenu();
  })

  function toggleNavMenu(){
    const navMenu = $('#nav-menu')
    navMenu.toggleClass('hide-nav');
  }

  const navLinks =  document.querySelectorAll('[ data-nav-item]');
  navLinks.forEach( eachLink => {
    eachLink.addEventListener('click', toggleNavMenu, false);
  });

  function filterPath(string) {
    return string
        .replace(/^\//, '')
        .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
        .replace(/\/$/, '');
  }

  var locationPath = filterPath(location.pathname);
  $('a[href*="#"]').each(function() {
    var thisPath = filterPath(this.pathname) || locationPath;
    var hash = this.hash;
    if ($("#" + hash.replace(/#/, '')).length) {
      if (locationPath == thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
        var $target = $(hash),
            target = this.hash;
        if (target) {
          $(this).click(function(event) {
            if ($('#animation').prop('checked')) {
              event.preventDefault();
              $('html,body').animate({scrollTop: $target.offset().top}, 1000, function() {
                location.hash = target;
                $target.focus();
                if ($target.is(":focus")) { //checking if the target was focused
                  return false;
                } else {
                  $target.attr('tabindex', '-1'); //Adding tabindex for elements not focusable
                  $target.focus(); //Setting focus
                }
              });
            }
          });
        }
      }
    }
  });
};


$(document).ready(function(){
  const inPageNavs =  document.querySelectorAll('[ data-inpage-nav]');
  inPageNavs.forEach( eachLink => {
    eachLink.addEventListener('click', smoothScroll, false);
  });
});
function smoothScroll(event){
  console.log('about to do the inpage nav shii');

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
}

$(window).scroll(()=>{
  $('#hero-arrow').addClass('hide-arrow')
})