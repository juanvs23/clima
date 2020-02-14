import React from 'react'

class Clima extends React.Component {



    mostrar() {

        let { name, main, weather } = this.props.resultado
        if (main) {
            let temperatura = Math.round(main.temp - 273.15),
                iconURL = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`
            console.log(weather)
            return (<div className="col s12 m6  l6 card blue darken-2 offset-m3 offset-l3 "> 
                        <h4 className="center-align white-text"> El clima en {name} </h4>
                        <h5 className="center-align white-text"> <b>Temperatura:</b> {temperatura}ºC <img style={{'width': '42px',
                        'position': 'absolute',
                        'marginTop': '-10px'}} src={iconURL} alt={`clima de ${name}`}/> </h5>
                         <h5 className="center-align white-text"> <b>Humedad</b> {main.humidity} </h5>
                    </div>)
        }
        else {
            return <div className="col s12 m6  l6 card blue darken-2 offset-m3 offset-l3 "> <h5 className="center white-text"> Introduzca el país y la ciudad </h5> </div>
        }



    }


    render() {



        return (
            <div className="container">
            <div className="row">
           { this.mostrar()}
            </div>
            </div>
        )
    }


}
export default Clima
