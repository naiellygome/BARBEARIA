
function abrirLogin(){
    document.getElementById("modalLogin").style.display="flex";
}

function fecharLogin(){
    document.getElementById("modalLogin").style.display="none";
}

window.onclick = function(event){
    let modal = document.getElementById("modalLogin");

    if(event.target == modal){
        modal.style.display="none";
    }
}
