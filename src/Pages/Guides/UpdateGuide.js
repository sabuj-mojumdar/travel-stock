import React, { useEffect, useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { useParams, useLocation, useHistory } from 'react-router-dom';

const UpdateGuide = () => {
    const [uGuide, setUGuide] = useState({});
    const { gid } = useParams();

    const locationurl = useLocation();
    const history = useHistory();
    const redirect_url = locationurl.state?.from || `/hireguides/${gid}`;

    useEffect(() => {
        const url = `https://young-lowlands-26223.herokuapp.com/guides/${gid}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUGuide(data));
    }, [gid]);

    //update all package details
    const handleNameChange = e => {
        const newName = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.name = newName;
        setUGuide(updateGuide);
    }
    const handleMailChange = e => {
        const newMail = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.mail = newMail;
        setUGuide(updateGuide);
    }
    const handlePhotoChange = e => {
        const newPhoto = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.photo = newPhoto;
        setUGuide(updateGuide);
    }
    const handleLanguageChange = e => {
        const newLanguage = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.language = newLanguage;
        setUGuide(updateGuide);
    }
    const handleAreaChange = e => {
        const newArea = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.area = newArea;
        setUGuide(updateGuide);
    }
    const handleLevelChange = e => {
        const newlevel = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.level = newlevel;
        setUGuide(updateGuide);
    }
    const handleExpChange = e => {
        const newExp = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.exp = newExp;
        setUGuide(updateGuide);
    }
    const handleHireChange = e => {
        const newHire = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.hire = newHire;
        setUGuide(updateGuide);
    }
    const handleBioChange = e => {
        const newBio = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.bio = newBio;
        setUGuide(updateGuide);
    }
    const handleFacebookChange = e => {
        const newfacebook = e.target.value;
        const updateGuide = { ...uGuide };
        updateGuide.facebook = newfacebook;
        setUGuide(updateGuide);
    }
    const handleUpdateGuide = e => {
        const url = `https://young-lowlands-26223.herokuapp.com/update-guide/${gid}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(uGuide)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setUGuide({});
                }
            })
        history.push(redirect_url);
        e.preventDefault();
    }
    const { name, mail, photo, language, area, level, exp, hire, bio, facebook } = uGuide;
    return (
        <Container>

            <h2>Update: {name}</h2>
            <Form onSubmit={handleUpdateGuide}>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Name
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Name" onChange={handleNameChange} value={name || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide E-mail
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide E-mail" onChange={handleMailChange} value={mail || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Image
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://guide.com/pathname" onChange={handlePhotoChange} value={photo || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Language
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Language use (,) for multiple" onChange={handleLanguageChange} value={language || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Address
                    </Form.Label>
                    <Form.Control type="text" placeholder="Guide Address" onChange={handleAreaChange} value={area || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide level
                    </Form.Label>
                    <Form.Control type="text" placeholder="Newbie, Midlevel or Expert" onChange={handleLevelChange} value={level || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Experience
                    </Form.Label>
                    <Form.Control type="number" placeholder="Guide experience" onChange={handleExpChange} value={exp || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Guide Hired
                    </Form.Label>
                    <Form.Control type="number" placeholder="Guide Hired Number" onChange={handleHireChange} value={hire || ''} />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>
                        Facebook link
                    </Form.Label>
                    <Form.Control type="text" placeholder="https://facebook.com/" onChange={handleFacebookChange} value={facebook || ''} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>
                        Package Description
                    </Form.Label>
                    <Form.Control
                        as="textarea" onChange={handleBioChange}
                        placeholder="Leave a bio of your description"
                        style={{ height: '100px' }} value={bio || ''}
                    />
                </Form.Group>
                <div className="text-center mb-5 mt-3">
                    <Button variant="danger" type="submit">
                        Update Guide
                    </Button>
                </div>
            </Form>

        </Container>
    );
};

export default UpdateGuide;