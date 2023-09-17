import React from 'react';
import Devsafio from '../Assets/Imgs/devsafio.jpg';
import Ganesh from '../Assets/Imgs/paula-rotundo.jpg';
import Damian from '../Assets/Imgs/damian-arrieta.jpg';
import DW from '../Assets/Imgs/dw.jpg';
import ECReact from '../Assets/Imgs/ec-react.jpg'


const worksData = [
    {
        title: 'Devsafio',
        subtitle: 'Desarrollo para Incubadora latam',
        imageUrl: Devsafio,
    },
    {
        title: 'Ganesh inbound',
        subtitle: 'Landing page para Paula Rotundo',
        imageUrl: Ganesh,
    },
    {
        title: 'Damián Arrieta',
        subtitle: 'Primera versión de mi portfolio',
        imageUrl: Damian,
      },
    {
        title: 'Richie Hawtin',
        subtitle: 'Proyecto final del curso de desarrollo web',
        imageUrl: DW,
    },
    {
        title: 'E-Commerce React',
        subtitle: 'Proyecto final del curso de react',
        imageUrl: ECReact,
    },
  ];

export default function Works() {

  return (
    <div className="works">
        <h1 className="component-title">Developer Works</h1>
      <div className="works-container">
        {worksData.map((work, index) => (
          <div
            key={index}
            className={`work-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="work-content">
              <div className="work-info">
                <h2 className="work-title">{work.title}</h2>
                <p className="work-subtitle">{work.subtitle}</p>
              </div>
              <div className="work-image">
                <img src={work.imageUrl} alt={work.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
