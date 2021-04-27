import React from 'react';
import {useForm} from "react-hook-form";

const AddForm = ({addUser, setShowForm}) => {
    // const [user, setUser] = useState({name:'', phone:''})

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = data => {
        addUser(data)
        reset()
    };


    // const handleChange = (e) => {
    //     setUser({...user, [e.target.name] : e.target.value})
    // }
    return (
        <div>
            <form className='p-3' onSubmit={handleSubmit(onSubmit)}>

                <input type="text"
                       className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                       placeholder='Enter your name'
                    // name="name"
                    // onChange={handleChange}

                       {...register("name", {required: true})}

                />
                {errors.name && <span className='text-red-500'>Введите имя вашего контакта</span>}
                <input type="text"

                       className='w-full border-2 p-4 mb-3 px-2 rounded-md'
                       placeholder='Enter your phone'

                    // name="phone"
                    // onChange={handleChange}

                       {...register("phone", {required: true})}


                />
                {errors.phone && <span className='text-red-500'>Введите номер вашего контакта</span>}

                <div className="text-right">
                    <button
                        className='bg-red-100 px-4 py-2 text-2xl font-semibold tracking-wider text-red-600 rounded mr-3 mb-2'
                        onClick={() => setShowForm(false)}
                    >
                        Cancel
                    </button>
                    <button
                        className='bg-blue-100 px-4 py-2 text-2xl font-semibold tracking-wider text-blue-600 rounded mr-3 mb-2'
                    >
                        Add
                    </button>
                </div>
            </form>

        </div>
    );
};

export default AddForm;