import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Cita from './Cita';

class ListaCitas extends Component {

  render() { 
    const citas = this.props.citas;

    const mensaje = Object.keys(citas).length === 0 ? 'No tienes citas' : 'Tienes estas citas';
    return (
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center">{mensaje}</h2>
          <div className="lista-citas">
            {Object.keys(this.props.citas).map(cita =>(
              
              <Cita
                key={cita}
                info={this.props.citas[cita]}
                borrarCita = {this.props.borrarCita}
              />

            ))}

          </div>
        </div>
      </div>
    );
  }
}

ListaCitas.propTypes = {
  citas : PropTypes.array.isRequired,
  borrarCita : PropTypes.func.isRequired
}
 
export default ListaCitas;