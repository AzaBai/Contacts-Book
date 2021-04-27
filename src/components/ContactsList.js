import React from 'react';
import ContactsListItem from "./ContactsListItem";

const ContactList = ({search, contacts, onDelete, updateUser}) => {
    const filteredSearch = contacts.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))
    return (
        <div className=' shadow overflow-y-scroll h-96 '>
            {
                filteredSearch.map(user => <ContactsListItem user={user} updateUser={updateUser} onDelete={onDelete} key={user.id}/>)
            }
        </div>
    );

};
export default ContactList;