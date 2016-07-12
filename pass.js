function setBarry(){
  chrome.storage.local.get(["barry_status"], function (items) {
    var barry_status = items["barry_status"];
    console.log(barry_status);
    if ( barry_status == "barry") {
      chrome.storage.local.set({"barry_status": "no_barry"});
      console.log('unbarried');
    }
    else {
      chrome.storage.local.set({"barry_status": "barry"});
      console.log('barried');
    }
  });

}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('barry-button').addEventListener('click', setBarry);
});


$( document ).ready(function() {
  var rick_roll_urls = ['https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                        'http://rickrollomatic.com/'];

  $('a').each( function(i) {
    var that = $(this);
    if ($.inArray(that.attr('href'), rick_roll_urls) !== -1) {
      chrome.storage.local.get(["barry_status"], function (items) {
        if (items["barry_status"] == "barry") {
          that.attr('href', 'https://www.youtube.com/watch?v=eLdSYF0WxyE')
          console.log("BARRIED");
        }
        else {
          that.text("RICK ROLL");
          that.css("color","red");
        }
      });
    }
  });
});

// TODO: Maybe turn all of them into barry white songs?
