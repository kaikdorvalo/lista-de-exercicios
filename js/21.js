function executar21() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 21</h1>
					<h2>Solicite 5 anos (formato AAAA) e posteriormente apresente o percentual de anos pares e a
					quantidade de anos bissextos.</h2>
					<div class="executar">
						<div id="btn-executar-21" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-21");
	executar.addEventListener("click", () => {
		console.log("21");
		espaco.innerHTML = "";
		setTimeout(function() {
			main21();
		},200)
	});
}

function main21() {
	
}