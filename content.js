(function(){
  // window.alert('Tag shortcuts activated!\n Highlight the text you want tagged and tag it with: \n Italics: ctrl+i \n Bold: ctrl+b \n Quote: ctrl+q \n List: crtl+u \n List Item: ctrl+l');
  var command = false;

  document.onkeydown = function (event) {
    var input;

    if (event.key == 'Meta' || event.key == 'Control') {
      command = true;
      console.log(command);
    }

    if (event.key == 'i') {
      if (command) {
        input = document.activeElement;
        if (input.tagName == 'INPUT' || input.tagName == 'textarea') {
          console.log(window.getSelection().toString());
          console.log(input.selectionStart);
        }
      }
    }
  };

  document.onkeyup = function (event) {
    if (event.key == 'Meta' || event.key == 'Control') {
      command = false;
      console.log(command);
    }
  };
})();
