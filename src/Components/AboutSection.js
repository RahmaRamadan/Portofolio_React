import './About.css';

function About() {
    return (
        <>
            <div className="row col-12">
                <div className="card mb-3 card-content" >
                    <div className="row g-0 card-content">
                        <div className="col-md-4">
                            <p className="paragraph">About me</p>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <p className="card-text text">Lorem Ipsum is simply dummy text of
                                the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer
                                took a galley of type and scrambled it to make a type specimen book.
                                It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets
                                containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <button href="#" className="btn btn-default aboutme">Download Resume</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
