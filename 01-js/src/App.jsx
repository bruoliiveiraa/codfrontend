
import './App.css'

function App() {

function trocarSapatos() {

let quantidadePares, preçoPar, valorTotal;
quantidadePares = Number(prompt('Quantidade de pares:'));
preçoPar = Number(prompt('Preço de cada par:'));

valorTotal = quantidadePares * preçoPar;

alert('Valor total R$ ' + valorTotal.toFixed(2));
console.log(valorTotal);

}

function calcularPontos() {
  let vitórias = Number(prompt('Numero de vitórias:'));
  let empates = Number(prompt('Numero de empates:'));
  let pontos = vitórias * 3 + empates;

  alert('O time tem ' + pontos + ' pontos');
  console.log(pontos);
}

function calcularDevs() {
  let devscltclt= Number(prompt('Quantidade de devs CLT:'));
  let devspjpj = Number(prompt('Quantidade de devs PJ:'));
  let devsestagiario = Number(prompt('Quantidade de devs Estagiario:'));

  let totalDevs = devscltclt + devspjpj + devsestagiario;
  alert('O time tem ' + totalDevs + ' desenvolvedores');
}

function calcularLaranja() {
  let quantidadeInicial = Number(prompt('Quantidade inicial de laranjas:'));
  let quantidadeFinal = Number(prompt('Quantidade final de laranjas:'));

  let totalLaranjas = quantidadeInicial - quantidadeFinal;
  alert('O total de laranjas colhidas é ' + totalLaranjas);
}

function FinançasIgreja() {
  let custoMensal = Number(prompt('Custo mensal da igreja:'));
  let doações = Number(prompt('quantidade de doações:'));

  let saldoFinal = custoMensal / doações;
  alert('quanto falta para pagar ' + saldoFinal);
}

function SalarioJunin() {
  let salarioMensal = Number(prompt('Salário Mensal do Junin:'));
  let DiasTrabalhados = Number(prompt('Dias trabalhados pelo Junin:'));

  let salarioFinal = salarioMensal + DiasTrabalhados;
  alert('O salário final do Junin é ' + salarioFinal);
}

function pesoVeiculo() {
  let pesoBruto = Number(prompt('Peso bruto do caminhão e carga (kg):'));
  let caminhãoVazio = Number(prompt('Peso do caminhão vazio (kg):'));
  
  let pesoCarga = pesoBruto - caminhãoVazio;
  alert('O peso da carga é ' + pesoCarga + ' kg');
}

function chancesDevs() {
  let olhadasCelular = Number(prompt('Quantas vezes olhou para o celular:'));
  let chances = (0.1/(1+500*olhadasCelular))*100;
  alert('As chances dos devs são ' + chances.toFixed(2) + '%');

  let chances2 = 1 / chances
  alert('A chance de ser reprovado é ' + chances2 + 'de ser aprovado');
}

function calcularFrete() {
  let pesoProduto = Number(prompt('Peso do produto (kg):'));
  let distanciaEntrega = Number(prompt('Distância da entrega (km):'));
  let volumeProduto = Number(prompt('Volume do produto (m³):'));

  let precoFrete = (pesoProduto * 0.5) + (distanciaEntrega * 0.2) + (volumeProduto * 0.1);
  alert('O preço do frete é R$ ' + precoFrete.toFixed(2));
}

function faturamentoBete() {
  let premiações = Number(prompt('Valor das premiações:'));
  let presentes = Number(prompt('Valor dos presentes:'));
  let comissões = Number(prompt('Valor das comissões:'));

  let faturamentoBete = (premiações + presentes + comissões);
  alert('O faturamento da Bete é R$ ' + faturamentoBete.toFixed(2));
}

  return (

<div className="cont-app">
  <h1>Javascript no React</h1>
  <h2>Exercicios</h2>
  <button onClick={calcularDevs}>Gui portoes</button>
  <button onClick={calcularPontos} >Campeonato</button>
  <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
  <button onClick={calcularLaranja}>Laranjas</button>
  <button onClick={FinançasIgreja}>Custos da Igreja</button>
  <button onClick={SalarioJunin}>Salário do Junin</button>
  <button onClick={pesoVeiculo}>Peso do Veículo</button>
  <button onClick={chancesDevs}>chances Monika</button>
  <button onClick={calcularFrete}>Preço do Frete</button>
  <button onClick={faturamentoBete}>Faturamento da Bete</button>

  <hr />
</div>

  
)
}

export default App
