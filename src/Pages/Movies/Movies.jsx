import "./Movies.css";
import MovieCard from "../../Cards/MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
    const axios = useAxios()
    const { data } = useQuery({
        queryKey: ["movieData"],
        queryFn: async () => {
            const { data: movie } = await axios.get("/data")
            return movie
        }
    })


    return (
        <div>
            <h1>Movie Data</h1>
            <div className="moviesContainer">
                {
                    data?.map((movie, index) => <MovieCard key={index} movie={movie} />)
                }
            </div>
        </div>
    );
};

export default Movies;