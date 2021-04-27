import React from 'react';

const Header = ({setSearch, setShowForm}) => {
    return (
        <div className='bg-blue-600 p-4'>
            <div className='flex justify-between mb-4'>
                <h2 className='font-bold text-2xl text-white '>Contacts Book</h2>
                <span
                    className='text-white font-bold text-2xl cursor-pointer'
                    onClick={() => setShowForm(true)}
                >+</span>
            </div>
            <input type="text"
                   onChange={(e) => setSearch(e.target.value)}
                   className='w-full px-2 py-1'
                   placeholder='search'

            />
        </div>
    );
};

export default Header