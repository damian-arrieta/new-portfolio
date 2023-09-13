import React, { useState, useEffect } from 'react';
import TrackVisibility from 'react-on-screen';

function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Frontend Developer", "Customer Sales", "Customer Services", "Logistic Specialist"];
  const period = 2000;
  const screenWidth = window.innerWidth;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum((loopNum) => loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-prefix">I Am</h2>
        {screenWidth >= 425 && (
          <TrackVisibility once>
            {({ isVisible }) => (
              <div className="hero-title">
                {isVisible &&
                  text.split(' ').map((word, index) => (
                    <h1 key={index}>{word}</h1>
                  ))}
              </div>
            )}
          </TrackVisibility>
        )}
      </div>
      <div className="hero-right">
        <p className="hero-description">
          Hola! Soy Damián Arrieta, desarrollador frontend, experto en ventas, relaciones con clientes y logística. Tengo más de 5 años de experiencia estableciendo relaciones sólidas y brindando soluciones.
        </p>
      </div>
    </div>
  );
}

export default Hero;
