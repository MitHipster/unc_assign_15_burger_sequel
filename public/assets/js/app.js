$(document).ready(function () {
  // Initialize side nav bar for mobile and set width
  $(".button-collapse").sideNav({
    menuWidth: 200,
    closeOnClick: true
  });
  // Initialize parallax effect
  $('.parallax').parallax();
  // Initialize tooltip for add button
  $('.tooltipped').tooltip({delay: 50});
  // Open a modal using trigger
  $('.modal').modal({dismissible: false});
  // Initialize select rating dropdown
  $('select').material_select();
  // Set smooth scroll click event on valid links
  // Select links with hashes
  $('a[href*="#"]')
  // Remove links that are just placeholders
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function () {
    $('html, body').animate({
      scrollTop: $( $(this).attr('href') ).offset().top
    }, 800);
  });
  // Click event to pass data-id to form action path to update record
  $('.devoured').click(function () {
    var id = $(this).data('id');
    $("#rating-form").attr('action', '/' + id +'?_method=PUT');
  });
});
