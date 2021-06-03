import React from 'react'
import AdminLogo from '../images/logoAdmin.svg'
import AdminLogo2 from '../images/settings.svg'
import '../styles/adminTitle.css'

function AdminTitle(){
    return(
        <>
         <div className="content">
            <div className="cont">
                <img src={AdminLogo} className="logoAdmin" />
                <h1>MODO ADMINISTRADOR</h1>
                <img src={AdminLogo2} className="logoAdmin2" />
            </div>
         </div>
        </>
    )
}

export default AdminTitle