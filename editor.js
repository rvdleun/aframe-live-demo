function createButton(template) {
    var button = document.createElement('button');
    button.innerHTML = template.title;
    button.addEventListener('click', function () {
        console.log(template.content);
        ref.set(template.content);
    }.bind(this));
    return button;
}

window.onload = function () {
    var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");

    ref.on('value', function (snapshot) {
        editor.setValue(snapshot.val());
    });

    if (editorConfiguration) {
        var buttons = document.querySelector('#buttons');
        for (var i in editorConfiguration.templates) {
            var template = editorConfiguration.templates[i];
            button = createButton(template);
            buttons.appendChild(button);
        }
    }

    document.querySelector('#save').addEventListener('click', function () {
        ref.set(editor.getValue());
    });

//added ctrl+s for easy saving of the changes
    document.addEventListener("keydown", function(e) {
        if (e.keyCode == 83 && (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey))      {
          e.preventDefault();
          //save changes
          ref.set(editor.getValue());
        }
      }, false);
};