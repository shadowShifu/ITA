import React from 'react'
import MenuLateral, { Nuevo } from '../components/menuLateral'
import Particulas from '../components/particulas'
import Input from '../components/input.jsx'
import Button from '../components/button'
import '../styles/querysADS.css'
import '../styles/addTeacher.css'

function ver (){
  if(Nuevo == "SI"){
     return (
      
      <div className="content-form">
      <form>
        <select
           name="tipoCarreraEst"
           className="form-select"
           >
            <option className="opt">SELECCIONE LA CARRERA</option>
            <option className="opt">SISTEMAS INFORMÁTICOS</option>
            <option className="opt">MECANICA AUTOMOTRIZ</option>
            <option className="opt">ELECTRÓNICA</option>
            <option className="opt">CONSTRUCCION CIVIL</option>
        </select>
        <br />
        <Input
          name="carnetEst"
          type="text"
          placeholder="INGRESE EL CARNET DEL ESTUDIANTE" />
          <br/>
        <Input
          name="apEst"
          type="text"
          placeholder="INGRESE EL APELLIDO PATERNO DEL ESTUDIANTE" />
          <br/>
          <Input
          name="amEst"
          type="text"
          placeholder="INGRESE EL APELLIDO MATERNO DEL ESTUDIANTE" />
          <br/>
          <Input
          name="nombreEst"
          type="text"
          placeholder="INGRESE EL NOMBRE DEL ESTUDIANTE" />
          <br/>
          <select
           name="turno"
           className="form-select"
           >
            <option className="opt">SELECCIONE EL TURNO</option>
            <option className="opt">Mañana</option>
            <option className="opt">Tarde</option>
        </select>
        <br/>
              <Input
              name="userEst"
              type="text"
              placeholder="INGRESE UN NOMBRE DE USUARIO" />
              <br/>
              <Input
              name="passEst"
              type="text"
              placeholder="INGRESE UNA CONTRASEÑA" />
              <input name="typeUs" type="hidden" value="Estudiante"/>
              <br/>
          <Button title="ACEPTAR"/>
      </form>
    </div>

    )
  }else if(Nuevo == "NO"){
    return (
      
      <div className="content-form">
      <form>
        <Input
          name="carnetEst"
          type="text"
          placeholder="INGRESE EL CARNET DEL ESTUDIANTE" />
          <br/>
        
          <select
           name="turno"
           className="form-select"
           >
            <option className="opt">SELECCIONE EL TURNO</option>
            <option className="opt">Mañana</option>
            <option className="opt">Tarde</option>
        </select>
          <br/>
          <Button title="ACEPTAR"/>
      </form>
    </div>

    )
  }
}

class AddEstudiante extends React.Component {
    render() {
      return (
        <>
        <Particulas />
        <MenuLateral />
        {ver()}
        </>
      )
    }
  }
  
  export default AddEstudiante