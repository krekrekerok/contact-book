import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { contactContext } from '../context/ContactContext';
// import 'react-toastify/dist/ReactToastify.css';
// import { toast } from 'react-toastify';
import { useHistory } from 'react-router';


const AddPage = () => {
    const {addContact} = useContext(contactContext)
    const [newContact, setNewContact] = useState({
        name: "",
        surname: "",
        phone: ""
    })
    
    const history = useHistory()
    
    function handleInput (e){
        let obj = {
            ...newContact,
            [e.target.name]: e.target.value
        }
        setNewContact(obj)
    }
    
    function handleClick (){
        if (!newContact.name.trim() || 
            !newContact.surname.trim() || 
            !newContact.phone.trim()){
                return alert('Вы не заполнили все поля!')
                // toast('Вы не заполнили все поля!') 
        }
        addContact(newContact)
        setNewContact({
            name: "",
            surname: "",
            phone: ""
        })
        history.push("/")
        console.log('Added')
    }


    return (
        <div  className = "text-center col-lg-6 col-md-10 mx-auto m-5">
                <div className = "text-white bg-dark p-4" >
                <h1 className = "pb-4">Add Contact</h1>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Control 
                            value = {newContact.name}
                            onChange = {handleInput} 
                            name = "name"
                            type="text" 
                            placeholder="Введите имя" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control 
                            value = {newContact.surname}
                            onChange = {handleInput} 
                            name = "surname"
                            type="text" 
                            placeholder="Фамилия" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Control 
                            value = {newContact.phone}
                            onChange = {handleInput} 
                            name = "phone"
                            type="number" 
                            placeholder="Номер телефона" />
                    </Form.Group>
                    <div className = 'd-flex justify-content-around '>
                        <Link to = "/">
                            <Button variant="danger" >Отмена</Button>
                        </Link>
                        <Button onClick = {handleClick} variant="primary" >Добавить</Button>
                    </div>
                </Form>

                </div>
        </div>
    );
};

export default AddPage;