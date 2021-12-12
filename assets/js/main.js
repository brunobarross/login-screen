const formulario = document.forms[0];


const validacao = (evento) =>{
    const elemento = evento.target;

    if(!elemento.checkValidity() || elemento.value == ''){
  
        elemento.parentNode.classList.add('invalido')
        elemento.parentNode.classList.remove('valido')
    } else{
        elemento.parentNode.classList.remove('invalido')
        elemento.parentNode.classList.add('valido')
    }
}


formulario.addEventListener("keyup", validacao)