const socket = io();

const elEditorTexto = document.getElementById("editor-texto");

elEditorTexto.addEventListener("keyup", (e) => {
  const textoDigitado = e.target.value;

  socket.emit("texto_editor", textoDigitado);
});

socket.on("texto_para_clients", (texto) => {
  elEditorTexto.textContent = texto;
});
