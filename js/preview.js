$(function() {
  $("#selected-effect").change(function() {
    console.log('click')
    var effect = $('#selected-effect').val()
    $("#preview").attr("src","/css/images/effects/image-" + effect + ".jpeg");
  })
});

