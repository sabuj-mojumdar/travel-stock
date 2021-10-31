import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddPackage = () => {
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [discount, setDiscount] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [day, setDay] = useState("");
    const [description, setDescription] = useState("");

    //handle all field
    const handleTitle = e => {
        setTitle(e.target.value);
    }
    const handleLocation = e => {
        setLocation(e.target.value);
    }
    const handleImgUrl = e => {
        setImgUrl(e.target.value);
    }
    const handlePrice = e => {
        setPrice(e.target.value);
    }
    const handleDiscount = e => {
        setDiscount(e.target.value);
    }
    const handleDay = e => {
        setDay(e.target.value);
    }
    const hanldeDescription = e => {
        setDescription(e.target.value);
    }

    //add package handle
    const handleAddPackage = () => {
        const data = { title, location, price, day, description, discount, imgUrl };

        fetch("https://young-lowlands-26223.herokuapp.com/addpackage", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
    }
    return (
        <Container>
            <h2 className="mb-3 mt-5 text-center">Add a package</h2>
            <Form onSubmit={handleAddPackage}>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Title
                    </Form.Label>
                    <Form.Control type="text" placeholder="Package Title" onChange={handleTitle} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Location
                    </Form.Label>
                    <Form.Control type="text" placeholder="Package Location" onChange={handleLocation} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Add A image Url
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://images.com/url" onChange={handleImgUrl} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Price
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Price" onChange={handlePrice} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Discount
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Discount" onChange={handleDiscount} required />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Package Day
                    </Form.Label>
                    <Form.Control type="number" placeholder="Package Price" onChange={handleDay} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Package Description
                    </Form.Label>
                    <Form.Control
                        as="textarea" onChange={hanldeDescription}
                        placeholder="Leave a package description"
                        style={{ height: '100px' }} required
                    />
                </Form.Group>
                <div className="text-center mb-5 mt-3">
                    <Button variant="danger" type="submit">
                        Add a Package
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default AddPackage;