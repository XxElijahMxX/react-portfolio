import "./about.css"

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img 
                    src="https://images.pexels.com/photos/6424589/pexels-photo-6424589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                    className="about-img"
                    />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <p className="about-description">
                    I grew up learning about technology and every part of it was amazing to me.
                    </p>
                    <p>
                    Even at an early age I immersed myself in wanting to learn about computers</p>
                    <p> and hardware that
                    I eventually started to learn how to code.
                    </p>
            </div>
        </div>
    )
}

export default About