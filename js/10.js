function executar10() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 10</h1>
					<h2>Solicite dois valores e apresente a multiplicação de um pelo outro utilizando apenas um laço
					de repetição (sem o operador aritmético de multiplicação).</h2>
					<div class="executar">
						<div id="btn-executar-10" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-10");
	executar.addEventListener("click", () => {
		console.log("10");
		espaco.innerHTML = "";
		setTimeout(function() {
			main10();
		},200);
	});
}

function main10() {
	var n1, n2, resultado = 0;
	
	do {
		n1 = parseInt(prompt("Digite o primeiro valor"));
	} while (n1 <0 || isNaN(n1));
	do {
		n2 = parseInt(prompt("Digite o segundo valor"));
	} while (n2 <0 || isNaN(n2));
	
	for (x=0; x<n2; x++) {
		resultado += n1;
	}
	
	printNovo("O resultado da conta \"" + n1 + "x" + n2 + "\" é de " + resultado);
	
}