import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router';
import { useParams } from 'react-router-dom';

const UseGuide = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || `/placeorder`;
    const [allGuides, setAllGuides] = useState([]);
    const [uniqueGuide, setUniqueGuide] = useState({});
    const { gid } = useParams();

    useEffect(() => {
        fetch("https://young-lowlands-26223.herokuapp.com/guides")
            .then(res => res.json())
            .then(data => setAllGuides(data))
    }, [])

    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [adult, setAdult] = useState("");
    const [child, setChild] = useState("");
    const [room, setRoom] = useState("");
    const [night, setNight] = useState("");
    const [order, setOrder] = useState("");
    const [guide, setGuide] = useState("");

    //handle all field
    const handlecheckIn = e => {
        setCheckIn(e.target.value);
    }
    const handleCheckOut = e => {
        setCheckOut(e.target.value);
    }
    const handleAdult = e => {
        setAdult(e.target.value);
    }
    const handleChild = e => {
        setChild(e.target.value);
    }
    const handleRoom = e => {
        setRoom(e.target.value);
    }
    const handleNight = e => {
        setNight(e.target.value);
    }
    const handleOrder = e => {
        setOrder(e.target.value);
    }
    const handleGuide = e => {
        setGuide(e.target.value);
    }
    const handleBooking = (e) => {
        const data = { checkIn, checkOut, adult, child, room, night, order, guide };
        fetch("https://young-lowlands-26223.herokuapp.com/bookings", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json());
        history.push(redirect_url);
        e.preventDefault();
    }

    useEffect(() => {
        fetch(`https://young-lowlands-26223.herokuapp.com/guides/${gid}`)
            .then(res => res.json())
            .then(data => setUniqueGuide(data));
    }, [gid]);

    return { allGuides, uniqueGuide, handlecheckIn, handleCheckOut, handleAdult, handleChild, handleRoom, handleNight, handleOrder, handleGuide, handleBooking };
};

export default UseGuide;