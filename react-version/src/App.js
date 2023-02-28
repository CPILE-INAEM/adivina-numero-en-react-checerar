import  './App.css'
import { useState, useRef } from 'react'
import MostrarMensaje from './MostrarMensaje'

const randomNumber = () => Math.trunc(Math.random() * 20) + 1
let number = ''


function App() {
//setSecretNumber(inputRef.current.value, () => { //funcion de callback, definida al final de una funcion, que hace que el codigo se ejecute una vez que la funcion se termina de ejecutar

  // const [number, setNumber] = useState('')
  const [score, setScore] = useState(20)
  //const [highscore, setHighscore] = useState(0)
  const [secretNumber, setSecretNumber] = useState(randomNumber())
  const inputRef  = useRef (null)


const handleCheck = () => {
  const number = Number(inputRef.current.value)
  console.log('El numero secreto es ${secretNumber}')
console.log('El numero introducido es ${number}')
  if (number === secretNumber) {

  //mnsaje has ganado
  //mostrar el numero secreto HECHO
  //si el score es mayor que el highscore, actualizar el highscore
  
  setHighscore(Math.max(score, highscore))
  setScore(20)
  setSecretNumber(randomNumber())
} else if (number > secretNumber) {
  //mensaje es mas bajo
  //disminuir el score
  setScore(score - 1)
} else if (number < secretNumber) {
  //mensaje es mas alto
  //disminuir el score
  setScore(score - 1)
}






  return (
    <div>
      <header>
      <h1>Guess My Number!</h1>
      <p className="between">(Between 1 and 20)</p>
      <button className="btn again">Again!</button>
      <div className="number">{number===secretNumber ? number : '?'}</div>
    </header>
    <main>
      <section className="left">
        <input type="number" className="guess" ref={inputRef}/>
        <button className="btn check" onClick={handleCheck}>Check!</button>
      </section>
      <section className="right">
        <MostrarMensaje number={number} secretNumber={secretNumber} />
        
        <p className="label-score">💯 Score: <span className="score">{score}</span></p>
        <p className="label-highscore">
          🥇 Highscore: <span className="highscore">{highscore}</span>
        </p>
      </section>
    </main>
    </div>
  )


}

     
export  default  App
}
