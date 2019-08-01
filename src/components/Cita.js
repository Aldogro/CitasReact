import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

  eliminarCita = () => {
    this.props.borrarCita(this.props.info.id);
  }

  render() {

    const {fecha, hora, mascota, duenio, sintomas} = this.props.info;

    return (
      <div className="media mt-3">
        <div className="media-body">
          <h4 className="mt-0">{mascota}</h4>
          <p className="card-text"><span>Nombre del dueño: </span>{duenio}</p>
          <p className="card-text"><span>Fecha: </span>{fecha}</p>
          <p className="card-text"><span>Hora: </span>{hora}</p>
          <p className="card-text"><span>Síntomas: </span>{sintomas}</p>
          <button onClick={this.eliminarCita} className="btn btn-danger">Borrar</button>
        </div>
      </div>
    );
  }
}

Cita.propTypes = {
  info : PropTypes.shape({
    fecha : PropTypes.string.isRequired,
    hora : PropTypes.string.isRequired,
    mascota : PropTypes.string.isRequired,
    duenio : PropTypes.string.isRequired,
    sintomas : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
  }),
  borrarCita : PropTypes.func.isRequired
}
 
export default Cita;