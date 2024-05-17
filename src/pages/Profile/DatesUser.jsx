import React, { useState, useEffect } from "react";

const DatesUser = () => {
  const [edad, setEdad] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [exercise_level, setExerciseLevel] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('authToken'));
    if (user) {
      fetch('http://localhost:4000/user/getUserData', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${user.token}`
        },
        body: JSON.stringify({email: user.email})
      })
      .then(response => response.json())
      .then(data => {
        if(data.success === true){
          setEdad(data.data.edad);
          setAltura(data.data.altura);
          setPeso(data.data.peso);
          setExerciseLevel(data.data.exercise_level);
        }else{
          console.log('Error al obtener los datos del usuario');
        }
      })
      .catch(error => console.error('Error:', error));
    }
  }, []);

  return (
    <div>
      <h2>Datos del Usuario</h2>
      <p>Edad: {edad}</p>
      <p>Altura: {altura}</p>
      <p>Peso: {peso}</p>
      <p>Nivel de Ejercicio: {exercise_level}</p>
    </div>
  );
};

export default DatesUser;