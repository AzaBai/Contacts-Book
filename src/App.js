import React from 'react';
import Header from "./components/Header";
import ContactList from "./components/ContactsList";
import {useState, useEffect} from 'react'
import axios from 'axios'
import AddForm from "./components/AddForm";

const App = () => {
    const [isShowFrom, setShowForm] = useState(false)
    const [search, setSearch] = useState('')
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        axios('https://607539e80baf7c0017fa5850.mockapi.io/users')
            .then(({data}) => setContacts(data))
    }, [])
    console.log(contacts)
    const deleteUser = (id) => {
        axios.delete(`https://607539e80baf7c0017fa5850.mockapi.io/users/${id}`)
            .then(({data}) => setContacts(contacts.filter(el => el.id !== data.id)))
    }

    const addUser = (user) => {
        axios.post('https://607539e80baf7c0017fa5850.mockapi.io/users/', user)
            .then(({data}) => setContacts([...contacts, data]))

    }
    const updateUser = (id, name, phone) => {
        axios.put(`https://607539e80baf7c0017fa5850.mockapi.io/users/${id}`, {name, phone})
            .then(({data})=> setContacts(contacts.map(el => el.id === data.id ? data : el)))
    }

    return (
        <div className='w-1/3 mx-auto my-6'>
            <Header setSearch={setSearch} setShowForm={setShowForm}/>
            {isShowFrom && <AddForm addUser={addUser} setShowForm={setShowForm}/>}
            <ContactList search={search}
                         contacts={contacts}
                         onDelete={deleteUser}
                         updateUser={updateUser}
            />
        </div>
    );
};

export default App;