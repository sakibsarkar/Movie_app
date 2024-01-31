import "./Bookings.css";
import BookinCard from "../../Cards/BookinCard/BookinCard";
import { useState } from "react";
import { getBookingData } from "../../Functions/Localstorage";

const Bookings = () => {
    const bookingData = getBookingData()

    const [shouldOpen, setShouldOpen] = useState(0)

    return (
        <div className="bookingsPage">
            <h1>Your Booking History</h1>
            <div className="bookingData">
                {bookingData?.map((data, i) => <BookinCard data={data} key={i + "det"} id={i} setShouldOpen={setShouldOpen} shouldOpen={shouldOpen} />)}
            </div>
        </div>
    );
};

export default Bookings;