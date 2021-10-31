import { useState, useEffect } from 'react';

const UsePackage = () => {
    const [packages, setPackages] = useState([]);


    useEffect(() => {
        fetch("https://young-lowlands-26223.herokuapp.com/Packages")
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            });
    }, []);
    return packages;
};

export default UsePackage;