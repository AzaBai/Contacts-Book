import React, {useState} from 'react';

const AddForm = ({addUser}) => {
    const [user, setUser] = useState({name:'', phone:''})
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [nameError, setNameError] = useState('')
    const [phoneError, setPhoneError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(user.name.length < 5){
            setNameError('Name should consist of at least 5 symbols')
        }else{
            setNameError('')
        }
        if(user.phone.length === 0){
            setPhoneError('Enter your phone number')
        }else{
            setPhoneError('')
        }if(user.name.length >= 5 && user.phone.length !== 0 ){
            addUser(user)
            setUser({name:'', phone:''})
        }



    }
    const handleChange = (e) => {
        setUser({...user, [e.target.name] : e.target.value})
    }
    return (
        <div>
            <form className='p-3'>

                <input type="text"
                       className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                       placeholder='Enter your name'
                       onChange={handleChange}
                       value={user.name}
                       name='name'

                />
                {nameError && <span>{nameError}</span>}
                <input type="text"
                       className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                       placeholder='Enter your phone'
                       onChange={handleChange}
                       value={user.phone}
                       name='phone'


                />
                {phoneError && <span>{phoneError}</span>}

            </form>
            <div className="text-right">
                <button
                    className='bg-red-100 px-4 py-2 text-2xl font-semobold tracking-wider text-red-600 rounded mr-3 mb-2'>
                    Cancel
                </button>
                <button
                    onClick={handleSubmit}
                    className='bg-blue-100 px-4 py-2 text-2xl font-semobold tracking-wider text-blue-600 rounded mr-3 mb-2'>
                    Add
                </button>
            </div>
        </div>
    );
};

export default AddForm;