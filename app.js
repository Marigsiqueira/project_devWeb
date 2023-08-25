
var dados = [
    { login: "mariana", senha: "mariana"},
    { login: "claudia", senha: "claudia"},
    { login: "mayara", senha: "mayara"}

]

const login = function(){

    var dao= dados;
    var login= (document.getElementById("nome").value) //pegando o texto do input pelo id e guardando na variável login
    var senha= (document.getElementById("senha").value)
    
    for (let i = 0; i < dao.length; i=i+1) { //fazer um lopping para verificar todas os indices do array. 
        if (login == dao[i].login && senha== dao[i].senha){
            window.location.href = "paginalivre.html";
            window.alert("Logado")
            return;
        }

    }
}

function selecionar (qualBotao) {
    switch (qualBotao) {
            case 'P':
            document.getElementById("botaoSelecionado").innerHTML = "Assistir"
            window.location.href= "https://youtu.be/-KBirb6x7Tc?si=b-cT9BGZqd0XpORu";
            break;
            case 'M':
            document.getElementById("botao2Selecionado").innerHTML = "Assistir";
            window.location.href= "https://youtu.be/HiWrxf-blfQ?si=SYeaD1kwCfzb3jql"
            break;
            case 'G':
            document.getElementById("botao3Selecionado").innerHTML = "Assistir";
            window.location.href= "https://youtu.be/mrNr_lGXok4?si=RBUw0G9SFun8m10Z"
            break;
            case 'H':
            document.getElementById("botao4Selecionado").innerHTML = "Assistir";
            window.location.href= "https://www.youtube.com/watch?v=uvq-76lFFn8" //COLOCAR LINK
            break;
            case 'L':
            document.getElementById("botao5Selecionado").innerHTML = "Assistir";
            window.location.href= "https://www.youtube.com/watch?v=frdiVxORvqQ" //COLOCAR LINK
            break;
            case 'J':
            document.getElementById("botao6Selecionado").innerHTML = "Assistir";
            window.location.href= "https://www.youtube.com/watch?v=HUChefocs0c" //COLOCAR LINK
            break;
        default:
            document.getElementById("botaoSelecionado").innerHTML = "erro";
        }
    }

module.exports = login;