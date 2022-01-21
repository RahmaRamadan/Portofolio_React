import './Hero.css';
import adele from './img/adele.jpg';
function Hero() {
    return (
        <>
            <div className="row col-12">
                <div className="card col-12">
                    <img src={adele} className="card-img col-12" alt="Not Found" />
                    <div className="card-img-overlay card_position">
                        <div className="card-img-overlay col-12">
                            <h1 className="card-title h1">Rahma Ramadan</h1>
                            <p className="card-text">Web Developer & Designer </p>
                            <button href="#" className="btn btn-default contactme">CONTACT ME</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;
