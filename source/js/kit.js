(function($) {

  function inputFields(params) {

    $("input[type=text], input[type=email], input[type=password], textarea").parent().addClass("grch-textbox-with-form-label");
    var settings = $.extend({
      fields: ".grch-textbox-with-form-label > input, .grch-textbox-with-form-label > textarea",
      label: ".grch-textbox-with-form-label label",
      prefilled: ".grch-textbox-with-form-label input"
    }, params);

    var fields = settings.fields;
    $("body").on("click", settings.label, function () {
      $(this).siblings("input").focus();
    });

    // check if a prefilled value exists
    $(settings.prefilled).each(function () {
      if ($(this).val() !== "" || $(this).attr("placeholder") !== undefined) {
        $(this).parent().addClass("is-filled");
      }
    });
    $("body").on("keyup", fields, function () {
      $(this).parent().toggleClass("is-filled", $(this).val() !== "" || $(this).attr("placeholder") !== undefined);
    });
    $("body").on("focus", fields, function () {
      $(this).parent().addClass("is-focused");
    });
    $("body").on("blur", fields, function () {
      $(this).parent().removeClass("is-focused");
    });
  }

  $(function() {
    inputFields();

    $('.mobile-menu-toggle').on('click touch', function(e){
      $(this).toggleClass('on');
      $('body').toggleClass('mobile-nav-on');
      $('.mobile-navigation').toggle(100);
      e.stopPropagation();
    });
    // close mobile menu tapping outside toggle button
    $('.body-container').on('click touch', function(e) {
      $('body').removeClass('mobile-nav-on');
      $('.mobile-menu-toggle').removeClass('on');
      $('.mobile-navigation').hide();
      e.stopPropagation();

    });
  })

})(jQuery);
