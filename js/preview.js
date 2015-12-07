$(function() {
  $("#selected-effect").change(function() {
    var effect = $('#selected-effect').val()
    $("#preview").attr("src","css/images/effects/image-" + effect + ".jpeg");
  })
});

