function executar9() {
	espaco.innerHTML = "";
	espaco.innerHTML = `
		<div class="informacoes-exercicio">
					<h1>Exercício número 09</h1>
					<h2>Solicitar o nome, idade, sexo e salário de uma pessoa. Posteriormente, faça o reajuste do
					salário de acordo com as condições abaixo e posteriormente apresente o novo salário (com
					reajuste): <br><br>
					- Acima de 50 anos, reajuste de 35%<br>
					- Mulheres com até 24 anos, reajuste de 18%<br>
					- Homens com até 27 anos, reajuste de 17,5%<br>
					- Mulheres entre 25 e 50 anos, reajuste de 23%<br>
					- Homens entre 28e 38 anos, reajuste de 21%<br>
					- Homens entre 39 e 50 anos, reajuste de 23%<br>
					</h2>
					<div class="executar">
						<div id="btn-executar-9" class="btn-executar">Executar</div>
					</div>
				</div>
	`;
	
	const executar = document.getElementById("btn-executar-9");
	executar.addEventListener("click", () => {
		console.log("9")
		espaco.innerHTML = "";
		setTimeout(function() {
			main9();
		},200)
	});
}

function main9() {
	var nome, sexo;
	var idade;
	var salario, salarioReajustado;
	
	function calcularReajuste(sexo, idade, salario) {
		var salarioNovo;
		if (idade > 50) {
			salarioNovo = salario * 1.35;
		} else {
			switch (sexo) {
				case "f":
					if (idade <= 24) {
						salarioNovo = salario * 1.18;
					} else {
						if (idade >= 25 && idade <= 50) {
							salarioNovo = salario * 1.23;
						}
					}
					break;
				case "m":
					if (idade <= 27) {
						salarioNovo = salario * 1.175;
					} else {
						if (idade >= 28 && idade <= 38) {
							salarioNovo = salario * 1.21;
						} else {
							if (idade >= 39 && idade <= 50) {
								salarioNovo = salario * 1.23;
							}
						}
					}
					break
			}
		}
		return salarioNovo;
	}
	
	
	
	nome = prompt("Digite o seu nome:");
	while (nome.length < 3) {
		var nome = prompt("Seu nome deve conter no mínimo 3 letras:");
	}
	idade = prompt("Digite sua idade:");
	while (idade <= 0 || idade > 100) {
		idade = prompt("Informe uma idade válida:");
	}
	sexo = prompt("Informe o seu sexo (F ou M):");
	sexo.toLowerCase();
	while (sexo != "f" && sexo != "m") {
		sexo = prompt("Digite um sexo válido:");
		sexo.toLowerCase();
	}
	salario = prompt("Digite o seu salário: ");
	while (salario < 0) {
		salario = prompt("Digite um salário válido");
	}
	salario = Math.floor(salario).toFixed(2);
	
	salarioReajustado = calcularReajuste(sexo, idade, salario).toFixed(2);
	
	printNovo(nome + ", o seu salário de R$ " + salario + " foi reajustado para R$ " + salarioReajustado);
}