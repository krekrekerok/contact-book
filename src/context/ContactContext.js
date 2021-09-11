import axios from 'axios';
import React, { useReducer } from 'react';
// import { toast } from 'react-toastify';
import { API } from '../helpers/const';
export const contactContext =  React.createContext()

const INIT_STATE = {
    contacts: null,
    contactToEdit: null
}

const reducer = (state = INIT_STATE, action) =>{
    switch(action.type) {
        case "GET_CONTACTS":
            return {...state, contacts: action.payload}
        case "GET_CONTACT_TO_EDIT":
            return {...state, contactToEdit: action.payload}
        default:
            return{...state}
    }
}


const ContactsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE)

    const addContact = async(newContact) => {
        try {
            await axios.post(API, newContact)
            alert("Контакт добавлен!")
        }catch (error){
            alert("Произошла ошибка. Попробуйте ещё раз.")
        }
        // toast("Контакт добавлен!")
    }

    const getContacts = async() => {
        const { data } = await axios(API)
        dispatch ({
            type: "GET_CONTACTS",
            payload: data
        })
    }

    const deleteContact = async(id) => {
        await axios.delete(`${API}/${id}`)
        getContacts()
    }

    const getContactToEdit = async(id) => {
        const { data } = await axios(`${API}/${id}`)
        dispatch ({
            type: "GET_CONTACT_TO_EDIT",
            payload: data
        })
    }

    const saveEditedContact = async (editedContact) =>{
        await axios.patch(`${API}/${editedContact.id}`, editedContact)
        getContacts()
    }
    

    return (
        <contactContext.Provider value = {{
            contacts: state.contacts,
            contactToEdit: state.contactToEdit,
            addContact,
            getContacts,
            deleteContact,
            getContactToEdit,
            saveEditedContact
        }}>
            {children}
        </contactContext.Provider>
    );
};

export default ContactsContextProvider;