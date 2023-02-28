import  '/MostrarMesaje.css'
export  default  function MostrarMensaje({score, number, secretNumber}) {
if(secretNumber === number) {   
    return  <h1 className="message"> Felicidades, adivinaste el número secreto </h1>;
} else if(score === 0) {
    return  <h1 className="message"> Perdiste, no te quedan más intentos </h1>;
} else if(number ===''){ 
    return  <h1 className="message"> Empezamos a jugar...</h1>;
}

else {
    return  <h1 className="message"> Intenta de nuevo </h1>;
}



   
}