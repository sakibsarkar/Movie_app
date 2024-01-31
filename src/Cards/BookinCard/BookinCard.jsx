import "./BookinCard.css";
import { FaRegUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const BookinCard = ({ data, id, shouldOpen, setShouldOpen }) => {
    const { movieName, guestName, email, tickets } = data


    const show = shouldOpen === id

    const handleShouldShow = () => {
        if (shouldOpen === id) {
            return setShouldOpen("")
        }

        setShouldOpen(id)
    }

    return (
        <div className="historyCard" onClick={handleShouldShow}>
            <div className="topPart">
                <div>
                    <h2><span className="bold">Movie name: </span>{movieName}</h2>
                    <p><FaRegUser />{guestName}</p>
                </div>
                <button className={show ? "notShowBtn" : ""}>
                    <IoIosArrowDown />
                </button>
            </div>

            <div className={show ? "bottomPart shouldShow" : "bottomPart"}>
                <p><span className="bold">Total Ticket: </span>{tickets}</p>
            </div>



        </div>
    );
};

export default BookinCard;