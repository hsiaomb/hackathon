$(function() {
  $("#recipe-serves").change(function() {
    console.log('click')
    var effect = $('#recipe-serves').val()
    $('#preview').html( '<img src="http://localhost:3000/200/200/'+ effect +'">');
  })
});

