import React from 'react'


class Form extends React.Component {
    constructor(props) {

        super(props)

        this.ciudadRef = React.createRef();
        this.paisRef = React.createRef();
    }

    handlerSubmit = (e) => {
        e.preventDefault()
        const respuesta = {
            ciudad: this.ciudadRef.current.value,
            pais: this.paisRef.current.value
        }
        this.props.consultaDatos(respuesta)
        e.currentTarget.reset();
    }
    componentDidMount() {

    }

    render() {
        return (
            <div className="contenedor-form">
                <div className="container">
                  <div className="row">
                  <form onSubmit={this.handlerSubmit}>
                     <div className="input-field col s12 m8 l4 offset-m2">
                      <input type="text" id="ciudad" name="ciudad"  ref={this.ciudadRef}/>
                      <label htmlFor="ciudad">Ciudad:</label>
                    </div>
                    <div className="input-field col s12 m8 l4 offset-m2">
                      <select id="pais" name="pais" ref={this.paisRef}>
                      <option value="" defaultValue>Seleccione un país</option>
                      <option value="AR" defaultValue>Argentina</option>
                      <option value="VE" defaultValue>Venezuela</option>
                      <option value="CO" defaultValue>Colombia</option>
                      <option value="EC" defaultValue>Ecuador</option>
                      <option value="CH" defaultValue>Chile</option>
                       <option value="PE" defaultValue>Peru</option>
                      </select>
                     
                    </div>
                     <div className="input-field col s12 m8 l4 offset-m2 buscador">
                      <input className="waves-effect waves-light btn-large yellow accent-4" type="submit" value="buscar"/>
                      
                    </div>
                  </form>
                </div>
                </div>
            </div>
        )
    }
}
export default Form
