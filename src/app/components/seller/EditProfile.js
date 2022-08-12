import { useState, useEffect } from 'react';
import FormItem from '../forms/InputForms';
import FormItemDropdown from '../forms/SelectForm';
import usStates from '../forms/State';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from 'react-bootstrap';

const EditProfile = () => {

    const [user, setUser] = useState({
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: '',

    });
    const [errors, setErrors] = useState({
        streetAddress: '',
        streetAddress2: '',
        city: '',
        state: '',
        zipCode: '',
        phoneNumber: ''

    });

    const sendProfile = () => {
        console.log(user);

        //PutUser(setUser, id, setApiError)
    };

    const onChange = (e) => {
        setUser({ ...user, [e.target.id]: e.target.value });
    };
    const btn = { backgroundColor: '#242424' };

    return (
        <Container style={btn}>
            <Form>
                <Row>
                    <Form.Group className="mb-3" controlId="streetAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={onChange} type="text" placeholder="1234 Main" />
                        <Form.Text className="text-muted">
                            We'll never share your information with anyone else.
                        </Form.Text>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group className="mb-3" controlId="streetAddress2">
                        <Form.Label>Address</Form.Label>
                        <Form.Control onChange={onChange} type="text" placeholder="apt .." />
                    </Form.Group>
                </Row>
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="state">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={onChange} type="email" placeholder="CA" />
                        </Form.Group></Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="zipCode">
                            <Form.Label>State</Form.Label>
                            <Form.Control onChange={onChange} type="email" placeholder="CA" />
                        </Form.Group>
                    </Col>
                    <Row>
                        <Form.Group className="mb-3" controlId="phoneNumber">
                            <Form.Label>Phone:</Form.Label>
                            <Form.Control onChange={onChange} type="email" placeholder="(xxx) xxx--xxxx" />
                        </Form.Group>
                    </Row>
                </Row>



                <Row>

                    <Button onClick={sendProfile} variant="primary" type="submit">
                        Update
                    </Button>

                </Row>
                <Row>
                    <Button onClick={sendProfile} variant="primary" type="submit">
                        Cancel
                    </Button>

                </Row>

            </Form>
        </Container>

    )
}

export default EditProfile