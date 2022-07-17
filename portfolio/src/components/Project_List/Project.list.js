import "./project.list.css"
import Project from "../Project/Project"

const ProjectList = () => {
    return (
        <div className="projects">
            <div className="projects-text">
                <h1 className="projects-title">Projects</h1>
                <p className="projects-desc">
                    Here is a list of some of the projects that I have worked on throughtout
                    my education with the Butler Bootcamp. Each project will have a link to either
                    a deployed application or the source code on github.
                </p>
            </div>
            <div className="projects-list">
                <Project/>
                <Project/>
                <Project/>
                <Project/>
                <Project/>
            </div>
        </div>
    )
}

export default ProjectList