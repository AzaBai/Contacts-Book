import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import {faPen} from '@fortawesome/free-solid-svg-icons'

const ContactListItem = ({user, onDelete, updateUser}) => {
    const initials = user.name.split(' ').map(el => el[0]).join('')
    const [editable, setEditable] = useState(false)
    const [newName, setNewName] = useState(user.name)
    const [newPhone, setNewPhone] = useState(user.phone)

const saveUser =()=> {
       updateUser(user.id, newName, newPhone)
    setEditable(false)
}

    return (
        <div>
            <div className='flex items-center hover:bg-gray-100 px-4 py-2' key={user.id}>
                <div
                    className='bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold mr-5'>
                    {initials}
                </div>
                {
                    !editable &&
                    <div>
                        <h4 className='font-bold text-xl'>{user.name}</h4>
                        <p className='text-gray-500'>{user.phone}</p>
                    </div>
                }
                {
                    editable &&
                    <div>
                        <input type="text"
                               className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                               defaultValue={user.name}
                               onChange = {(e) => setNewName(e.target.value)}

                        />
                        <input type="text"
                               className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                               defaultValue={user.phone}
                               onChange = {(e) => setNewPhone(e.target.value)}
                        />

                        <div className="text-right">
                            <button className='bg-red-100 px-4 py-2 text-2xl font-semibold tracking-wider text-red-600 rounded mr-3 mb-2'
                                    onClick={()=> setEditable(false)}
                            >Cancel
                            </button>
                            <button
                                className='bg-blue-100 px-4 py-2 text-2xl font-semibold tracking-wider text-blue-600 rounded mr-3 mb-2'
                                disabled={newName.length === 0 || newPhone.length === 0}
                                onClick={saveUser}
                            >Save
                            </button>
                        </div>
                    </div>
                }

                <FontAwesomeIcon icon={faPen}
                                 className='ml-auto text-blue-400 cursor-pointer'
                                 onClick={() => setEditable(true)}
                />
                <FontAwesomeIcon icon={faTrash}
                                 className='ml-2 text-red-400 cursor-pointer'
                                 onClick={() => onDelete(user.id)}
                />
            </div>
        </div>
    );
};

export default ContactListItem;