import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UsePackage = () => {
    const { uid } = useParams();
    const [packages, setPackages] = useState([]);
    const [uniquePackage, setUniquePackage] = useState({});


    useEffect(() => {
        fetch("https://young-lowlands-26223.herokuapp.com/Packages")
            .then(res => res.json())
            .then(data => {
                setPackages(data);
            });
    }, []);



    useEffect(() => {
        fetch(`https://young-lowlands-26223.herokuapp.com/packages/${uid}`)
            .then(res => res.json())
            .then(data => setUniquePackage(data));
    }, [uid]);

    return { packages, uniquePackage };
};

export default UsePackage;