function Verificar() {

  let nome = document.getElementById('nome').value;
  let telefone = document.getElementById('telefone').value;
  let nascimento = document.getElementById('nascimento').value;
  let cpf = document.getElementById('cpf').value;
  let email = document.getElementById('email').value;
  let senha = document.getElementById('senha').value;
  let csenha = document.getElementById('csenha').value;

  if(!nome || !telefone || !nascimento || !cpf || !numero || email || !senha || !csenha){
    alert("Campos de preenchimento obrigatório. Favor preencher.");
  } else{
    alert("Campos preenchidos com sucesso!")
  }
}
'use restrict'; //Modo restrito
//Limpar formulário
const LimparFormulario = () => {
  document.getElementById('rua').value = '';
  document.getElementById('bairro').value = '';
  document.getElementById('cidade').value = '';
  document.getElementById('estado').value = '';
}
//Verifica se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

//preenche campos do formulário 
const preencherFormulario = (endereco) => {
  document.getElementById('rua').value = endereco.logradouro;
  document.getElementById('bairro').value = endereco.bairro;
  document.getElementById('cidade').value = endereco.localidade;
  document.getElementById('estado').value = endereco.uf;
}
// Função para consumo de API utilizando a função do tipo assincrona
const pesquisarCep = async () => {
  LimparFormulario();
  const url = `https://viacep.com.br/ws/${cep.value}/json/`;
  if (cepValido(cep.value)) {
    const dados = await fetch(url);
    const addres = await dados.json();

    if (addres.hasOwnProperty('erro')) {
      alert('CEP não encontrado');
    } else {
      preencherFormulario(addres);
    }
  } else {
    alert('CEP incorreto');
  }
}
// Adiciona um evento DOM, no input CEP
document.getElementById('cep').addEventListener('focusout', pesquisarCep);
// document.getElementById('cep').addEventListener('focusout',

    