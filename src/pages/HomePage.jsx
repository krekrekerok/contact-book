import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import ContactTable from '../components/ContactTable';

const HomePage = () => {
    return (
            <div className = "text-center m-5">
                <h1 >Contact book</h1>
                    <Link to = "/add" >
                        <Button className = "m-3" variant = "primary">Добавить контакт</Button>
                    </Link>
                    <Link to = "/details" >
                        <Button className = "m-3" variant = "dark">Подробнее</Button>
                    </Link>

                <ContactTable/>
            </div>
    );
};

export default HomePage;