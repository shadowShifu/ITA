import React from 'react'
import MenuLateral from '../components/menuLateral'
import Particulas from '../components/particulas'
import Input from '../components/input'
import Button from '../components/button'
import '../styles/querysAD.css'
import '../styles/addAcademicDirector.css'

class AddSecretary extends React.Component {
    render() {
      return (
        <>
        <Particulas />
        <MenuLateral />
        <div className="content-form">
          <form>
            <Input
              name="idCarnetSec"
              type="text"
              placeholder="INGRESE EL CARNET DE IDENTIDAD" />
              <br/>
            <Input
              name="nombreSec"
              type="text"
              placeholder="INGRESE EL NOMBRE COMPLETO" />
              <br/>
              <Input
              name="apSec"
              type="text"
              placeholder="INGRESE EL APELLIDO PATERNO" />
              <br/>
              <Input
              name="amSec"
              type="text"
              placeholder="INGRESE EL APELLIDO MATERNO" />
               <br/>
              <Input
              name="userSec"
              type="text"
              placeholder="INGRESE UN NOMBRE DE USUARIO" />
              <br/>
              <Input
              name="passSec"
              type="text"
              placeholder="INGRESE UNA CONTRASEÑA" />
              <input name="typeUs" type="hidden" value="Secretaria"/>
              <br/>
              <Button title="ACEPTAR"/>
          </form>
        </div>
        </>
      )
    }
  }
  
  export default AddSecretary