import React from 'react';
import Me from '../Assets/Imgs/me.JPG'

export default function AboutMe() {

  return (
    <div className="about-me-container">
      <div className="about-me-left">
        <h1 className="component-title">Hola. Soy Damián Arrieta</h1>
        <p className="component-text">
        Con más de 5 años de experiencia en áreas que abarcan ventas, atención al cliente y logística, me he especializado en comprender necesidades, establecer relaciones sólidas y proporcionar soluciones, tanto en el ámbito profesional como tecnológico.
        </p>
        <p className="component-text">
        Me caracterizo por mi capacidad de planificación, altamente organizado y analítico en mi enfoque. Mi capacidad para aprender rápidamente y mantener una actitud positiva ante cualquier desafío ha sido fundamental en mi desarrollo profesional.
        </p>
        <p className="component-text">
        Lo que me distingue es mi habilidad para combinar las mejores prácticas de diversas disciplinas en las que he trabajado y aplicarlas de manera efectiva a proyectos específicos, lo que ha dado lugar a grandes resultados.
        </p>
        <p className="component-text">
        Mis intereses personales también contribuyen a mi crecimiento. La música me brinda un espacio para expresar mi creatividad, mientras que mi compromiso con el entrenamiento en el gimnasio refuerza mi constancia y disciplina, demostrando que estos valores son clave para obtener resultados fantásticos, no solo en el acondicionamiento físico sino también en la vida en general.
        </p>
        <p className="component-text">
        Siempre estoy dispuesto a nuevos desafíos, aprovechar mi experiencia y seguir aprendiendo.
        </p>
      </div>
      <div className="about-me-right">
        <img src={ Me } alt="Damián Arrieta" />
      </div>
    </div>
  )
}
