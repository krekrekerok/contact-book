import React, { useContext, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contactContext } from '../context/ContactContext';

const ContactTable = () => {
    const {contacts, getContacts, deleteContact} = useContext(contactContext)

    useEffect(() => {
        getContacts()
    })

    return (
        <>
        {
            contacts ? (
                <div className = "text-center col-lg-6 col-md-10 mx-auto">
                    <Table striped bordered hover size = "sm" variant="dark" >
                        <thead>
                            <tr>
                            <th>№</th>
                            <th>First name</th>
                            <th>Last name</th>
                            <th>Phone number</th>
                            <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((item, index) => (
                                    <tr key = {item.id}>
                                        <td> {index + 1} </td>
                                        <td> {item.name} </td>
                                        <td> {item.surname} </td>
                                        <td> {item.phone} </td>
                                        <td className = 'd-flex justify-content-around '>
                                        <Link to = {`/edit/${item.id}`}>
                                            <Button 
                                                variant = "warning" 
                                                size = "sm"
                                                >EDIT
                                            </Button>
                                        </Link>
                                        <Button 
                                            variant = "danger" 
                                            size = "sm"
                                            onClick = {() => deleteContact(item.id)}
                                            >DEL
                                        </Button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>
                </div>
            ) : (
                <h2>Loading...</h2>
            )
        }

        </>
    );
};

export default ContactTable;