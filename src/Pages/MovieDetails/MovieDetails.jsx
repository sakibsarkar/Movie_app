import "./MovieDetails.css";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
    const { id } = useParams()
    const axios = useAxios()
    const { data = {} } = useQuery({
        queryKey: ["movieDetail", id],
        queryFn: async (req, res) => {
            const { data: detail } = await axios.get(`/data/${id}`)
            return detail
        }
    })

    const { url, name, type, language, genres, status, runtime, averageRuntime, premiered, ended, officialSite, schedule, rating, weight, network, webChannel, dvdCountry, externals, image, summary, updated, _links } = data || {}

    const img = image?.original || "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"
    return (
        <div className="info_center">
            <div className="detailContainer">
                <img src={img} alt="" />

                <div className="detail_info">
                    <h1>Movie: {name}</h1>
                    <p><span className="bold">Lang: </span>{language} - <span className="bold">status: </span>{status} - <span className="bold">Runtime: </span>{runtime} - <span className="bold">Rating: </span> {rating?.average || 0}k</p>
                    <div dangerouslySetInnerHTML={{ __html: summary }}>
                    </div>
                    <button>Book ticket</button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;