import React from "react";
import biceps from "./tecnicabiceps.jpg";
import lagartijas from "./tecnicalagartijas.jpg"; 
import sentadilla from "./tecnicasentadilla.jpg"; 
import triceps from "./tecnicatriceps.jpg"; 
import pesomuerto from "./tecnicapesomuerto.jpg"; 
import remocm from "./tecnicaremocm.jpg"; 

function Tecnica() {
    const contenedores = [
        { src: biceps, titulo: "Biceps", descripcion: "Mantén los codos cerca de la cabeza y extiende los brazos hacia arriba. Baja lentamente la mancuerna detrás de la cabeza hasta que los codos estén en un ángulo de 90 grados y luego vuelve a la posición inicial." },
        { src: triceps, titulo: "Triceps", descripcion: "Sujeta una barra con las manos separadas al ancho de los hombros. Flexiona los codos y lleva la barra hacia el pecho, manteniendo los codos cerca del cuerpo. Baja la barra lentamente hasta la posición inicial." },
        { src: sentadilla, titulo: "Sentadilla", descripcion: "Coloca una barra sobre los hombros y párate con los pies a la altura de los hombros. Flexiona las rodillas y caderas, bajando el cuerpo como si te fueras a sentar. Mantén la espalda recta y baja hasta que los muslos estén paralelos al suelo, luego vuelve a la posición inicial." },
        { src: lagartijas, titulo: "Flexiones", descripcion: "Colócate en posición de plancha con las manos ligeramente más anchas que los hombros. Baja el cuerpo hasta que el pecho casi toque el suelo, manteniendo el cuerpo en línea recta, y luego empuja hacia arriba hasta la posición inicial." },
        { src: pesomuerto, titulo: "Peso Muerto", descripcion: "Con los pies a la altura de los hombros, agarra una barra con las manos fuera de las rodillas. Mantén la espalda recta y levanta la barra extendiendo las caderas y rodillas. Baja la barra de manera controlada de vuelta al suelo." },
        { src: remocm, titulo: "Remo con mancuerna", descripcion: "Coloca una rodilla y una mano en un banco para soporte. Con la otra mano, sujeta una mancuerna y tira de ella hacia el torso, manteniendo el codo cerca del cuerpo. Baja la mancuerna de manera controlada y repite." },
        // Aqui se agregan más ejercicios
    ];

    return(
        <div style={{
            margin:"10px",
        }}>
            <div style={{
                display: 'flex', 
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center',
                }}>
                <h1 style={{fontSize: "60px", color:"orange", margin: 10}}>Técnica de los Ejercicios</h1>
                <input 
                type="text"
                placeholder="Proximamente..."
                style={{backgroundColor:"lemonchiffon", borderRadius:"10px", height:"35px", width:"300px", border: "3px solid orange", marginBottom:"30px"}} />
            </div>
            {contenedores.map((contenedor, index) => (
                <div key={index} style={{display: 'flex', alignItems: 'center', margin:"10px", border: "2px solid orange", borderRadius:"20px"}}>
                    <img src={contenedor.src} alt="Imagen" style={{width: '240px', height:"240px", borderRadius:"20px"}} />
                    <div style={{marginLeft: '20px'}}>
                        <h1 style={{fontSize: "40px", color:"orange"}}>{contenedor.titulo}</h1>
                        <p style={{fontSize: "25px", color:"lemonchiffon"}}><strong>Explicación: </strong>{contenedor.descripcion}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Tecnica;