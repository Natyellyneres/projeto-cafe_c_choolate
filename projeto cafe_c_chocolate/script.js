const urlParams = new
URLSearchParams(window.location.search);
//document.getElementById Retorna a referência do elemento através do seu ID
document.getElementById('nome').textContent =
urlParams.get('nome');
document.getElementById('email').textContent =
urlParams.get('email');
document.getElementById('mensagem').textContent =
urlParams.get('mensagem');
document.getElementById('opcao').textContent =
urlParams.get('opcao');