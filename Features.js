import maxr from './img/maxr esdefault (1).jpg';
import images from './img/images dsd.jpg';
import image from './img/image aaaa.jpg';
import final from './img/final hhh.jpg';

export default function Feature() {
    return (
        <div id="features-section" className='feature'>
            <h3 className="feature-title">FEATURES</h3>
            <div className="photo-container">
                <div className='photo-item'>
                    <img src={maxr} alt="Weightlifting" className="photo" />
                    <h4 className="photo-title">Weightlifting</h4>
                    <p className="photo-info">A form of strength training that uses weights for resistance to build muscle and strength. It's highly effective for building lean muscle mass and improving strength.</p>
                </div>
                <div className='photo-item'>
                    <img src={image} alt="Specific Muscles" className="photo" />
                    <h4 className="photo-title">Specific Muscles</h4>
                    <p className="photo-info">Targeting specific muscle groups can enhance overall fitness and performance. Focused workouts can lead to better muscle isolation and improved results.</p>
                </div>
                <div className='photo-item'>
                    <img src={images} alt="Flex Your Muscles" className="photo" />
                    <h4 className="photo-title">Flex Your Muscles</h4>
                    <p className="photo-info">Flexing helps in activating muscles and improving the mind-muscle connection. It allows better muscle engagement during workouts and can help improve control and strength.</p>
                </div>
                <div className='photo-item'>
                    <img src={final} alt="Cardio Exercise" className="photo" />
                    <h4 className="photo-title">Cardio Exercise</h4>
                    <p className="photo-info">Cardio exercises improve cardiovascular health and endurance. Regular cardio sessions can enhance heart function, burn fat, and increase stamina.</p>
                </div>
            </div>
        </div>
    );
}
