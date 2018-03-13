$(function(){
  //document ready
  alert("document ready");

  $('#searchForm').submit(function(){
    var searchterms = $('#searchterms').val();
    addItemToList(searchterms);
    return false;
  })
});

function addItemToList(item){
  $('#results').append('<li>' + item + '</li>');
}
