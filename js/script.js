jQuery(function ($) {
  $('.sip-wrapper').each(function (index, wrapperEl) {
    var $wrapper = $(wrapperEl);

    $wrapper.find('.sip-point').each(function (indexPoint, pointEl) {
      var $point = $(pointEl);

        $point.css({
          left: 'calc(' + parseFloat($point.data('left')) + '% - ' + $point.width() / 2 + 'px)',
          top: 'calc(' + parseFloat($point.data('top')) + '% - ' + $point.height() / 2 + 'px)'
        })
        .on('click', function () {
          $point.addClass('active');
        })
        .hover(function () {
          $point.addClass('active');
        }, function () {
          $point.removeClass('active');
        });
    });
  });

  $(document).on('click', function (evt) {
    if (!$(evt.target).closest('.sip-point').length) {
      $('.sip-point.active').removeClass('active');
    }
  });
});