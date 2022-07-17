import "./Intro.css"
import Me from "../../img/me3.png"
const About = () => {
    return (
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrap">
                    <h2 className="greeting">Hi, My name is</h2>
                    <h1 className="intro-name">Elijah Melton</h1>
                    <div className="title">
                        <div className="title-wrap">
                            <div className="title-object">Web Developer</div>
                            <div className="title-object">Content Creator</div>  
                            <div className="title-object">Student</div>
                            <div className="title-object">Entrepreneur</div>
                        </div>
                    </div>
                    <div className="desc">
                        I am a student in the Butler Coding Bootcamp for web development.
                        I have experience working on both front end and back end projects using the MERN stack.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <div className="img-bg"></div>
                <img src={Me} alt="" className="me-img"/>
            </div>
        </div>
    )
}

export default About