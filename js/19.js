function executar19() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 19</h1>
					<h2>Calcular e apresentar o novo valor de uma calça baseada no seu tamanho. Caso seu
					tamanho seja até 38, aumento de 20 %. Entre 39 e 46, aumento de 26.4 %. Qualquer
					numeração acima, calcule um aumento de 29.08%. Obs. O tamanho deverá ser validado
					entre 34 e 58 (inclusive).</h2>
					<div class="executar">
						<div id="btn-executar-19" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-19");
	executar.addEventListener("click", () => {
		console.log("19");
		espaco.innerHTML = "";
		setTimeout(function() {
			main19();
		},200)
	});
}

function main19() {
	
	var preco, novoPreco;
	var tamanho;
	
	function calculaPreco() {
		if (tamanho <= 38) {
			novoPreco = preco * 1.20;
		} else {
			if (tamanho >= 39 && tamanho <= 46) {
				novoPreco = preco * 1.264
			} else {
				novoPreco = preco * 1.2908;
			}
		}
	}
	
	do {
		tamanho = parseInt(prompt("Digite o tamanho da calça"));
	} while (tamanho < 34 || tamanho > 58 || isNaN(tamanho));
	
	do {
		preco = parseFloat(prompt("Digite o preço da calça"));
	} while (preco < 1 || isNaN(preco));
	
	calculaPreco();
	
	preco = preco.toFixed(2);
	novoPreco = novoPreco.toFixed(2);
	
	printNovo("A calca tamanho " + tamanho + " que custava R$ " + preco + ", agora custará R$ " + novoPreco);
	
}