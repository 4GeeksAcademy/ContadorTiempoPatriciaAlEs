import React from "react";


function SecondCounter({ uno, dos, tres, cuatro, cinco, seis }) {

    return (
        <div className="container row">
            <div className="icono col-lg-2 col-sm-12"> <i className="fa fa-clock"></i>
            </div>
            <div className="seis col">{seis % 10}</div>
            <div className="cinco col">{cinco % 10}</div>
            <div className="cuatro col">{cuatro % 10}</div>
            <div className="tres col">{tres % 10}</div>
            <div className="dos col">{dos % 10}</div>
            <div className="uno col">{uno % 10}</div>
        </div>

    )
}


export default SecondCounter;

