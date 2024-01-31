import "./Movies.css";
import Loader from "../../Components/Loader/Loader";
import MovieCard from "../../Cards/MovieCard/MovieCard";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

const Movies = () => {
    const axios = useAxios()
    const { data, isLoading } = useQuery({
        queryKey: ["movieData"],
        queryFn: async () => {
            const { data: movie } = await axios.get("/data")
            return movie
        }
    })


    return (
        <div className="movie_page">
            <h1>Movie Data</h1>
            {
                isLoading ?
                    <Loader />
                    :
                    <div className="moviesContainer">
                        {
                            data?.map((movie, index) => <MovieCard key={index} movie={movie} />)
                        }
                    </div>
            }
        </div>
    );
};

export default Movies;