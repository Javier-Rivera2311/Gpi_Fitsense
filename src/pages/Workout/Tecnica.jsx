import React from "react";
import tecnicabiceps from "./tecnicabiceps.jpg";
import tecnicalagartijas from "./tecnicalagartijas.jpg"; 
import tecnicasentadilla from "./tecnicasentadilla.jpg"; 
import tecnicatriceps from "./tecnicatriceps.jpg"; 
import tecnicapesomuerto from "./tecnicapesomuerto.jpg"; 
import tecnicaremocm from "./tecnicaremocm.jpg"; 

function Tecnica() {
    const contenedores = [
        { src: tecnicabiceps, titulo: "Biceps", descripcion: "Descripción: Mantén los codos cerca de la cabeza y extiende los brazos hacia arriba. Baja lentamente la mancuerna detrás de la cabeza hasta que los codos estén en un ángulo de 90 grados y luego vuelve a la posición inicial." },
        { src: tecnicatriceps, titulo: "Triceps", descripcion: "Sujeta una barra con las manos separadas al ancho de los hombros. Flexiona los codos y lleva la barra hacia el pecho, manteniendo los codos cerca del cuerpo. Baja la barra lentamente hasta la posición inicial." },
        { src: tecnicasentadilla, titulo: "Sentadilla", descripcion: "Descripción: Coloca una barra sobre los hombros y párate con los pies a la altura de los hombros. Flexiona las rodillas y caderas, bajando el cuerpo como si te fueras a sentar. Mantén la espalda recta y baja hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial." },
        { src: tecnicalagartijas, titulo: "Flexiones", descripcion: "Colócate en posición de plancha con las manos ligeramente más anchas que los hombros. Baja el cuerpo hasta que el pecho casi toque el suelo, manteniendo el cuerpo en línea recta, y luego empuja hacia arriba hasta la posición inicial." },
        { src: tecnicapesomuerto, titulo: "Peso Muerto", descripcion: "Con los pies a la altura de los hombros, agarra una barra con las manos fuera de las rodillas. Mantén la espalda recta y levanta la barra extendiendo las caderas y rodillas. Baja la barra de manera controlada de vuelta al suelo." },
        { src: tecnicaremocm, titulo: "Remo con mancuerna", descripcion: "Descripción: Coloca una rodilla y una mano en un banco para soporte. Con la otra mano, sujeta una mancuerna y tira de ella hacia el torso, manteniendo el codo cerca del cuerpo. Baja la mancuerna de manera controlada y repite." },
        // Agrega más objetos aquí para más contenedores
    ];

    return(
        <div style={{
            margin:"10px",
        }}>
            {contenedores.map((contenedor, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', margin:"10px"}}>
                    <img src={contenedor.src} alt="Imagen" style={{width: '150px', height:"150px"}} />
                    <div style={{marginLeft: '20px', color:"white"}}>
                        <h2>{contenedor.titulo}</h2>
                        <p>{contenedor.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tecnica;