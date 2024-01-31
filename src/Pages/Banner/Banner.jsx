import "./Banner.css";
import { Link } from "react-router-dom";
import { Parallax, useParallax } from "react-scroll-parallax";

const Banner = () => {

    const { ref } = useParallax({ speed: 10, scale: [0.3, 1.8] })

    return (
        <div className="homeWrapper">
            <Parallax speed={50} >
                <div className="bannerText">
                    <h1 className="title" data-aos="fade-down-right">Discover and Dive into<span>TV Series Galore!</span></h1>
                    <p data-aos="fade-up" data-aos-duration="1500"><span>Welcome</span> to Show Explorer, your gateway to a world of captivating TV series! Immerse yourself in a diverse collection of shows from various genres.</p>

                    <div className="bannerButtons" >
                        <Link className="bgBtn" to={"/"}>Create</Link>
                        <Link className="borderBtn" to={"/"}>Explore</Link>
                    </div>

                    {/* <div className="bgGraphic"></div> */}
                </div>
            </Parallax>

     

            <img src="https://i.ibb.co/r3wQDBZ/45727051118.png" className="sideImage" ref={ref} />
    

            <div className="wave">
                <img src="https://i.ibb.co/ZY7GQmt/wave.png" />
            </div>



        </div >
    );
};

export default Banner;