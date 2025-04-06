function mostrarLogin() {
  event.preventDefault();
  document.getElementById('formLogin').classList.toggle('ativo');
  document.getElementById('formCadastro').classList.remove('ativo');
  document.getElementById('fundoEscuro').classList.toggle('ativo');
}

function mostrarCadastro() {
  event.preventDefault();
  document.getElementById('formCadastro').classList.toggle('ativo');
  document.getElementById('formLogin').classList.remove('ativo');
  document.getElementById('fundoEscuro').classList.toggle('ativo');
}

// Para fechar modal ao clicar no fundo escuro
function fecharModal() {
  document.getElementById('formLogin').classList.remove('ativo');
  document.getElementById('formCadastro').classList.remove('ativo');
  document.getElementById('fundoEscuro').classList.remove('ativo');
}