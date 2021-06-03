import React from 'react'
import MenuLateral from '../components/menuLateral'
import AdminTitle from '../components/adminTitle'
import Particulas from '../components/particulas'

class Admin extends React.Component{
  render(){
    return(
      <>
      <Particulas />
        <MenuLateral />
        <AdminTitle />
      </>
    )
  }

}

export default Admin
