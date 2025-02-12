  //urlParams serve para trabalhar com os parâmetros de uma URL
  const urlParams = new
  URLSearchParams(window.location.search);
//document.getElementById Retorna a referência do elemento através do seu ID
document.getElementById('nome').textContent =
  urlParams.get('nome');
document.getElementById('tel_cel').textContent =
  urlParams.get('tel_cel');
document.getElementById('endereco').textContent =
  urlParams.get('endereco');
document.getElementById('Bairro').textContent =
  urlParams.get('Bairro');
document.getElementById('Cidade').textContent =
  urlParams.get('Cidade');
document.getElementById('Estado').textContent =
  urlParams.get('Estado');
document.getElementById('CEP').textContent =
  urlParams.get('CEP');
document.getElementById('Numero').textContent =
  urlParams.get('Numero');
document.getElementById('Complemento').textContent =
  urlParams.get('Complemento');