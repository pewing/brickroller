$( document ).ready(function() {

  function reloadPage() {
    chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
      var code = 'window.location.reload();';
      chrome.tabs.executeScript(arrayOfTabs[0].id, {code: code});
    });
  }

  function setBarry(status) {
    chrome.storage.local.set({"barry_status": status}, function () {
      chrome.tabs.query({active: true, currentWindow: true}, function (arrayOfTabs) {
        var code = 'window.location.reload();';
        chrome.tabs.executeScript(arrayOfTabs[0].id, {code: code});
      });
      location.reload();
    });
  }

  function updateBarry() {
    chrome.storage.local.get(["barry_status"], function (items) {
      if ( items["barry_status"] == "barry" ) {
        setBarry("no_barry");
      }
      else {
        setBarry("barry");
      }
    });
  }

  $('#barry-button').on('click', updateBarry);

  chrome.storage.local.get(["barry_status"], function (items) {
    if ( items["barry_status"] == "barry" ) {
      $('#barry-button').prop('checked', true);
    }
    else {
      $('#barry-form').prop('checked', false);
    }
  });

});
