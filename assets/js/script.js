$(document).ready(function() {

  // QUESTION 6

  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:
  $("#sidebar-button").click(function() {
    if ($(".sidebar-container").hasClass("sidebar-active")) {
      $("body").removeClass("no-scroll");
      $("#sidebar-button").removeClass("button-active");
      $(".sidebar-container").removeClass("sidebar-active");
      $(".page-wrapper").removeClass("wrapper-active");
    } else {
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);

      $("#sidebar-button").addClass("button-active");
      $(".sidebar-container").addClass("sidebar-active");
      $(".page-wrapper").addClass("wrapper-active");
    }
  });
  // QUESTION 7

  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:
  $(".page-wrapper").click(function() {
    $("body").removeClass("no-scroll");
    $("#sidebar-button").removeClass("button-active");
    $(".sidebar-container").removeClass("sidebar-active");
    $(".page-wrapper").removeClass("wrapper-active");
  });
  // QUESTION 8

  //Implement the "slide to left" when the user clicks on #carousel-next here
  $("#carousel-next").click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == -3840) {
      return false;
    } else {
      $("#carousel").css("margin-left", margin - 960);
    }
  });

  //Implement the "slide to right" when the user clicks on #carousel-prev here
  $("#carousel-prev").click(function() {
    var margin = parseInt($('#carousel').css('margin-left').replace("px", ""));
    if (margin == 0) {
      return false;
    } else {
      $("#carousel").css("margin-left", margin + 960);
    }
  });


  //THIS IS NOT A REQUIRED QUESTION
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

});
