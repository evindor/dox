
$(function(){
  $('#files a').click(function(){
    display($(this).attr('href'), '/' + $(this).text());
    return false;
  });
});

function display(path, name) {
  $.get(path, function(res){
    $('#content').html(res);
    window.location.hash = name;
  });
}