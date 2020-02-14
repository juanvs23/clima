import React from 'react'

const ErrorMjs = (props) => {
    return (<div className="container">
        <div className="row">
            <div className="col s12 m6 offset-m3">
                <div className="card-panel red darken-4 error">
                   {props.errorMensaje}
            </div>
            </div>
        </div>
    </div>);
}
export default ErrorMjs
