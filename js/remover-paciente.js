
var tabela = document.querySelector("table");
console.log(tabela);

tabela.addEventListener("dblclick", function(event){
	var alvoEvento = event.target;
	var paiAlvo = alvoEvento.parentNode;
	paiAlvo.classList.add("fadeOut");
	setTimeout(function (){
		paiAlvo.remove();
	}, 1000);
	//event.target.parentNode.remove(); Forma simplificada
});



// var paciente = document.querySelectorAll(".paciente");

// console.log(paciente);

// paciente.forEach(function(indice){
// 	indice.addEventListener("dblclick", function(){
// 		this.remove();
// 	});
// });