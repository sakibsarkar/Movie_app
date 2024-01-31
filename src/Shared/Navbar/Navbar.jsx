import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="nav_wrapper">
                <img src="https://i.ibb.co/QCQT1n7/UMOVIE-removebg-preview.png" alt="" />


                <div className="navLinks">
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/my_bookings"}>My Bookings</NavLink>
                </div>

                <button>
                    Movies
                </button>
            </div>
        </nav>

    );
};

export default Navbar;