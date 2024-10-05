import learn from './img/learn ccc.jpg';

export default function LearnUs() {
    return (
        <div className='header2' id="learn">
            <div className="content">
                <img src={learn} alt="description" className="learn" />
                <div className="text-and-button">
                    <h1>Learn More About Us</h1>
                    <p>
    Discover our diverse range of programs and offerings designed to help you achieve your fitness goals. Whether you're a beginner looking to get started or an experienced athlete aiming to enhance your performance, we have something for everyone. Our dedicated trainers are here to provide personalized guidance and support, ensuring you stay motivated and on track. Join us for group classes, one-on-one training sessions, and workshops tailored to your needs. Together, we can transform your fitness journey into a rewarding and empowering experience!
</p>
                    <button className="learn-button">Join Us</button>
                </div>
            </div>
        </div>
    );
}
