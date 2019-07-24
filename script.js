var clicked = false;

$('#click-func').click(function(){
  clicked = !(clicked);
  if (clicked) {
    $(this).css("color", "red");
  } else {
    $(this).css("color", "black");
  }
})

$('#hideFunc').click(function(){
  $('p').hide();
})

$('#showFunc').click(function(){
  $('p').show();
})

$('#toggleFunc').click(function(){
  $('#toggle-head').toggle(100);
})

$('#slideDfunc').click(function(){
  $('h2').slideDown();
})

$('#slideUfunc').click(function(){
  $('h2').slideUp();
})

$('#slideTfunc').click(function(){
  $('h1').slideToggle();
})

$('#fadeinFunc').click(function(){
  $('#fadein-text').fadeIn();
})

$('#fadeoutFunc').click(function(){
  $('#fadeout-text').fadeOut();
})

$('#addclassFunc').click(function(){
  $('h1').addClass("section-title");
})

$("#beforeFunc").click(function(){
  $("#p1-text").before("<h4>Hello</h4>");
})

$("#afterFunc").click(function(){
  $("#p2-text").after("<h4>Good-bye</h4>");
})

$("#appendFunc").click(function(){
  $("#p3-text").append(" Now I am complete!");
})

$('#htmlFunc').click(function(){
  var htmlString = $(this).html();
  $('#p4-text').text(htmlString);
})

$('#p4-text').click(function(){
  $('#p4-text').html("<h2>Hello again!</h2>");
})

$('#attrFunc').click(function(){
  var attributes = $(this).attr("id");
  $('#p5-text').append(attributes);
})

$('h1').click(function(){
  $(this).attr("class", "special");
})

$('#valFunc').click(function(){
  var value = $('#input6').val();
  $('#p6-text').text(value);
})

$('h1').click(function(){
  var text = $(this).text();
  $('#input6').val("I've been reset");
})

$('#textFunc').click(function(){
  $('#p7-text').text("UH OHH <b>:O</b>");
})

$('#dataHead').data("group1", { first: 3.14, last: "pie"});
$('#dataFunc').click(function(){
  $('#s8').text($('#dataHead').data("group1").first);
  $('#s9').text($('#dataHead').data("group1").last);
})