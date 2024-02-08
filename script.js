$(document).ready(function() {

  var header = $('header');
  var profilePhoto = $('.profile-photo');
  var aboutMe = $('.about-me')
  var profilePhotoSize = 200; // Initial size of the profile photo
  var minProfilePhotoSize = 100; // Minimum size of the profile photo

  aboutMe.css({
    'margin-top': header.outerHeight()
  });

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var newSize = Math.max(profilePhotoSize - scroll, minProfilePhotoSize);
    var newLeft = Math.max((header.outerWidth() / 2) - scroll, 20 + (newSize / 2));
    var newTop = Math.max((newSize / 2) - 20 - scroll, -10);
    var headerPaddingBottom = Math.max(240 - scroll, 40);

    profilePhoto.css({
      'max-width': newSize + 'px',
      'top': newTop + 'px',
      'left': newLeft + 'px'
    });

    header.css({
      'padding-bottom': headerPaddingBottom + 'px'
    });
  });

    // Add animations on scroll
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var offset = $(window).height() * 0.8;
  
      $(".animate__animated").each(function() {
        var elementOffset = $(this).offset().top;
  
        if (scroll + offset > elementOffset) {
          $(this).addClass("animate__fadeIn");
        }
      });
    });

  });