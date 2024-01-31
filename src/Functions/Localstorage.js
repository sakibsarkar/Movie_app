export const addBookings = (data) => {
    if (!data) {
        return;
    }

    let oldBookings = JSON.parse(localStorage.getItem("booking")) || []
    const newBookings = [...oldBookings, data]

    localStorage.setItem("booking", JSON.stringify(newBookings))
}

export const getBookingData = () => {
    const data = JSON.parse(localStorage.getItem("booking")) || []
    return data
}