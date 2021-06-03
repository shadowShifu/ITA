import React from 'react'
import MenuLateral from '../components/menuLateral'
import Particulas from '../components/particulas'
import Input from '../components/input.jsx'
import Button from '../components/button'
import '../styles/querysAD.css'
import '../styles/addAcademicDirector.css'

class AddAcademicDirector extends React.Component {
    render() {
      return (
        <>
        <Particulas />
        <MenuLateral />
        <div className="content-form">
          <form method="">
            <Input
              name="idCarnetDir"
              type="text"
              placeholder="INGRESE EL CARNET DE IDENTIDAD" />
              <br/>
            <Input
              name="nombreDir"
              type="text"
              placeholder="INGRESE EL NOMBRE COMPLETO" />
              <br/>
              <Input
              name="apDir"
              type="text"
              placeholder="INGRESE EL APELLIDO PATERNO" />
              <br/>
              <Input
              name="amDir"
              type="text"
              placeholder="INGRESE EL APELLIDO MATERNO" />
              <br/>
              <Input
              name="userDir"
              type="text"
              placeholder="INGRESE UN NOMBRE DE USUARIO" />
              <br/>
              <Input
              name="passDir"
              type="text"
              placeholder="INGRESE UNA CONTRASEÑA" />
              <input name="typeUs" type="hidden" value="Director academico"/>
              <br/>
              <Button title="ACEPTAR"/>
          </form>
        </div>
        </>
      )
    }
  }
  
  export default AddAcademicDirector