document.getElementById("editor").contentDocument.body.style.fontFamily = "'Nunito', sans-serif";
editor.document.designMode = "On";
function transform(option, argument) {
  editor.document.execCommand(option, false, argument);
}