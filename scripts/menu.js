
{
  $('#nav-icon').click(function() {
    $('#nav-icon, #menu').toggleClass('open');
  });

  $('#menu a').click(function() {
    $('#nav-icon, #menu').toggleClass('open');
  });

  // --- trying to get scroll snap consistent ---
  setTimeout(function() {
    $('#homepage').addClass('scroll-snap');
  }, 2000);
}
