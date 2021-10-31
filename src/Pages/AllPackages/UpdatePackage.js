import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const UpdatePackage = () => {
    const [uPackage, setUPackage] = useState({});
    const { uid } = useParams();

    const locationurl = useLocation();
    const history = useHistory();
    const redirect_url = locationurl.state?.from || `/package/${uid}`;

    useEffect(() => {
        const url = `https://young-lowlands-26223.herokuapp.com/packages/${uid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUPackage(data));
    }, [uid]);

    //update all package details
    const handleTitleChange = e => {
        const newTitle = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.title = newTitle;
        setUPackage(updatePackage);
    }
    const handleLocationChange = e => {
        const newlocation = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.location = newlocation;
        setUPackage(updatePackage);
    }
    const handlePriceChange = e => {
        const newPrice = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.price = newPrice;
        setUPackage(updatePackage);
    }
    const handleDayChange = e => {
        const newDay = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.day = newDay;
        setUPackage(updatePackage);
    }
    const handleDescriptionChange = e => {
        const newDescription = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.description = newDescription;
        setUPackage(updatePackage);
    }
    const handleDiscountChange = e => {
        const newDiscount = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.discount = newDiscount;
        setUPackage(updatePackage);
    }
    const handleImageChange = e => {
        const newImage = e.target.value;
        const updatePackage = { ...uPackage };
        updatePackage.imgUrl = newImage;
        setUPackage(updatePackage);
    }
    const handleUpdatePackage = e => {
        const url = `https://young-lowlands-26223.herokuapp.com/update-package/${uid}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uPackage)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUPackage({});
                }
            })
        history.push(redirect_url);
        e.preventDefault();
    }
    const { title, location, imgUrl, price, description, day, discount } = uPackage;
    return (
        <Container>
            <h2>Update: {uPackage.title}</h2>
            <Form onSubmit={handleUpdatePackage}>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Package Title" onChange={handleTitleChange} value={title || ''} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Location
                    </Form.Label>
                    <Form.Control type="text" placeholder="Package Location" onChange={handleLocationChange} value={location || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Add A image Url
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://images.com/url" onChange={handleImageChange} value={imgUrl || ''} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Price
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Price" onChange={handlePriceChange} value={price || ''} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Discount
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Discount" onChange={handleDiscountChange} value={discount || ''} />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Day
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Price" onChange={handleDayChange} value={day || ''} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Package Description
                    </Form.Label>
                    <Form.Control
                        as="textarea" onChange={handleDescriptionChange}
                        placeholder="Leave a package description"
                        style={{ height: '100px' }} value={description || ''}
                    />
                </Form.Group>
                <div className="text-center mb-5 mt-3">
                    <Button variant="danger" type="submit">
                        Update
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default UpdatePackage;