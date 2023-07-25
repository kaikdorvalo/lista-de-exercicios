const espaco = document.getElementById("area-codigo");

function printNovo(msg) {
	if (msg == undefined) {
		msg = "";
	}
	var temp = espaco.innerHTML;
	var novo = msg.toString();
	temp = temp + novo;
	espaco.innerHTML = temp;
}