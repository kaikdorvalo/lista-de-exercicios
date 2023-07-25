function executar22() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 22</h1>
					<h2>Um usuário deseja um programa em Javascript pelo qual possa escolher que tipo de média
					deseja calcular a partir de três notas. Faça um programa em Javascript que leia as notas, a
					opção escolhida pelo usuário e calcule a média: 1- aritmética 2- ponderada (pesos 3, 3, 4)</h2>
					<div class="executar">
						<div id="btn-executar-22" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-22");
	executar.addEventListener("click", () => {
		console.log("22");
		espaco.innerHTML = "";
		setTimeout(function() {
			main22();
		},200)
	});
}

function main22() {
	
}