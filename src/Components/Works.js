import React, { useState } from 'react';
import worksData from './WorksData';

export default function Works() {

  const [selectedWork, setSelectedWork] = useState(null);

  const openModal = (work) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <div className="works">
      <h1 className="component-title">Developer Works</h1>
      <div className="works-container">
        {worksData.map((work, index) => (
          <div
            key={index}
            className={`work-item ${index % 2 === 0 ? 'left' : 'right'}`}
            onClick={() => openModal(work)}
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

      {selectedWork && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-image">
              <img src={selectedWork.imageUrl} alt={selectedWork.title} />
              <div className="image-links">
                <button className='button'>
                <a href={selectedWork.deployLink} target="_blank" rel="noopener noreferrer">
                  Deploy
                </a>
                </button>
                <button className='button'>
                <a href={selectedWork.repositoryLink} target="_blank" rel="noopener noreferrer">
                  Repositorio
                </a>
                </button>

              </div>
            </div>
            <div className="modal-details">
              <h2 className="modal-title">{selectedWork.title}</h2>
              <p className="modal-subtitle">{selectedWork.subtitle}</p>
              <p className='modal-detail'>{selectedWork.detail}</p>
              <h3 className='modal-subtitle'>Tecnologías:</h3>
              <div className="technologies-used">
                {selectedWork.technologies.map((tech, index) => (
                <div key={index} className="technology">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="technology-logo"
                  />
                  <p className="technology-name">{tech.name}</p>
                </div>
                ))}
              </div>
            </div>
            <button className="button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
