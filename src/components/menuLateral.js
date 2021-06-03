import React from 'react'
import '../styles/menuLateral.css'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-wordpress-admin'
import { typeUser, user, password } from './formlogin'
import { Link } from 'react-router-dom'

export var Nuevo = ""

function redireccionar(){
    document.getElementById('cerrar').click()
}

function verificar(){
    if(typeUser == "" || user == "" || password == ""){
        Swal.fire({
            icon: 'error',
            title: 'Debes iniciar sesion',
            confirmButtonText: 'Aceptar',
            backdrop: '#14161E',
            allowOutsideClick: false,
            allowEscapeKey: false
        }).then((aceptar) =>{
            if(aceptar.isConfirmed){
                redireccionar()
            }
        })
    }
}

class MenuLateral extends React.Component{
    mostrar = e => {
        Swal.fire({
         title: '¿Qué tipo de estudiante es?',
         text: "Selecciona una opcion",
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Nuevo',
         cancelButtonText: 'Antiguo',
         allowOutsideClick: false,
         allowEscapeKey: false,
         allowEnterKey: false
       }).then((result) => {
         if (result.isConfirmed) {
            Nuevo = "SI"
            document.getElementById('addEstBtn').click()
         }else{
            Nuevo = "NO"
            document.getElementById('addEstBtn').click()
         }
       })
     } 

    render(){
        //verificar()
        return(
            <>
              <Link to="/">
               <button id="cerrar" hidden>Cerrar</button> 
              </Link>
             
             <div className="menu">
                <div className="ico">
                   <label htmlFor="btn-menu" className="iconoMenu"><MenuIcon 
                                style={{
                                    color:"#fff",
                                    fontSize: 50
                                }}
                                className="ic"/></label>
                </div>
             </div> 
             <input type="checkbox" id="btn-menu"/>
            <div className="container-menu">
                <div className="cont-menu">
                    <nav>
                        <Link to="/login/admin/addSecretary">Agregar secretaria </Link>
                        <Link to="/login/admin/addAcademicDirector">Agregar director academico </Link>
                        <Link to="/login/admin/addTeacher">Agregar docente </Link>
                        <Link to="/login/admin/addClassroom">Agregar curso </Link>
                        <Link onClick={this.mostrar}>Agregar estudiante </Link>
                        <Link to="/login/admin/addStudent" hidden> 
                                <button id="addEstBtn" hidden></button>
                        </Link>
                    </nav>
                    <label htmlFor="btn-menu" className="iconoClose">
                        <CloseIcon
                            style={
                                {
                                    color: "#fff",
                                    fontSize: 40
                                }
                            }
                        />
                    </label>
                </div>
            </div>
            </>
        )
    }
}

export default MenuLateral