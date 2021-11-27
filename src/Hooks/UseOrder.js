import { useState, useEffect } from 'react';

const UseOrder = () => {
    const { orders, setOrders } = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);


    return { orders };
};

export default UseOrder;