var socket = require('./socket')
  ;

$(function() {
  socket.on('message', function(message) {
    $('.output').text($('.output').text() + '\n' + message);
  });
  $('#btn-send-message').click(function() {
    var text = $('#input-message').val();
    $('#input-message').val('');

    socket.send(text);
  });
});