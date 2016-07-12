$( document ).ready(function() {
  var rick_roll_urls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        'http://rickrollomatic.com/'];

  $('a').each( function(i) {
    var that = $(this);
    if ( $.inArray(that.attr('href'), rick_roll_urls) !== -1 ) {
      chrome.storage.local.get(["barry_status"], function (items) {
        if ( items["barry_status"] == "barry" ) {
          that.attr('href', 'https://www.youtube.com/watch?v=eLdSYF0WxyE');
        }
        else {
          that.text("RICK ROLL");
          that.css("color","red");
        }
      });
    }
  });
});
