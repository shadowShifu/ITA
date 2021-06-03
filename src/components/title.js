import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/title.css'
import 'animate.css'
import { MDBTypography } from 'mdb-react-ui-kit';

function Title() {
  return (
    <>
      <div className="container">
        <div className="row" >
          <div className="col-xs-12 col-sm-12 col-md-12 divT">
            <div className="f">
              <MDBTypography tag='h1' className="animate__animated animate__zoomIn animate__slower	1s mdTag">INSTITUTO</MDBTypography>
            </div>
            <div className="f">
              <MDBTypography tag='h1' className="animate__animated animate__zoomIn animate__delay-2s	2s animate__slower	1s mdTag">TECNOLÓGICO</MDBTypography>
            </div>
            <div className="f">
              <MDBTypography tag='h1' className="animate__animated animate__zoomIn animate__delay-4s	4s animate__slower	1s mdTag">AYACUCHO</MDBTypography>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Title
