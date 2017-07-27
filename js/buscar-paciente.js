var botaoAddPacientes = document.querySelector("#buscar-paciente");

botaoAddPacientes.addEventListener("click", function(){
	
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
	xhr.addEventListener("load", function(){
			
			if(xhr.status == 200){
				erroAjax.classList.add("invisivel");
				var resposta = xhr.responseText;
				pacientes = JSON.parse(resposta);
					pacientes.forEach(function(indice){
						addPacienteNaTabela(indice);	
					}
				);
			}else{
				var erroAjax = document.querySelector("#erro-ajax");
				erroAjax.classList.remove("invisivel");
				console.log(xhr.status);
				console.log(xhr.responseText);
			}
		 

	});
	xhr.send();

	console.log(xhr.status);
});