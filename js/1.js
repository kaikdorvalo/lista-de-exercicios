function executar1() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 01</h1>
					<h2>Apresente a mensagem “Testando o Javascript”</h2>
					<div class="executar">
						<div id="btn-executar-1" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-1");
	executar.addEventListener("click", () => {
		console.log("1");
		espaco.innerHTML = "";
		setTimeout(function() {
			main1();
		},200)
	});
}

function main1() {
	printNovo("Testando o Javascript");
}



