import './Portfolio.css';
import Box from './BoxStyleProp'

function Portfolio() {
    return (
        <>
            <div className="row col-12">
                <div className="row g-0">
                    <p className="p_paragraph">Portfolio</p>
                </div>
                <div className="col-12 boxes_position">
                   <Box 
                   boxColorL="light_brown"
                   boxColorD="dark_brown"
                   />
                </div>

            </div>
        </>
    );
}

export default Portfolio;
