$(function(){
  //document ready
  alert("document ready");

  $('#searchForm').submit(function(){
    var searchterms = $('#searchterms').val();
    getResultsFromOMDB(searchterms);
    return false;
  })
});

function getResultsFromOMDB(searchterms){
  //call youtube API using ajax
  //build url for the request
  var url="http://www.omdapi.com/?apikey=1d8cba35=" + searchterms;
  //use jquery json shortcut
  $.getJSON(url, function(jsondata){
    //handle the results
    printJSON(jsondata);
  })
}

function printJSON(jsondata) {
  //prints the JSON to the screen
  var normal = JSON.stringify(jsondata);
  $('#resultsbox').append('<p>' + normal + '</p>');
}

function addItemToList(item){
  $('#results').append('<li>' + item + '</li>');
}
