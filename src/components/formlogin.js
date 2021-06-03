import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/formlogin.css'
import '../styles/mediaQuery.css'
import Swal from 'sweetalert2/src/sweetalert2.js'
import '@sweetalert2/theme-wordpress-admin'
import 'animate.css'
import logo from '../images/logo.png'

export var typeUser = ''
export var user = ''
export var password = ''

const validate = values => {

  const errors = {}

  if (values.typeUser == 'Seleccione' || values.typeUser == null) {
      errors.typeUser = 'Debes seleccionar una opcion'
      typeUser = values.typeUser
  }
  if(!values.user){
    errors.user = 'Debes escribir tu nombre de usuario'
    user = values.user
  }
  if (!values.password) {
    errors.password = 'Debes escribir tu contraseña'
    password = values.password
  }
  return errors
}

class Formlogin extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      title: 'ACEPTAR',
      errors: {},
      dataSource: [],
      form: {}
    }
  }


  handleChange = ({ e , target }) => {
    this.setState({
        form: {
          ...this.state.form,
          [target.name]: target.value 
        }
      })

    const {name, value} = target
    this.setState({[name]: value})
    if (value == 'ESTUDIANTE') {
      this.setState({
        title: 'DESCARGAR'
      })
    }else {
      this.setState({
        title: 'ACEPTAR'
      })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state);
    const { errors, ...sinErrors } = this.state
    const result = validate(sinErrors)

    this.setState({ errors: result })

    typeUser = sinErrors.typeUser
    user = sinErrors.user
    password = sinErrors.password

    if (!Object.keys(result).length) {

      function mostrarMensaje(){
        document.getElementById('ingresar').click()
      }

      if (typeUser == 'ADMINISTRADOR' && user == 'Shadow' && password == 'acespades') {
        Swal.fire({
          icon: 'success',
          title: 'Correcto',
          text: 'Usuario encontrado',
        }).then((aceptar) =>{
          if(aceptar.isConfirmed){
            mostrarMensaje();
          }
        })
        
      }else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'no se encontró el usuario'
        })
      }
    }

  }

  render(){
    const { errors } = this.state
    const { type, us, pass } = this.state
    return(
      <>
      <div className="container">
        <div className="">
          <div className="row">

          <div className="col-xs-12 col-sm-12 col-md-6 divL">
            <img src={logo} alt="logo-ita" className="img-responsive lb divLogo"/>
          </div>

            <div className="animate__animated animate__fadeInBottomRight animate__delay-5s animate__slower	1s col-xs-12 col-sm-12 col-md-6 form-div">
              <form className="form-log" onSubmit={this.handleSubmit}>
                <div className="div-imput">
                  {errors.typeUser && <p className="error">{errors.typeUser}</p>}
                    <select
                      name="typeUser"
                      className="form-select"
                      onChange={this.handleChange}
                      value={this.state.type}
                      >
                        <option className="opt">SELECCIONE</option>
                        <option className="opt">DIRECTOR  ACADEMICO</option>
                        <option className="opt">SECRETARIA</option>
                        <option className="opt">DOCENTE</option>
                        <option className="opt">ESTUDIANTE</option>
                        <option className="opt">ADMINISTRADOR</option>
                    </select>
                    <br/>
                    {errors.user && <p className="error">{errors.user}</p>}
                  <input
                    className="form-control imputC"
                    name="user"
                    type="text"
                    autoComplete="off"
                    placeholder="INGRESE  SU  NOMBRE  DE  USUARIO"
                    value={this.state.user}
                    onChange={this.handleChange}
                    />
                  <br/>
                    {errors.password && <p className="error">{errors.password}</p>}
                  <input
                    className="form-control imputC"
                    name="password"
                    type="password"
                    placeholder="INGRESE  SU  CONTRASEÑA"
                    autoComplete="off"
                    value={this.state.password}
                    onChange={this.handleChange}
                    />
                  </div>


                <div className="div-btn">
                 
                  <button className="btnAc" type="submit">{this.state.title}</button>

                  <Link to="/login/admin"> <button id="ingresar" hidden>Ingresar</button> </Link>
                
                </div>
              </form>
            </div>

          </div>
        </div>
        </div>
      </>
    )
  }
}

export default Formlogin
