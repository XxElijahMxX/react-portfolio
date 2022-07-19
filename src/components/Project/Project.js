import "./project.css"
import MM from "../../img/monster.JPG"

const Project = () => {
    return (
        <div className="project">
            <div className="project-browse">
                <div className="project-circle"></div>
                <div className="project-circle"></div>
                <div className="project-circle"></div>
            </div>
            <img src={MM} alt="" className="mm-img"/>
        </div>
    )
}

export default Project