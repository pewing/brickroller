$( document ).ready(function() {
  console.log (" DOCUMENT LOADED");

  var rick_roll_urls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        'http://rickrollomatic.com/'];

  $('a').each( function(i) {

    // var query_string = 'http://www.youtube.com/oembed?url=' +
    //   $(this).attr('href')+'&format=json';
    // console.log(query_string);

    // var query_result = $.getJSON(query_string);

    if ($.inArray($(this).attr('href'), rick_roll_urls) !== -1) {
      console.log("RICKROLLED", $(this).attr('href'));
    }
    // else {
    //   console.log("NOT RICKROLLED", $(this).attr('href'));
    // }
  });
});

// TODO: Maybe turn all of them into barry white songs?
