import React from 'react'
import MenuLateral from '../components/menuLateral'
import Particulas from '../components/particulas'
import Input from '../components/input.jsx'
import Button from '../components/button'
import '../styles/querysAD.css'
import '../styles/addTeacher.css'

class AddTeacher extends React.Component {
    render() {
      return (
        <>
        <Particulas />
        <MenuLateral />
        <div className="content-form">
          <form>
            <Input
              name="idCarnetDoc"
              type="text"
              placeholder="INGRESE EL CARNET DE IDENTIDAD" />
              <br/>
            <Input
              name="nombreDoc"
              type="text"
              placeholder="INGRESE EL NOMBRE COMPLETO" />
              <br/>
              <Input
              name="apDoc"
              type="text"
              placeholder="INGRESE EL APELLIDO PATERNO" />
              <br/>
              <Input
              name="amDoc"
              type="text"
              placeholder="INGRESE EL APELLIDO MATERNO" />
              <br/>
              <Input
              name="userDoc"
              type="text"
              placeholder="INGRESE UN NOMBRE DE USUARIO" />
              <br/>
              <Input
              name="passDoc"
              type="text"
              placeholder="INGRESE UNA CONTRASEÑA" />
              <input name="typeUs" type="hidden" value="Docente"/>
              <br/>
              <Button title="ACEPTAR"/>
          </form>
        </div>
        </>
      )
    }
  }
  
  export default AddTeacher
