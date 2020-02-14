import React from 'react';

import './App.css';
import Header from './component/header/header'
import Form from './component/form/form'
import ErrorMjs from './component/error/error'
import Clima from './component/clima/clima'

class App extends React.Component {
  state = {
    error: '',
    consulta: {},
    resultado: {}
  }
  componentDidMount() {
    this.setState({ error: false })
  }
  consultaAPI = () => {
    const { ciudad, pais } = this.state.consulta
    if (!ciudad || !pais) return null

    const APIkey = '91e4dc75ef30be7011f9a3480b10050d',

      URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${APIkey}`;

    //fecth
    fetch(URL).then(respuesta => {

        return respuesta.json()
      })
      .then(datos => {


        this.setState({ resultado: datos })
        console.log(this.state.resultado)
      })
      .catch(datos => {
        console.log(datos)
      })
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(prevState)
    if (prevState.consulta.ciudad !== this.state.consulta.ciudad) {
      this.consultaAPI()

    }
  }

  consultaDatos = (respuesta) => {
    let { ciudad, pais } = respuesta
    if (ciudad === "" || pais === "") {
      this.setState({ error: true })
    }
    else {
      this.setState({ consulta: respuesta, error: false })

    }
  }
  render() {
    let resultado;

    if (this.state.error === true) {
      resultado = <ErrorMjs errorMensaje="Ambos campos deben ser completados"/>
    }
    else if (this.state.resultado.message === "city not found") {
      resultado = <ErrorMjs errorMensaje="La ciudad no existe"/>
    }
    else {
      resultado = <Clima resultado={this.state.resultado}/>
    }
    return (
      <div>
      <Header title="Consulta el clima en tu ciudad" />
       <Form consultaDatos={this.consultaDatos}/>
       {resultado}
     </div>
    )
  }
}

export default App;
