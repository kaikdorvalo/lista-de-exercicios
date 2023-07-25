function executar17() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 17</h1>
					<h2>Construa um programa em Javascript que solicite 6 nomes e posteriormente apresente o
					maior nome da lista.</h2>
					<div class="executar">
						<div id="btn-executar-17" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-17");
	executar.addEventListener("click", () => {
		console.log("17");
		espaco.innerHTML = "";
		setTimeout(function() {
			main17();
		},200)
	});
}

function main17() {
	var nome;
	var maiorNome = "AA";
	var nomes = [];
	var nomeTemp;
	
	for (x=0; x<6; x++) {
		do {
			nomes[x] = prompt("Digite o " + (x+1) + "° Nome (Máximo 15 caracteres)");
		} while (nomes[x].length < 3 || nomes[x].length > 15);
		nomeTemp = nomes[x][0].toUpperCase() + nomes[x].substr(1);
		nomes[x] = nomeTemp;
		console.log(nomes[x]);
		
		if (nomes[x] > maiorNome) {
			maiorNome = nomes[x];
		}
	}
	
	printNovo("Entre os nomes: ");
	for (x=0; x<6; x++) {
		if (x == 5) {
			printNovo(nomes[x] + ", ");
		} else {
			if (x == 4) {
				printNovo(nomes[x] + " e ");
			} else {
				printNovo(nomes[x] + ", ");
			}
		}
	}
	printNovo("o maior é " + maiorNome);
}