import "./MovieDetails.css";
import useAxios from "../../Hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { addBookings } from "../../Functions/Localstorage";

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

    const [showForm, setShowForm] = useState(false)

    const handleBooking = (e) => {
        e.preventDefault()
        const form = e.target
        const guestName = form.name.value
        const email = form.email.value
        const tickets = form.tickets.value
        const bookingData = {
            movieName: name,
            guestName,
            email,
            tickets
        }

        addBookings(bookingData)
        document.body.classList.remove("no_scroll")
        setShowForm(false)
        toast.success("Successfuly ticket booked")
    }

    const handleHideForm = () => {
        document.body.classList.remove("no_scroll")
        setShowForm(false)
    }
    const handleShowForm = () => {
        document.body.classList.add("no_scroll")
        setShowForm(true)
    }

    return (
        <div className="info_center">
            <div className="detailContainer">
                <img src={img} alt="" />

                <div className="detail_info">
                    <h1>Movie: {name}</h1>
                    <p><span className="bold">Lang: </span>{language} - <span className="bold">status: </span>{status} - <span className="bold">Runtime: </span>{runtime} - <span className="bold">Rating: </span> {rating?.average || 0}k</p>
                    <div dangerouslySetInnerHTML={{ __html: summary }}>
                    </div>
                    <button onClick={handleShowForm}>Book ticket</button>
                </div>
            </div>



            {
                showForm ?
                    <div className="formContainer">

                        <form className="bookingForm" onSubmit={handleBooking}>
                            <div className="cancel" onClick={handleHideForm}>
                                <RxCross2 />
                            </div>
                            <div>
                                <p>Movie</p>
                                <input type="text" readOnly defaultValue={name} />
                            </div>

                            <div>
                                <p>Your name</p>
                                <input type="text" required name="name" />
                            </div>

                            <div>
                                <p>Your Email <span>(optional)</span></p>
                                <input type="email" name="email" />
                            </div>

                            <div>
                                <p>Number of Tickets</p>
                                <input type="number" name="tickets" required defaultValue={1} min={1} />
                            </div>
                            <button>Submit</button>
                        </form>
                    </div>
                    : ""
            }

        </div>
    );
};

export default MovieDetails;