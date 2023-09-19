import { Container } from "react-bootstrap";
import { AiOutlineLink, AiFillGithub } from "react-icons/ai";
import Project1 from "../assets/img/Project1.png";
import Project2 from "../assets/img/Project2.png";
import Project3 from "../assets/img/Project3.png";
import Project4 from "../assets/img/Project4.png";
import Project5 from "../assets/img/Project5.png";
import Project6 from "../assets/img/Project6.PNG";

import Helmet from "react-helmet";
import "./Projects.css";

function Project(props) {
  return (
    <>
      <div className="col-12 col-md-12 mb-5 col-lg-12 project-col">
        <div className="project-card px-2 py-4 row">
          <div className="col-12 col-lg-5 px-2">
            <img
              className="img-fluid"
              src={props.Image}
              loading="lazy"
            />
          </div>
          <div className="col">
            <div className="project-content">
              <h3>{props.Title}</h3>
              <p>
                {props.Desc}
              </p>

              {props.Unpublished ? 
              <a></a>
               :
              <a
                className="btn btn-dark"
                href={props.Link}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLink className="project-icon" />
                &nbsp;&nbsp;Visit Website
              </a>
              }
              <a
                className="btn btn-secondary mt-2"
                href={props.Github}
                target="_blank"
                rel="noreferrer"
              >
                <AiOutlineLink className="project-icon" />
                &nbsp;&nbsp;Visit GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

function Projects() {
  return (
    <>
      <Helmet>
        <title>Micola Arighi - Skills</title>
      </Helmet>
      <Container fluid className="project-wrapper mb-5 pb-5">
          <div className="row animate__animated animate__slideInLeft">
            <Project Image={Project1} Title={"React App - MiDo List"} Desc={"A Simple ToDo List App made with React. It uses Redux for state management and Framer Motion for animations. All the list will be stored to the local storage, so you can access them anytime."} Link={"https://midolist.netlify.app/"}  Github={"https://github.com/micolarighi/mido-app"} />

            <Project Image={Project2} Title={"Clothing Online Store"} Desc={"One of my first client ask me to made a online store for his clothing business."} Link="https://wekals-web.vercel.app" Github={"https://github.com/micolarighi/wekals-web"}  />

            <Project Image={Project3}  Title={"LinkTree Clone"} Desc={"A Clone of linktree made with vanilla html and javascript."}  Link={"https://linkhub-micolarighi.netlify.app/"} 
            Github={"https://github.com/micolarighi/micolarighi-linkhub"} 
            />

            <Project Image={Project6} Title={"VSCode Theme"} Desc={"Made my own VsCode theme, you can check it out on your vscode extension, the name is NGODING BRO"} Github={"https://github.com/micolarighi/my-vscode-theme"} Link={"https://marketplace.visualstudio.com/items?itemName=MicolaArighi.ngoding-bro"} />

            <Project Image={Project4} Title={"Website Community Profile"} Desc={"Trusted to make A Community Profile for my Campus Community"} Unpublished={true} Github={"https://github.com/micolarighi/himatekkom"}  />

            <Project Unpublished={true} Image={Project5} Title={"Online Course Platform"} Desc={"First Website that i build with a team as Front-End Developer"} Github={"https://github.com/relieyanhilman/edversity"}  />

        </div>
      </Container>
    </>
  );
}

export default Projects;
