import React, {Component} from 'react';
import PropTypes from 'prop-types';

import uuid from 'uuid';

class AgregarCita extends Component {

  // refs
  nombreMascotaRef = React.createRef();
  nombreDuenioRef = React.createRef();
  fechaRef = React.createRef();
  horaRef = React.createRef();
  sintomasRef = React.createRef();

  state = {
    error: false
  }

  crearNuevaCita = (e) => {
    e.preventDefault();
    
    const mascota = this.nombreMascotaRef.current.value,
          duenio = this.nombreDuenioRef.current.value,
          fecha = this.fechaRef.current.value,
          hora = this.horaRef.current.value,
          sintomas = this.sintomasRef.current.value;

    if (mascota === '' || duenio === '' || fecha === '' || hora === '' || sintomas === ''){
      this.setState({error:true})
    } else {
      const nuevaCita = {
        id: uuid(),
        mascota,
        duenio,
        fecha,
        hora,
        sintomas
      }

      // Se mandan los datos del formulario al APP.JS
      this.props.crearCita(nuevaCita);

      //Se resetea el formulario
      e.currentTarget.reset();

      //Eliminar el error
      this.setState({error:false})
    }
  }

  render () {

    const existeError = this.state.error;
    
    return(
      <div className="card mt-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Agrega las Citas Aquí</h2>
          <form onSubmit={this.crearNuevaCita}>
            <div className="form-group row">
              <label htmlFor="nombreMascota" className="col-sm-12 col-lg-12 col-form-label">Nombre Mascota</label>
              <div className="col-sm-12 col-lg-12">
                  <input id="nombreMascota" ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
              </div>
            </div>
            <div className="form-group row">
              <label htmlFor="duenio" className="col-sm-12 col-lg-12 col-form-label">Nombre Dueño</label>
              <div className="col-sm-12 col-lg-12">
                  <input id="duenio" ref={this.nombreDuenioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-lg-6 pl-0 pr-0">
                <label htmlFor="fecha" className="col-sm-12 col-lg-12 col-form-label">Fecha</label>
                <div className="col-sm-12 col-lg-12  mb-4 mb-lg-0">
                    <input id="fecha" ref={this.fechaRef} type="date" className="form-control" />
                </div>
              </div>

              <div className="col-lg-6 pl-0 pr-0">
                <label htmlFor="hora" className="col-sm-12 col-lg-12 col-form-label">Hora</label>
                <div className="col-sm-12 col-lg-12">
                    <input id="hora" ref={this.horaRef} type="time" className="form-control" />
                </div>
              </div>                     
            </div>

            <div className="form-group row">
              <label htmlFor="sintomas" className="col-sm-12 col-lg-12 col-form-label">Sintomas</label>
              <div className="col-sm-12 col-lg-12">
                  <textarea id="sintomas" ref={this.sintomasRef}  className="form-control"></textarea>
              </div>
            </div>
            <div className="form-group row justify-content-end">
              <div className="col-sm-4">
                  <button type="submit" className="btn btn-success w-100">Agregar</button>
              </div>
            </div>
          </form>
          {existeError ? <div className="alert alert-danger text-center">Todos los campos son obligatorios</div> : ''}
        </div>
        
      </div>
    );
  }
}

AgregarCita.propTypes = {
  crearCita : PropTypes.func.isRequired
}

export default AgregarCita;