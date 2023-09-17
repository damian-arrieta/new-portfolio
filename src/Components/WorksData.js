import Devsafio from '../Assets/Imgs/devsafio.jpg';
import Ganesh from '../Assets/Imgs/paula-rotundo.jpg';
import Damian from '../Assets/Imgs/damian-arrieta.jpg';
import DW from '../Assets/Imgs/dw.jpg';
import ECReact from '../Assets/Imgs/ec-react.jpg';
import ReactJS from '../Assets/Logos/react.png';
import Node from '../Assets/Logos/node-js.png';
import JavaScript from '../Assets/Logos/js.png';
import Bootstrap from '../Assets/Logos/bootstrap.png';
import CSS from '../Assets/Logos/css-3.png';
import Docker from '../Assets/Logos/docker.png';
import Redux from '../Assets/Logos/redux.png';
import Git from '../Assets/Logos/git.png';
import Github from '../Assets/Logos/github.png';
import HTML from '../Assets/Logos/html.png';
import Sass from '../Assets/Logos/sass.png';
import Firebase from '../Assets/Logos/firebase.png';
import MaterialUI from '../Assets/Logos/material-ui.png'
import OK from '../Assets/Logos/check.png'


const worksData = [
    {
        title: 'Devsafio',
        subtitle: 'Desarrollo para Incubadora latam',
        imageUrl: Devsafio,
        technologies: [
          { name: 'React.js', logo: ReactJS },
          { name: 'Node.js', logo: Node },
          { name: 'JavaScript', logo: JavaScript },
          { name: 'Bootstrap', logo: Bootstrap },
          { name: 'CSS', logo: CSS },
          { name: 'Docker', logo: Docker },
          { name: 'Redux', logo: Redux },
          { name: 'Git', logo: Git },
          { name: 'Github', logo: Github },
          { name: 'Metodologías Ágiles', logo: OK },
          { name: 'UX', logo: OK }
        ],
        detail: "Formé parte del equipo de front-end de la incubadora, el proyecto trataba de crear una plataforma web que fomenta el networking entre profesionales del área IT. Durante mi tiempo en el proyecto, me enfoqué en integrar componentes UI con APIs y base de datos, así como en implementar interfaces de usuario escalables y responsivas.Puse en práctica mis habilidades en experiencia de usuario. Utilizamos JIRA como herramienta de gestión de proyectos y trabajé en equipo con otros desarrolladores.También me encargué del debugging del software y ayudé a resolver diferentes problemas que se iban presentando durante el desarrollo del proyecto.",
        deployLink: 'https://devsafio-nine.vercel.app/',
        repositoryLink: 'https://github.com/dlab-team/c7-frontend'
    },
    {
        title: 'Ganesh inbound',
        subtitle: 'Landing page para Paula Rotundo',
        imageUrl: Ganesh,
        technologies: [
            { name: 'React.js', logo: ReactJS },
            { name: 'Node.js', logo: Node },
            { name: 'JavaScript', logo: JavaScript },
            { name: 'Bootstrap', logo: Bootstrap },
            { name: 'CSS', logo: CSS },
            { name: 'Git', logo: Git },
            { name: 'Github', logo: Github },
            { name: 'UX / UI', logo: OK }
          ],
          detail: "Realicé esta landing page para Paula Rotundo que es dueña de Ganesh Inbound, un emprendimiento dedicado al marketing de producto. La página tiene como objetivo principal proporcionar enlaces a las principales redes sociales de Ganesh Inbound y Paula Rotundo, y facilitar el contacto con ellos. Fué un trabajo fantástico por que tuve que detectar lo que el cliente esperaba de este proyecto. Entendí cuales eran sus necesidades y lo proyecté en el código",
          deployLink: 'https://paularotundo.com/',
          repositoryLink: 'https://github.com/damian-arrieta/paula-rotundo-portfolio'
    },
    {
        title: 'Damián Arrieta',
        subtitle: 'Primera versión de mi portfolio',
        imageUrl: Damian,
        technologies: [
            { name: 'React.js', logo: ReactJS },
            { name: 'Node.js', logo: Node },
            { name: 'JavaScript', logo: JavaScript },
            { name: 'Bootstrap', logo: Bootstrap },
            { name: 'CSS', logo: CSS },
            { name: 'Git', logo: Git },
            { name: 'Github', logo: Github },
            { name: 'UX / UI', logo: OK }
          ],
          detail: "Realicé mi primer portfolio dedicado solo a búsqueda de trabajos donde pudiera realizar tareas como desarrollador. En esta primera versión del proyect, mi objetivo era mostrar mis mejores trabajos como desarrollador y contar un poco sobre mi. Antes de este trabajo nunca había trabajado con dominio y hosting así que fue la primera vez que implementé la tarea de subir un proyecto a toda la red de internet",
          deployLink: 'https://damian-arrieta.com/',
          repositoryLink: 'https://github.com/damian-arrieta/damian-arrieta-portfolio'
      },
    {
        title: 'Richie Hawtin',
        subtitle: 'Proyecto final del curso de desarrollo web',
        imageUrl: DW,
        technologies: [
            { name: 'HTML', logo: HTML },
            { name: 'CSS', logo: CSS },
            { name: 'Bootstrap', logo: Bootstrap },
            { name: 'Sass', logo: Sass },
            { name: 'Git', logo: Git },
            { name: 'Github', logo: Github },
            { name: 'UX / UI', logo: OK },
            { name: 'SEO', logo: OK },
          ],
          detail: "Iniciando el camino de la programación, inicié el curso de Desarrollo Web en Coderhouse. Aquí desarrollé con HTML y CSS mi primera página web. El proyecto fué realizado con la metodología Mobile First, implementé animaciones, flex, grid, Boostrap para los videos de la galería y SASS, donde se incluyo mapas, operaciones y más. Luego de este proyecto decidí avanzar con mi camino en el desarrollo y seguí aprendiendo mas sobre este mundo tan amplio",
          deployLink: 'https://damian-arrieta.github.io/proyecto-final-desarrollo-web/',
          repositoryLink: 'https://github.com/damian-arrieta/proyecto-final-desarrollo-web'
    },
    {
        title: 'E-Commerce React',
        subtitle: 'Proyecto final del curso de react',
        imageUrl: ECReact,
        technologies: [
            { name: 'React.js', logo: ReactJS },
            { name: 'Node.js', logo: Node },
            { name: 'Firebase', logo: Firebase },
            { name: 'JavaScript', logo: JavaScript },
            { name: 'Material UI', logo: MaterialUI },
            { name: 'CSS', logo: CSS },
            { name: 'Git', logo: Git },
            { name: 'Github', logo: Github },
            { name: 'UX / UI', logo: OK }
          ],
          detail: "Realicé este trabajo como proyecto final del curso de React en Coderhouse. El objetivo del proyecto era realizar el front end de una tienda online con carrito de compras utilizando los componentes React y Firebase como servidor en la nube. Como contenido de valor decidí implementarle algunas mejoras que lo destacara de lo que nos enseñaba el curso y esas mejoras fueron: Diseño Responsive, stock de productos almacenados en base de datos y añadirle una sección de Checkout que contiene un formulario de datos personales con sus respectivas validaciones y un boton para realizar el pedido y enviarlo a la base de datos.",
          deployLink: 'https://e-commerce-sepia-chi.vercel.app/',
          repositoryLink: 'https://github.com/damian-arrieta/e-commerce'
    },
  ];

export default worksData;