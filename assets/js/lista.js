const alunos = [];
const notas = [];

function adicionarAluno() {
  const nome = document.getElementById('nome').value;
  const nota = parseFloat(document.getElementById('nota').value);

  if (isNaN(nota) || nota < 0 || nota > 10) {
    alert("Nota inválida. Por favor, insira um número entre 0 e 10.");
    return;
  }

  alunos.push(nome);
  notas.push(nota);

  console.log(`Aluno(a) ${nome} adicionado(a) com nota ${nota}.`);

  somar();
}

function listarAlunos() {
  if (alunos.length === 0) {
    console.log("Nenhum aluno cadastrado.");
    return;
  }

  console.log("Lista de alunos:");
  for (let i = 0; i < alunos.length; i++) {
    console.log(`Nome: ${alunos[i]} - Nota: ${notas[i]}`);
  }
}

function somar() {
  let resultado = 0; // Inicializa resultado com 0
  let media = 0;
  for (let i = 0; i < notas.length; i++) {
    resultado += notas[i];
  }
  console.log(`Soma das notas: ${resultado}`);
  media = resultado / notas.length;
  console.log(`Média das notas: ${media}`)
}

// Exibir a lista de alunos e notas
listarAlunos();