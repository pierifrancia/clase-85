import React from 'react';

const Card = props => {
    return (
        <body>
            <div className="todasLasCards">
                <div className="card">
                    <div className="imagen">
                        <img src={props.info.img} alt="" />
                    </div>
                    <div className="texto">
                        <h2>{props.info.name}</h2>
                        <p>{props.info.shortDesc}</p>
                        <div className="botonVerMas"><button className="abrirModal">VER MÁS</button> </div>
                </div>
                    </div>
                    
            </div>
        </body>
    )
}

export default Card;
