function enviarFormulario() {
  document.getElementById("mensagem").innerHTML = `
    <div class="alert alert-warning d-inline-block">
      ⚠️ Este formulário é apenas ilustrativo e não está em funcionamento.
      <br>
      <button class="btn btn-sm btn-dark mt-2" onclick="fecharMensagem()">
        Fechar
      </button>
    </div>
  `;
}

function fecharMensagem() {
  document.getElementById("mensagem").innerHTML = "";
}