import React from 'react'
import MenuLateral from '../components/menuLateral'
import Particulas from '../components/particulas'
import Input from '../components/input.jsx'
import Button from '../components/button'
import '../styles/querysAD.css'
import '../styles/addTeacher.css'

var gestion = ["SELECCIONE LA GESTION", 1, 2, 3]

var semestres = ["SELECCIONE EL SEMESTRE", 1, 2, 3, 4, 5, 6]

const carreras = ["SELECCIONE LA CARRERA", 
                  "SISTEMAS INFORMÁTICOS",
                  "MECÁNICA AUTOMOTRIZ",
                  "MECÁNICA INDUSTRIAL",
                  "ELECTROMECÁNICA",
                  "ELECTRÓNICA",
                  "CONSTRUCCION CIVIL"]

var valores = ["ESCOGE UNA CARRERA"]

class AddClassroom extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      carrera: carreras,
      vals: valores
    }
  }

  mostrar = (e) =>{
    if(e.target.value == "SELECCIONE LA CARRERA"){
      this.setState({
        vals: valores
      })
    }else if(e.target.value == "SISTEMAS INFORMÁTICOS"){
      this.setState({
        vals: gestion
      })
    }else{
      this.setState({
        vals: semestres
      })
    }
  }

    render() {
      return (
        <>
        <Particulas />
        <MenuLateral />
        <div className="content-form">
          <form>
            <select
               name="tipoCarrera"
               className="form-select"
               onClick={this.mostrar}
               >
                {
                  carreras.map(
                    (car) =>
                    <option 
                    className="opt"
                   >{car}</option>
                  )
                }
            </select>
            <br />
            <Input
              name="idCurso"
              type="text"
              placeholder="INGRESE EL CODIGO DEL CURSO" />
              <br/>
            <Input
              name="nombreCurso"
              type="text"
              placeholder="INGRESE EL NOMBRE DEL CURSO" />
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
              <select
               name="dictaDoc"
               className="form-select"
               >
                <option className="opt">SELECCIONE DOCENTE</option>
                <option className="opt">Wendy Navia Chambi</option>
                <option className="opt">Jhonatan Hinojosa Delgadillo</option>
                <option className="opt">Freddy Calcina</option>
                <option className="opt">Roxana Foronda</option>
                <option className="opt">Victor Paco</option>
                <option className="opt">Ynclan Santos</option>
                <option className="opt">Angel Rodriguez</option>
                <option className="opt">Luis Gutierrez</option>
                <option className="opt">Patricia Fernandez</option>
            </select>
              <br/>
              <select 
               name="gestion"
               className="form-select">
                 {this.state.vals.map(
                   (ges) =>
                    <option className="opt">{ges}</option>                   
                 )}
              </select>
              <br/>
              <Button title="ACEPTAR"/>
          </form>
        </div>
        </>
      )
    }
  }
  
  export default AddClassroom