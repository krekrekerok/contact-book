import React, { useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contactContext } from '../context/ContactContext';

const Details = () => {
    const {contacts, getContacts} = useContext(contactContext)

    useEffect(() => {
        getContacts()
    })

    return (
        <div  className = "text-center col-lg-6 col-md-10 mx-auto m-5">
                <div className = "text-white bg-dark p-4" >
                <h1 className = "pb-4">Details</h1>

                            <div className = 'd-flex justify-content-around '>
                                <>
                                {
                                contacts.map((item, index) => (
                                    <div key = {item.id}>
                                        <h5> {index + 1} </h5>
                                        <h5> {item.name} </h5>
                                        <h5> {item.surname} </h5>
                                        <h5> {item.phone} </h5>
                                    </div>
                                ))
                            }
                                </>


                            </div>
                                <Link to = "/">
                                    <Button variant="danger" >На главную</Button>
                                </Link>
                </div>
        </div>
    );
};

export default Details;