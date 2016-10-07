(function(){
  window.alert('Tag shortcuts activated!\n\n Highlight the text you want tagged and tag it with: \n Italics: CONTROL+I \n Bold: CONTROL+B \n Quote: CONTROL+Q \n List: CONTROL+U \n List Item: CONTROL+L \n Link: CONTROL+A');
  var command = false;

  addTag = function (open, close) {
    input = document.activeElement;
    if (input.tagName == 'INPUT' || input.tagName == 'TEXTAREA') {
      selection = window.getSelection();
      start = input.selectionStart;
      finish = input.selectionStart + selection.toString().length;
      input.value =
      input.value.slice(0, start) +
      open +
      input.value.slice(start, finish) +
      close +
      input.value.slice(finish, input.value.length);
    }
    command = false;
  };

  addLink = function () {
    var url;
    url = window.prompt('Where do you want this link to lead?');
    addTag('<a href="'+url+'" target="_blank">', '</a>');
  };

  document.onkeydown = function (event) {
    var input; var selection; var start; var finish;

    if (event.key == 'Control') {
      command = true;
    }

    if (command) {
      switch (event.key) {
        case 'i':
          addTag('<em>', '</em>');
          break;
        case 'b':
          addTag('<b>', '</b>');
          break;
        case 'q':
          addTag('<q>', '</q>');
          break;
        case 'u':
          addTag('<ul>', '</ul>');
          break;
        case 'l':
          addTag('<li>', '</li>');
          break;
        case 'a':
          addLink();
          break;
      }
    }
  };

  document.onkeyup = function (event) {
    command = false;
  };
})();
