import { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';

const UseBook = () => {
    const [bookings, setBookings] = useState([]);
    const [ubook, setUBook] = useState({});
    const { bid } = useParams();

    useEffect(() => {
        fetch("https://young-lowlands-26223.herokuapp.com/bookings")
            .then(res => res.json())
            .then(data => {
                setBookings(data);
            })
    }, []);

    //delete an order
    const handleDeleteBooking = id => {
        const proceed = window.confirm("Are You sure, you want to delete?");
        if (proceed) {
            const url = `https://young-lowlands-26223.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const restBooking = bookings.filter(book => book._id !== id);
                        setBookings(restBooking);
                    }
                });

        }
    }


    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || `/bookings`;

    useEffect(() => {
        const url = `https://young-lowlands-26223.herokuapp.com/bookings/${bid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUBook(data));
    }, [bid]);

    //update all booking details
    const handleUpdateCheckIn = e => {
        const newCheck = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.checkIn = newCheck;
        setUBook(updateBooking);
    }
    const handleUpdateCheckOut = e => {
        const newCheckOut = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.checkOut = newCheckOut;
        setUBook(updateBooking);
    }
    const handleUpdateAdult = e => {
        const newAdult = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.adult = newAdult;
        setUBook(updateBooking);
    }
    const handleUpdateChild = e => {
        const newChild = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.child = newChild;
        setUBook(updateBooking);
    }
    const handleUpdateRoom = e => {
        const newRoom = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.room = newRoom;
        setUBook(updateBooking);
    }
    const handleUpdateNight = e => {
        const newNight = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.night = newNight;
        setUBook(updateBooking);
    }
    const handleUpdateOrder = e => {
        const newOrder = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.order = newOrder;
        setUBook(updateBooking);
    }
    const handleUpdateGuide = e => {
        const newGuide = e.target.value;
        const updateBooking = { ...ubook };
        updateBooking.guide = newGuide;
        setUBook(updateBooking);
    }


    const handleUpdateBooking = e => {
        const url = `https://young-lowlands-26223.herokuapp.com/update-book/${bid}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(ubook)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUBook({});
                }
            })
        history.push(redirect_url);
        e.preventDefault();
    }

    return { bookings, ubook, handleUpdateCheckIn, handleUpdateCheckOut, handleUpdateAdult, handleUpdateChild, handleUpdateRoom, handleUpdateNight, handleUpdateOrder, handleUpdateGuide, handleUpdateBooking, handleDeleteBooking };
};

export default UseBook;