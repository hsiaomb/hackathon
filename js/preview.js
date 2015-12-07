$(function() {
  $("#selected-effect").change(function() {
    console.log('click')
    var effect = $('#selected-effect').val()
    $("#preview").attr("src","image-" + effect + ".jpeg");
  })
});

