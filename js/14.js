function executar14() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 14</h1>
					<h2>Solicite dois valores inteiros (o segundo deverá ser maior que o primeiro) e apresente todos
					os números PARES do intervalo (inclusive eles mesmos) utilizando o laço DO - WHILE.</h2>
					<div class="executar">
						<div id="btn-executar-14" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-14");
	executar.addEventListener("click", () => {
		console.log("14");
		espaco.innerHTML = "";
		setTimeout(function() {
			main14();
		},200)
	});
}

function main14() {
	var n1, n2;
	var cont = 0;
	
	do {
		n1 = parseInt(prompt("Digite o primeiro valor maior que zero:"));
	} while (n1 < 0);
	do {
		n2 = parseInt(prompt("Digite o segundo valor, sendo maior que o primeiro e maior que 0:"));
	} while (n2<=n1 || n2 < 0);
	
	printNovo("Os números pares entre " + n1 + " e " + n2 + " são: <br><br>");
	
	do {
		if (n1 % 2 == 0) {
			if (n2-n1 <= 1) {
				printNovo(n1);
			} else {
				printNovo(n1 + ", ");
			}
		}
		n1++;
	} while (n1<=n2);
	
	
}