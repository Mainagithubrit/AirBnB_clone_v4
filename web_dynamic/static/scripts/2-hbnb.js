$(document).ready(function () {
  $('input[type=checkbox]').click(function () {
    const mylistName = [];
    const myId = [];
    $('input[type=checkbox]:checked').each(function () {
      mylistName.push($(this).attr('data-name'));
      myId.push($(this).attr('data-id'));
    });
    if (mylistName.length === 0) {
      $('.amenities h4').html('&nbsp;');
    } else {
      $('.amenities h4').text(mylistName.join(', '));
    }
    console.log(myId);
  });
});

$.ajax({
  url: 'http://0.0.0.0:5001/api/v1/status/',
  type: 'GET',
  dataType: 'json',
  success: function (json) {
    $('#api_status').addClass('available');
  },

  error: function (xhr, status) {
    console.log('error ' + status);
  }
});
