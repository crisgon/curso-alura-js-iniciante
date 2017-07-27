var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        pacientes.forEach(function(indice){
            var paciente = indice;
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); 

            if(!expressao.test(nome)){
                paciente.classList.add("invisivel");
            }else{
                paciente.classList.remove("invisivel");
                console.log("Igual!!");
            }
        });
    }else{
        pacientes.forEach(function(indice){
            indice.classList.remove("invisivel");
        });
    }
});