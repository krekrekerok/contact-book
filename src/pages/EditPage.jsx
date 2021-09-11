import React, { useContext, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { contactContext } from '../context/ContactContext';

const EditPage = () => {
    const {contactToEdit,getContactToEdit,saveEditedContact} = useContext(contactContext)
    const {key} = useParams()

    useEffect(() => {
        getContactToEdit(key)
    },[])

    const [editedContact, setEditedContact] = useState(contactToEdit)

    useEffect (()=> {
        setEditedContact(contactToEdit)
    }, [contactToEdit])

    function handleInput (e){
        let obj = {
            ...editedContact,
            [e.target.name]: e.target.value
        }
        setEditedContact(obj)
    }

    const history = useHistory()

    return (
        <div  className = "text-center col-lg-6 col-md-10 mx-auto m-5">
                <div className = "text-white bg-dark p-4" >
                <h1 className = "pb-4">Edit Contact</h1>
                {
                    editedContact ? (
                        <>
                        <Form>
                        <Form.Group className="mb-3">
                                <Form.Control 
                                    value = {editedContact.name}
                                    onChange = {handleInput} 
                                    name = "name"
                                    type="text"  />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    value = {editedContact.surname}
                                    onChange = {handleInput} 
                                    name = "surname"
                                    type="text"  />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Control 
                                    value = {editedContact.phone}
                                    onChange = {handleInput} 
                                    name = "phone"
                                    type="number" />
                            </Form.Group>

                            <div className = 'd-flex justify-content-around '>

                                <Link to = "/">
                                    <Button variant="danger" >Отмена</Button>
                                </Link>

                                <Button 
                                    variant="primary"
                                    onClick = {() => 
                                    {saveEditedContact(editedContact)
                                        history.push("/")
                                    }}
                                    >Изменить
                                </Button>

                            </div>
                        </Form>
                        </>
                    ):(
                        <h1>Loading...</h1>
                    )
                }

                </div>
        </div>
    );
};

export default EditPage;