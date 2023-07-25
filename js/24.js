function executar24() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 24</h1>
					<h2>Construa um programa em Javascript que solicite dois valores inteiros positivos (A,B).
					Posteriormente, apresente uma mensagem “é possível dividir sem resto o valor de A por B”
					(caso isso seja possível) ou “Não foi possível efetuar a divisão”. Obs. O valor de B deve ser
					menor que o valor de A.</h2>
					<div class="executar">
						<div id="btn-executar-24" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-24");
	executar.addEventListener("click", () => {
		console.log("24");
		espaco.innerHTML = "";
		setTimeout(function() {
			main24();
		},200)
	});
}

function main24() {
	
}