import "./MovieCard.css";
import { FaGlobeAmericas } from "react-icons/fa";
import { HiFire } from "react-icons/hi";
import { IoStarSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { TbLanguageKatakana } from "react-icons/tb";
import { Link } from "react-router-dom";

const MovieCard = ({ movie = {} }) => {
    const { score, show } = movie

    const { id, url, name, type, language, genres, status, runtime, averageRuntime, premiered, ended, officialSite, schedule, rating, weight, network, webChannel, dvdCountry, externals, image, summary, updated, _links } = show || {}

    const img = image?.medium || "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

    const ratingValue = rating?.average || 0


    return (
        <Link className="movieCard" to={`/show/${id}`}>

            <p className="status"
                style={{ background: status.toLowerCase() === "ended" ? "red" : status.toLowerCase() === "running" ? "#00cc00" : "#eac400" }}
            >
                {status}
            </p>

            <div className="movieImg">
                <img src={img} alt="" className="magic_img" />
            </div>

            <div className="movieInfo">
                <h2>{name}</h2>
                <p className="para_row"><SlCalender />{premiered || "..."} - {ended || "..."}</p>
                <p className="para_row"><span className="bold para_row"><IoStarSharp />Avg Rating:</span>{ratingValue}</p>
                <p className="para_row"><span className="bold para_row"><HiFire />Type:</span>{type}</p>

                <a className="para_row" href={network?.officialSite}><FaGlobeAmericas />{network?.country?.name || "Not Define"}</a>

                <p><span className="bold"><TbLanguageKatakana />Language</span>: {language}</p>

                <div className="tags">
                    {
                        genres?.map((tag, i) => <p key={i + "blah"} className="tag">
                            {tag}
                        </p>)
                    }
                </div>

                {/* <Link to={`/show/${id}`} className="view_btn">View Details</Link> */}
            </div>

        </Link >
    );
};

export default MovieCard;