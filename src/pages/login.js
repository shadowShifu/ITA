import React from 'react'
import Title from '../components/title'
import Formlogin from '../components/formlogin'
import Particulas from '../components/particulas'
import '../styles/login.css'
import 'bootstrap/dist/css/bootstrap.css';

class Login extends React.Component {
  render() {
    return (
      <>
      <Particulas />

      <div className="container">
        <div className="conte">
        <Title />
        <Formlogin />
      </div>
      </div>
      </>
    )
  }
}

export default Login
