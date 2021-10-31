import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';

const AddGuide = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || `/hireguides`;
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [photo, setPhoto] = useState("");
    const [language, setLanguage] = useState("");
    const [area, setArea] = useState("");
    const [level, setLevel] = useState("");
    const [exp, setExp] = useState("");
    const [hire, setHire] = useState("");
    const [bio, setBio] = useState("");
    const [facebook, setFacebook] = useState("");

    //handle all field
    const handleName = e => {
        setName(e.target.value);
    }
    const handleMail = e => {
        setMail(e.target.value);
    }
    const handlePhoto = e => {
        setPhoto(e.target.value);
    }
    const handleLanguage = e => {
        setLanguage(e.target.value);
    }
    const handleArea = e => {
        setArea(e.target.value);
    }
    const handleLevel = e => {
        setLevel(e.target.value);
    }
    const handleExp = e => {
        setExp(e.target.value);
    }
    const handleHire = e => {
        setHire(e.target.value);
    }
    const handleBio = e => {
        setBio(e.target.value);
    }
    const handleFacebook = e => {
        setFacebook(e.target.value);
    }

    const handleAddGuide = (e) => {
        const newGuide = { name, mail, photo, language, area, level, exp, hire, bio, facebook };
        fetch('https://young-lowlands-26223.herokuapp.com/guides', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newGuide)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    history.push(redirect_url);
                    e.target.reset();
                }
            })
        e.preventDefault();
    }

    return (
        <Container>
            <h2 className="text-center mt-5 mb-3">Apply for a guide.</h2>
            <Form onSubmit={handleAddGuide}>

                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Name" onChange={handleName} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide E-mail
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide E-mail" onChange={handleMail} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Image
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://guide.com/pathname" onChange={handlePhoto} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Language
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Language use (,) for multiple" onChange={handleLanguage} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Address" onChange={handleArea} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide level
                    </Form.Label>
                    <Form.Control type="text" placeholder="Newbie, Midlevel or Expert" onChange={handleLevel} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Experience
                    </Form.Label>
                    <Form.Control type="number" placeholder="Guide experience" onChange={handleExp} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Hired
                    </Form.Label>
                    <Form.Control type="number" placeholder="Guide Hired Number" onChange={handleHire} required />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Facebook link
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://facebook.com/" onChange={handleFacebook} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Package Description
                    </Form.Label>
                    <Form.Control
                        as="textarea" onChange={handleBio}
                        placeholder="Leave a bio of your description"
                        style={{ height: '100px' }} required
                    />
                </Form.Group>
                <div className="text-center mb-5 mt-3">
                    <Button variant="danger" type="submit">
                        Add a Guide
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default AddGuide;