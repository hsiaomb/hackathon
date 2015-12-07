$(function() {
  $("#selected-effect").change(function() {
    console.log('click')
    var effect = $('#selected-effect').val()
    $('#preview').html( '<img src="http://localhost:3000/408/207/'+ effect +'">');
  })
});

